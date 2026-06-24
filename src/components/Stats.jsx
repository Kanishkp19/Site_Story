import React, { useEffect, useRef } from 'react';
import { STATS } from '../data/content.js';
import useScrollReveal from '../hooks/useScrollReveal.js';

function CountUp({ target }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let c = 0;
            const s = target / 45;
            const iv = setInterval(() => {
              c += s;
              if (c >= target) {
                c = target;
                clearInterval(iv);
              }
              el.textContent = Math.round(c);
            }, 28);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span className="cnt" ref={ref}>0</span>;
}

export default function Stats() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.stat', { stagger: 0.1, start: 'top 80%', animation: 'scaleIn' });

  return (
    <section id="stats" ref={sectionRef}>
      <div className="stats-g">
        {STATS.map((s, i) => (
          <div className="stat" key={i}>
            <div className="sn">
              {s.value !== null ? (
                <>
                  <CountUp target={s.value} />
                  {s.suffix}
                </>
              ) : (
                s.suffix
              )}
            </div>
            <p className="sl">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
