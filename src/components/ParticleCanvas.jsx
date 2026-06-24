import React, { useEffect, useRef } from 'react';

class Particle {
  constructor(cw, ch) {
    this.cw = cw;
    this.ch = ch;
    this.init();
  }
  init() {
    this.x = Math.random() * this.cw;
    this.y = Math.random() * this.ch;
    this.vx = (Math.random() - 0.5) * 0.45;
    this.vy = (Math.random() - 0.5) * 0.45;
    this.r = Math.random() * 1.4 + 0.4;
    this.a = Math.random() * 0.35 + 0.05;
    this.ph = Math.random() * Math.PI * 2;
    this.spd = 0.008 + Math.random() * 0.006;
  }
  tick(pmx, pmy) {
    const dx = this.x - pmx, dy = this.y - pmy;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < 130) {
      const f = (130 - d) / 130;
      this.vx += (dx / d) * f * 0.55;
      this.vy += (dy / d) * f * 0.55;
    }
    this.vx *= 0.975;
    this.vy *= 0.975;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0) this.x = this.cw;
    if (this.x > this.cw) this.x = 0;
    if (this.y < 0) this.y = this.ch;
    if (this.y > this.ch) this.y = 0;
    this.ph += this.spd;
  }
  draw(ctx) {
    const a = this.a * (0.5 + 0.5 * Math.sin(this.ph));
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${a})`;
    ctx.fill();
  }
}

export default function ParticleCanvas({ targetId = 'hero' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const heroEl = document.getElementById(targetId);
    let cw, ch, parts = [];
    let pmx = -1e4, pmy = -1e4;
    let raf;

    const isMobile = window.innerWidth <= 760;
    const COUNT = isMobile ? 55 : 140;
    const LINK_DIST = isMobile ? 65 : 85;

    function resize() {
      cw = canvas.width = canvas.offsetWidth;
      ch = canvas.height = canvas.offsetHeight;
    }
    function initParts() {
      parts = [];
      for (let i = 0; i < COUNT; i++) parts.push(new Particle(cw, ch));
    }

    resize();
    initParts();

    const onResize = () => {
      resize();
      initParts();
    };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      pmx = e.clientX - r.left;
      pmy = e.clientY - r.top;
    };
    const onLeave = () => {
      pmx = -1e4;
      pmy = -1e4;
    };

    window.addEventListener('resize', onResize);
    heroEl?.addEventListener('mousemove', onMove);
    heroEl?.addEventListener('mouseleave', onLeave);

    function drawConns() {
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x, dy = parts[i].y - parts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / LINK_DIST) * 0.055})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, cw, ch);
      parts.forEach((p) => {
        p.tick(pmx, pmy);
        p.draw(ctx);
      });
      drawConns();
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      heroEl?.removeEventListener('mousemove', onMove);
      heroEl?.removeEventListener('mouseleave', onLeave);
    };
  }, [targetId]);

  return <canvas id="hc" ref={canvasRef}></canvas>;
}
