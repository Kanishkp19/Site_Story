import React from 'react';

const THEME_CLASS = {
  gym: 'm-gym',
  clinic: 'm-cli',
  cafe: 'm-caf',
  restaurant: 'm-res',
  salon: 'm-sal',
  retail: 'm-ret',
};

function renderHeadline(headline) {
  return headline.map((part, i) => {
    if (typeof part === 'string') {
      return (
        <React.Fragment key={i}>
          {part}
          {i < headline.length - 1 ? <br /> : null}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={i}>
        <span>{part.text}</span>
        {i < headline.length - 1 ? <br /> : null}
      </React.Fragment>
    );
  });
}

export default function PortfolioMock({ item }) {
  const cls = THEME_CLASS[item.theme];

  return (
    <div className={cls}>
      {/* NAV */}
      {item.theme === 'gym' && (
        <div className="m-gym-nav">
          <div className="m-gym-logo">{item.logo}</div>
          <div className="m-gym-lnk">
            {item.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      )}
      {item.theme === 'clinic' && (
        <div className="m-cli-nav">
          <div className="m-cli-logo">{item.logo}</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {item.navRight.map((n) => (
              <span key={n} style={{ fontSize: 7, color: '#64748b', fontWeight: 500 }}>
                {n}
              </span>
            ))}
          </div>
        </div>
      )}
      {item.theme === 'cafe' && (
        <div className="m-caf-nav">
          <div className="m-caf-logo">{item.logo}</div>
          <div style={{ fontSize: 7, color: 'rgba(255,255,255,.3)' }}>{item.navRight[0]}</div>
        </div>
      )}
      {item.theme === 'restaurant' && (
        <div className="m-res-nav">
          <div className="m-res-logo">{item.logo}</div>
          <div style={{ fontSize: 7, color: 'rgba(255,255,255,.3)' }}>{item.navRight[0]}</div>
        </div>
      )}
      {item.theme === 'salon' && (
        <div className="m-sal-nav">
          <div className="m-sal-logo">{item.logo}</div>
          <div style={{ fontSize: 7, color: 'rgba(255,255,255,.3)' }}>{item.navRight[0]}</div>
        </div>
      )}
      {item.theme === 'retail' && (
        <div className="m-ret-nav">
          <div className="m-ret-logo">{item.logo}</div>
          <div style={{ fontSize: 7, color: '#6b7280', fontWeight: 500 }}>{item.navRight[0]}</div>
        </div>
      )}

      {/* HERO BODY */}
      <div className={`${cls}-hero`}>
        {item.theme === 'gym' && (
          <>
            <div className="m-gym-hl">{renderHeadline(item.headline)}</div>
            <div className="m-gym-s">{item.sub}</div>
            <div className="m-gym-b">{item.cta}</div>
            <div className="m-gym-stats">
              {item.stats.map((s) => (
                <div className="m-gym-st" key={s.l}>
                  <div className="n">{s.n}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {item.theme === 'clinic' && (
          <>
            <div className="m-cli-tag">{item.tag}</div>
            <div className="m-cli-hl">{renderHeadline(item.headline)}</div>
            <div className="m-cli-s">{item.sub}</div>
            <div className="m-cli-btn">{item.cta}</div>
            <div className="m-cli-cds">
              {item.cards.map((c) => (
                <div className="m-cli-cd" key={c.title}>
                  <div className="m-cli-cd-i">{c.icon}</div>
                  <div className="m-cli-cd-t">{c.title}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {item.theme === 'cafe' && (
          <>
            <div className="m-caf-hl">{renderHeadline(item.headline)}</div>
            <div className="m-caf-s">{item.sub}</div>
            <div className="m-caf-tags">
              {item.tags.map((t) => (
                <span className="m-caf-tg" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="m-caf-menu">
              {item.menu.map((m) => (
                <div className="m-caf-item" key={m.n}>
                  <div className="m-caf-item-n">{m.n}</div>
                  <div className="m-caf-item-p">{m.p}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {item.theme === 'restaurant' && (
          <>
            <div className="m-res-eye">{item.eyebrow}</div>
            <div className="m-res-hl">{renderHeadline(item.headline)}</div>
            <div className="m-res-s">{item.sub}</div>
            <div className="m-res-btn">{item.cta}</div>
            <div className="m-res-di">
              {item.dishes.map((d) => (
                <div className="m-res-d" key={d.title}>
                  <div className="m-res-d-i">{d.icon}</div>
                  <div className="m-res-d-t">{d.title}</div>
                  <div className="m-res-d-s">{d.sub}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {item.theme === 'salon' && (
          <>
            <div className="m-sal-hl">{renderHeadline(item.headline)}</div>
            <div className="m-sal-s">{item.sub}</div>
            <div className="m-sal-srvs">
              {item.services.map((s) => (
                <span className="m-sal-srv" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <div className="m-sal-feats">
              {item.feats.map((f) => (
                <div className="m-sal-feat" key={f.l}>
                  <div className="m-sal-feat-n">{f.n}</div>
                  <div className="m-sal-feat-l">{f.l}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {item.theme === 'retail' && (
          <>
            <div className="m-ret-hl">{renderHeadline(item.headline)}</div>
            <div className="m-ret-s">{item.sub}</div>
            <div className="m-ret-g">
              {item.products.map((p) => (
                <div className="m-ret-it" key={p.label}>
                  <div className="m-ret-img" style={{ background: p.grad }}></div>
                  <div className="m-ret-in">{p.label}</div>
                  {p.sale && <div className="m-ret-sale">{p.sale}</div>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
