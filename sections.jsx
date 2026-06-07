// ===== NAV =====
function Nav({ onCTAClick }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', f, { passive: true });
    f();
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <BrandMark size={44} />
          <span className="brand-name">Transformica</span>
          <span className="brand-badge" aria-label="Pro Max">
            <span className="bb-pro">PRO</span>
            <span className="bb-max">MAX</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#how" className="nav-link">How it works</a>
          <a href="#plan" className="nav-link">The Program</a>
          <a href="#results" className="nav-link">Results</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <button onClick={onCTAClick} className="btn btn-mint nav-cta">
            <span className="nav-cta-full">Start your transformation</span>
            <span className="nav-cta-short">Start</span>
            <Icon.Arrow size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

// ===== HERO =====
function Hero({ onCTAClick }) {
  const stageRef = React.useRef(null);
  React.useEffect(() => {
    const stage = stageRef.current; if (!stage) return;
    function onMove(e) {
      const r = stage.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const py = ((e.clientY - r.top) / r.height - 0.5) * 2;
      const phone = stage.querySelector('.phone');
      if (phone) phone.style.transform = `translate(-50%, -50%) rotateY(${-14 + px * 4}deg) rotateX(${8 - py * 4}deg)`;
      const badges = stage.querySelectorAll('.float-badge');
      badges.forEach((b, i) => {
        const depth = 8 + i * 4;
        b.style.transform = `translate(${px * depth}px, ${py * depth}px)`;
      });
    }
    stage.addEventListener('mousemove', onMove);
    return () => stage.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <header className="hero" id="top">
      <NebulaShader />
      <div className="grid-bg"></div>

      <div className="container hero-inner">
        <div>
          <div className="pill">
            <span className="dot"></span>
            <span>Now accepting new clients for June 2026 cohort</span>
          </div>
          <h1 className="hero-title">
            The last fitness program <span className="grad">you'll ever need.</span>
          </h1>
          <p className="hero-sub">
            A 90-day, science-backed body recomposition system built on bloodwork analysis, a custom diet & training plan, and weekly 1-on-1 coaching. Real results — or your money back.
          </p>
          <div className="hero-cta">
            <button onClick={onCTAClick} className="btn btn-mint btn-lg">
              Start your 7-day risk-free trial <Icon.Arrow size={24} />
            </button>
            <a href="#results" className="btn btn-ghost btn-lg">
              See real results
            </a>
          </div>
          <div className="hero-trust">
            <div className="item"><Icon.Check size={24} /> 7-day money back guarantee</div>
            <div className="item"><Icon.Check size={24} /> 5,000+ clients transformed</div>
            <div className="item"><Icon.Check size={24} /> 4.9 average rating</div>
          </div>
        </div>

        <div className="hero-visual" ref={stageRef}>
          <div className="phone-stage">
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-notch"></div>
                <div className="phone-statusbar">
                  <span>9:41</span>
                  <span className="right">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><rect x="0" y="6" width="2" height="4" rx="0.5"/><rect x="4" y="4" width="2" height="6" rx="0.5"/><rect x="8" y="2" width="2" height="8" rx="0.5"/><rect x="12" y="0" width="2" height="10" rx="0.5"/></svg>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1"><path d="M1 4 Q7 -1 13 4"/><path d="M3 6 Q7 2 11 6"/><circle cx="7" cy="8" r="1" fill="currentColor"/></svg>
                    <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="0.5" width="18" height="9" rx="2"/><rect x="2" y="2" width="12" height="6" rx="1" fill="currentColor"/><rect x="20" y="3" width="1.5" height="4" rx="0.5" fill="currentColor"/></svg>
                  </span>
                </div>
                <div className="phone-content">
                  <div className="track-row">
                    <div className="track-pill">
                      <div className="ic">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="4" y2="12"/><rect x="4" y="8" width="3" height="8" rx="1"/><line x1="8" y1="12" x2="16" y2="12"/><rect x="17" y="8" width="3" height="8" rx="1"/><line x1="20" y1="12" x2="22" y2="12"/></svg>
                      </div>
                      <div className="lbl">Track Workout</div>
                    </div>
                    <div className="track-pill diet">
                      <div className="ic">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c.5-2 2.5-4 5-4-1 2-2 3-4 4 2.5 0 5 2 5 5 0 5-4 11-6 11s-2-1-3-1-1 1-3 1S2 16 2 11c0-3 2.5-5 5-5 1.5 0 2.5.7 3 1 .5-.4 1.5-1 2-1z"/></svg>
                      </div>
                      <div className="lbl">Track your Diet</div>
                    </div>
                  </div>

                  <div className="offers-card">
                    <div>
                      <div className="ttl">Offers & Coupons</div>
                      <div className="sub">Unlock rewards as you progress</div>
                      <div className="btn-mini">View My Offers</div>
                    </div>
                    <div className="gift"></div>
                  </div>

                  <div className="phone-h">Track your goal</div>

                  <div className="goal-card">
                    <svg className="goal-ring" width="64" height="64">
                      <circle cx="32" cy="32" r="26" stroke="#E2E8F0" strokeWidth="6" fill="none" />
                      <circle cx="32" cy="32" r="26" stroke="#3B82F6" strokeWidth="6" fill="none"
                        strokeDasharray={2 * Math.PI * 26}
                        strokeDashoffset={2 * Math.PI * 26 * (1 - 0.78)}
                        strokeLinecap="round" />
                      <circle cx="32" cy="32" r="26" stroke="#22C55E" strokeWidth="6" fill="none"
                        strokeDasharray={2 * Math.PI * 26}
                        strokeDashoffset={2 * Math.PI * 26 * (1 - 0.42)}
                        strokeLinecap="round" />
                    </svg>
                    <div className="goal-stats">
                      <div className="goal-row eat">
                        <div className="gi">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v20M7 2v7a4 4 0 0 1-4 4M21 2v20M17 2v7a4 4 0 0 0 4 4"/></svg>
                        </div>
                        <div className="nums">
                          <div className="v">2,000<span className="u">/ 2,567 kcal</span></div>
                          <div className="l">Calories consumed</div>
                        </div>
                        <div className="arr-mini"><Icon.Arrow size={10} /></div>
                      </div>
                      <div className="goal-row burn">
                        <div className="gi">
                          <Icon.Flame size={12} />
                        </div>
                        <div className="nums">
                          <div className="v">700<span className="u">/ 880 kcal</span></div>
                          <div className="l">Calories burnt</div>
                        </div>
                        <div className="arr-mini"><Icon.Arrow size={10} /></div>
                      </div>
                    </div>
                  </div>

                  <div className="ww-row">
                    <div className="ww-card">
                      <div className="label-row">
                        <div className="lbl">Water</div>
                        <div className="ic-mini" style={{ background: '#DBEAFE' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#3B82F6"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/></svg>
                        </div>
                      </div>
                      <div className="val">3<span className="u"> L</span></div>
                      <div className="cta">
                        <span className="cta-btn">Add Water</span>
                        <span className="cta-arr"><Icon.Arrow size={10} /></span>
                      </div>
                    </div>
                    <div className="ww-card">
                      <div className="label-row">
                        <div className="lbl">Weight</div>
                        <div className="ic-mini" style={{ background: '#DBEAFE' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M8 10c.5-1 2-2 4-2s3.5 1 4 2"/></svg>
                        </div>
                      </div>
                      <div className="val">80.0<span className="u"> kg</span></div>
                      <div className="cta">
                        <span className="cta-btn">Update</span>
                        <span className="cta-arr"><Icon.Arrow size={10} /></span>
                      </div>
                    </div>
                  </div>

                  <div className="steps-card">
                    <div className="steps-row">
                      <div className="steps-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5 18c-1.5 0-3 1-3 2.5S3 22 5 22s3-.7 3-2c0-1.5-.5-2-3-2zm14 0c-2.5 0-3 .5-3 2 0 1.3 1 2 3 2s3-1 3-1.5S20.5 18 19 18zM7 4c0-1 1-2 2-2s2 1 2 2v9c0 1.5-1 3-2.5 3S6 14.5 6 13V4zm6 0c0-1 1-2 2-2s2 1 2 2v9c0 1.5-1 3-2.5 3S13 14.5 13 13V4z"/></svg>
                      </div>
                      <div className="steps-text">
                        <div className="t">Steps Tracker</div>
                        <div className="s"><b>2,000</b> steps extra today</div>
                      </div>
                      <div className="steps-right">
                        <div className="x">10,000<span className="of">/8,000</span></div>
                      </div>
                      <div className="steps-arr"><Icon.Arrow size={10} /></div>
                    </div>
                    <div className="steps-bar"><span style={{ width: '100%' }}></span></div>
                  </div>

                  <div className="phone-tabs">
                    <div className="tab active">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      <span>Home</span>
                    </div>
                    <div className="tab">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                      <span>Plan</span>
                    </div>
                    <div className="tab">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="4" y2="12"/><rect x="4" y="8" width="3" height="8" rx="1"/><line x1="8" y1="12" x2="16" y2="12"/><rect x="17" y="8" width="3" height="8" rx="1"/><line x1="20" y1="12" x2="22" y2="12"/></svg>
                      <span>Coach</span>
                    </div>
                    <div className="tab">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span>Me</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="float-badge b1">
              <div className="icon"><Icon.Flame size={27} /></div>
              <div>
                <div className="lbl">Weight lost</div>
                <div className="val">12.2<span className="u">kgs</span></div>
              </div>
            </div>
            <div className="float-badge b2 mint">
              <div className="icon"><Icon.Star size={27} /></div>
              <div>
                <div className="lbl">Client rating</div>
                <div className="val">4.9<span className="u">/ 5</span></div>
              </div>
            </div>
            <div className="float-badge b3">
              <div className="icon"><Icon.Verified size={27} /></div>
              <div>
                <div className="lbl">Goal hit</div>
                <div className="val">96<span className="u">%</span></div>
              </div>
            </div>

            <div className="float-badge meal meal-top">
              <div className="meal-plate">
                <svg viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="30" fill="#FAFBFD" stroke="#E2E8F0" strokeWidth="1.2" />
                  <circle cx="32" cy="32" r="25" fill="#FFFFFF" />
                  {/* greens - top half */}
                  <path d="M 32 7 A 25 25 0 0 1 57 32 L 32 32 Z" fill="#22C55E" />
                  <path d="M 32 7 A 25 25 0 0 0 7 32 L 32 32 Z" fill="#16A34A" />
                  {/* grain - bottom left */}
                  <path d="M 7 32 A 25 25 0 0 0 19 53.5 L 32 32 Z" fill="#F5C26B" />
                  {/* protein - bottom right */}
                  <path d="M 57 32 A 25 25 0 0 1 45 53.5 L 32 32 Z" fill="#92400E" />
                  {/* avocado center */}
                  <circle cx="32" cy="32" r="6" fill="#84CC16" />
                  <circle cx="32" cy="32" r="2.5" fill="#65A30D" />
                  {/* tomato dots */}
                  <circle cx="22" cy="16" r="2.4" fill="#EF4444" />
                  <circle cx="42" cy="20" r="2" fill="#EF4444" />
                  <circle cx="48" cy="42" r="1.8" fill="#FCD34D" />
                </svg>
              </div>
              <div>
                <div className="lbl">Lunch logged</div>
                <div className="val">42<span className="u">g protein</span></div>
              </div>
            </div>

            <div className="float-badge meal meal-bot">
              <div className="meal-plate">
                <svg viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="30" fill="#FAFBFD" stroke="#E2E8F0" strokeWidth="1.2" />
                  <circle cx="32" cy="32" r="25" fill="#FFFFFF" />
                  {/* greens - left side */}
                  <path d="M 7 32 A 25 25 0 0 1 32 7 L 32 32 Z" fill="#15803D" />
                  <path d="M 7 32 A 25 25 0 0 0 32 57 L 32 32 Z" fill="#22C55E" />
                  {/* protein - right */}
                  <path d="M 32 7 A 25 25 0 0 1 57 32 L 32 32 Z" fill="#7C2D12" />
                  <path d="M 57 32 A 25 25 0 0 1 32 57 L 32 32 Z" fill="#92400E" />
                  {/* center quinoa */}
                  <circle cx="32" cy="32" r="7" fill="#FBBF24" />
                  <circle cx="29" cy="30" r="1.2" fill="#92400E" />
                  <circle cx="34" cy="33" r="1.2" fill="#92400E" />
                  <circle cx="31" cy="34" r="1" fill="#92400E" />
                  {/* sprouts */}
                  <circle cx="18" cy="18" r="2" fill="#4ADE80" />
                  <circle cx="46" cy="18" r="2" fill="#86EFAC" />
                  <circle cx="46" cy="46" r="2" fill="#65A30D" />
                </svg>
              </div>
              <div>
                <div className="lbl">Today's bowl</div>
                <div className="val">480<span className="u">kcal</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ===== TRUST STRIP =====
function TrustStrip() {
  const items = [
    'Bloodwork-backed protocols',
    'Personalized macros',
    'Weekly coach check-ins',
    'Habit-based tracking',
    'Sustainable fat loss',
    'Muscle preserved',
    'No crash diets',
    'Lifetime community',
  ];
  const ItemList = ({ keyPrefix }) => (
    <React.Fragment>
      {items.map((t, i) => (
        <React.Fragment key={`${keyPrefix}-${i}`}>
          <div className="feat"><Icon.Check size={18} /> {t}</div>
          <span className="sep"></span>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
  return (
    <section className="trust-strip">
      <div className="marquee">
        <ItemList keyPrefix="a" />
        <ItemList keyPrefix="b" />
      </div>
    </section>
  );
}

// ===== STATS =====
function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <Reveal>
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-num"><Counter to={5240} suffix="+" /></div>
              <div className="stat-lbl">Lives transformed</div>
            </div>
            <div className="stat">
              <div className="stat-num"><Counter to={62000} suffix="+" /></div>
              <div className="stat-lbl">Total kgs lost</div>
            </div>
            <div className="stat">
              <div className="stat-num">4.9<span className="suffix">★</span></div>
              <div className="stat-lbl">Avg. client rating</div>
            </div>
            <div className="stat">
              <div className="stat-num"><Counter to={96} suffix="%" /></div>
              <div className="stat-lbl">Hit their 90-day goal</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ===== HOW IT WORKS =====
function HowItWorks() {
  const steps = [
    {
      n: '01',
      icon: <Icon.Brain size={26} />,
      title: 'Diagnose, don\'t guess.',
      body: 'We start with complete bloodwork analysis to uncover hormonal, metabolic and nutritional deficiencies — the real reason most programs fail you.'
    },
    {
      n: '02',
      icon: <Icon.Target size={26} />,
      title: 'A plan built only for you.',
      body: 'Your dedicated coach designs a custom training split, calorie & macro breakdown and recovery system around your body, schedule and goals.'
    },
    {
      n: '03',
      icon: <Icon.Chart size={26} />,
      title: 'Adjust weekly. Win in 90 days.',
      body: 'Weekly 1-on-1 check-ins, in-app tracking, and up to 2 plan alterations keep your transformation on track — week after week.'
    },
  ];
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">How it works</div>
          <h2 className="section-title">A complete system — not another generic gym program.</h2>
          <p className="section-sub">
            Built by physicians, performance coaches and behavioral scientists. Engineered for the one thing that matters: your result.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="step">
                <div className="step-num">STEP {s.n}</div>
                <div className="step-icon">{s.icon}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-body">{s.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PLAN =====
function PlanSection({ onCTAClick }) {
  return (
    <section className="section plan-section" id="plan">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">The Transformica Pro program</div>
          <h2 className="section-title">One program. Built to actually work.</h2>
          <p className="section-sub">
            Stop guessing. Stop starting over. This is the only 90-day plan that's already transformed 5,240 people — and counting.
          </p>
        </div>

        <div className="plan-wrap">
          <Reveal>
            <Tilt max={3}>
              <div className="plan-card">
                <div className="plan-badge"><Icon.Star size={11} /> Most chosen by 70% of new clients</div>
                <div className="plan-name">Transformica <span className="accent">Pro</span></div>
                <div className="plan-tagline">3-month complete body recomposition program</div>

                <div className="price-strike">
                  <span className="strike">Regular ₹10,000</span>
                  <span className="save">Save ₹2,003 today</span>
                </div>
                <div className="price-row">
                  <div className="price-curr">₹</div>
                  <div className="price-amount">7,997</div>
                  <div className="price-cycle">one time · full 90 days</div>
                </div>

                <ul className="feature-list">
                  <li><div className="ck"><Icon.Check size={12} /></div><div><b>Complete blood-work analysis</b><div className="meta">Uncover deficiencies, hormonal imbalances and metabolic blocks.</div></div></li>
                  <li><div className="ck"><Icon.Check size={12} /></div><div><b>Custom diet & workout plan</b><div className="meta">Tailored to your body, lifestyle and equipment access.</div></div></li>
                  <li><div className="ck"><Icon.Check size={12} /></div><div><b>Weekly 1-on-1 coach check-ins</b><div className="meta">Live video calls with your dedicated expert coach.</div></div></li>
                  <li><div className="ck"><Icon.Check size={12} /></div><div><b>Up to 2 mid-program plan alterations</b><div className="meta">Adjust as your body and life change.</div></div></li>
                  <li><div className="ck"><Icon.Check size={12} /></div><div><b>Full access to the Transformica app</b><div className="meta">Workouts, meals, habits, sleep & progress tracking in one place.</div></div></li>
                </ul>

                <div className="plan-cta">
                  <div className="row">
                    <button onClick={onCTAClick} className="btn btn-mint btn-xl" style={{ flex: 1, justifyContent: 'center' }}>
                      Claim my spot — ₹7,997 <Icon.Arrow size={16} />
                    </button>
                  </div>
                  <div className="plan-foot">
                    <span className="li"><Icon.Shield size={14} /> 7-day money back guarantee</span>
                    <span className="li"><Icon.NoLock size={14} /> No contracts. Cancel anytime.</span>
                    <span className="li"><Icon.Lock size={14} /> Secure checkout</span>
                  </div>
                </div>
              </div>
            </Tilt>
          </Reveal>

          <Reveal delay={120}>
            <div className="plan-side">
              <div className="compare">
                <h4>How Transformica compares</h4>
                <div className="compare-pro-col"></div>
                <div className="compare-row head">
                  <div className="label">What you get</div>
                  <div className="v">Apps</div>
                  <div className="v pro">Transformica</div>
                  <div className="v">Trainer</div>
                </div>
                <div className="compare-row">
                  <div className="label">Bloodwork analysis</div>
                  <div className="v x">—</div>
                  <div className="v pro"><Icon.Check size={14} style={{ color: 'var(--mint)' }} /></div>
                  <div className="v x">—</div>
                </div>
                <div className="compare-row">
                  <div className="label">Custom training plan</div>
                  <div className="v x">Generic</div>
                  <div className="v pro"><Icon.Check size={14} style={{ color: 'var(--mint)' }} /></div>
                  <div className="v"><Icon.Check size={14} style={{ color: 'var(--mint)' }} /></div>
                </div>
                <div className="compare-row">
                  <div className="label">Custom diet & macros</div>
                  <div className="v x">Generic</div>
                  <div className="v pro"><Icon.Check size={14} style={{ color: 'var(--mint)' }} /></div>
                  <div className="v x">—</div>
                </div>
                <div className="compare-row">
                  <div className="label">Weekly expert check-ins</div>
                  <div className="v x">—</div>
                  <div className="v pro"><Icon.Check size={14} style={{ color: 'var(--mint)' }} /></div>
                  <div className="v"><Icon.Check size={14} style={{ color: 'var(--mint)' }} /></div>
                </div>
                <div className="compare-row">
                  <div className="label">Money-back guarantee</div>
                  <div className="v x">—</div>
                  <div className="v pro"><Icon.Check size={14} style={{ color: 'var(--mint)' }} /></div>
                  <div className="v x">—</div>
                </div>
                <div className="compare-row">
                  <div className="label">Typical 90-day cost</div>
                  <div className="v">₹1,500</div>
                  <div className="v pro" style={{ color: 'var(--mint)' }}>₹7,997</div>
                  <div className="v">₹45,000+</div>
                </div>
              </div>

              <div className="guarantee-mini">
                <div className="shield"><Icon.Shield size={30} style={{ color: '#002416' }} /></div>
                <div>
                  <h5>7-day risk-free trial</h5>
                  <p>Don't love it in the first week? Email us. Get a full refund. No questions, no friction.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== RESULTS =====
function ResultsSection() {
  const R = (typeof window !== 'undefined' && window.__resources) || {};
  const asset = (id, path) => R[id] || path;
  const results = [
    { img: asset('t1', 'assets/t1.png'), name: 'Rohan M.', detail: '90 days', badge: '−12.2 kg', age: 'Age 36 · Mumbai' },
    { img: asset('t2', 'assets/t2.png'), name: 'Vikram S.', detail: '90 days', badge: '−12 kg', age: 'Age 41 · Delhi' },
    { img: asset('t3', 'assets/t3.png'), name: 'Priya N.', detail: '90 days', badge: '−14 kg', age: 'Postpartum · Bangalore' },
    { img: asset('t4', 'assets/t4.png'), name: 'Anjali K.', detail: '90 days', badge: '−12 kg', age: 'Age 33 · Pune' },
    { img: asset('t5', 'assets/t5.png'), name: 'Janhavi R.', detail: '5 months', badge: '−17 kg', age: 'Age 26 · Delhi' },
    { img: asset('t6', 'assets/t6.png'), name: 'Deepthi V.', detail: '3 months', badge: '−15 kg', age: 'Postpartum · Hyderabad' },
    { img: asset('t7', 'assets/t7.png'), name: 'Navneet K.', detail: '6 months', badge: '−20 kg', age: 'Age 38 · Chandigarh' },
  ];
  return (
    <section className="section results-section" id="results">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">Real clients · Real results</div>
          <h2 className="section-title">Verified 90-day transformations.</h2>
          <p className="section-sub">
            Every story below is a real Transformica Pro client. Same plan. Same coaches. Same guarantee.
          </p>
        </div>

        <div className="results-grid">
          {results.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <Tilt max={6}>
                <div className="result-card">
                  <img src={r.img} alt={`${r.name} transformation`} loading="lazy" />
                  <div className="result-meta">
                    <div className="result-name">{r.name}</div>
                    <div className="result-detail">
                      <span>{r.age}</span>
                      <span className="dot"></span>
                      <span className="badge">{r.badge}</span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
          <Reveal delay={results.length * 80}>
            <a href="#plan" className="result-card result-more">
              <div className="result-more-inner">
                <div className="result-more-stat">5,240+</div>
                <div className="result-more-label">More verified transformations like these</div>
                <div className="result-more-cta">
                  Start yours <Icon.Arrow size={14} />
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== TESTIMONIALS =====
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I'd tried four different programs over six years and nothing stuck. The bloodwork was the unlock — my coach found a thyroid issue everyone else missed. Down 12kg and finally maintaining.",
      name: 'Rohan Malhotra',
      role: 'Product Manager · 36',
      result: '−12 kg in 90 days',
      initials: 'RM',
      tone: 'mint'
    },
    {
      quote: "What sold me was the weekly call. My coach knew my schedule, my injuries, my excuses. I never felt like a number. The plan adjusted with me — and the results just kept coming.",
      name: 'Priya Nair',
      role: 'New mom · Postpartum',
      result: '−13 kg, 4 dress sizes',
      initials: 'PN',
      tone: 'blue'
    },
    {
      quote: "The app, the coach, the plan, the guarantee — it's worth ten times what they charge. I came in skeptical and left in the best shape of my life. Already signed up for round two.",
      name: 'Vikram Shah',
      role: 'Founder · 41',
      result: '−12 kg, +3% muscle',
      initials: 'VS',
      tone: 'mint'
    },
  ];
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">What our clients say</div>
          <h2 className="section-title">5-star coaching. Elite results.</h2>
          <p className="section-sub">
            4.9 average across 1,800+ verified reviews. These are a few of the words our clients use.
          </p>
        </div>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="testi">
                <div className="stars">
                  {[0,1,2,3,4].map(j => <Icon.Star key={j} size={16} />)}
                </div>
                <div className="testi-quote">"{t.quote}"</div>
                <div className="testi-foot">
                  <div className="testi-avatar" style={{
                    background: t.tone === 'mint'
                      ? 'linear-gradient(135deg, #19E3A5, #0BB082)'
                      : 'linear-gradient(135deg, #4F8BFF, #1747C9)',
                    color: t.tone === 'mint' ? '#002416' : '#fff'
                  }}>{t.initials}</div>
                  <div className="testi-info">
                    <div className="nm">{t.name}</div>
                    <div className="role">{t.role}</div>
                    <div className="result">{t.result}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== GUARANTEE =====
function GuaranteeSection() {
  return (
    <section className="guarantee-section">
      <div className="container">
        <div className="guarantee-wrap">
          <Reveal>
            <div>
              <div className="section-eyebrow">7-Day Money Back Guarantee</div>
              <h2 className="section-title">If you don't love it in 7 days — we'll refund every rupee.</h2>
              <p className="section-sub">
                We're confident enough in the program to take on every cent of the risk. Try it for a full week — your bloodwork plan, your coach, your custom protocol. If it isn't right for you, email us. We refund. No questions, no friction, no fine print.
              </p>
              <ul className="guarantee-feats">
                <li>
                  <div className="gi"><Icon.Refund size={18} /></div>
                  <div>
                    <div className="gt">Full refund — no questions asked</div>
                    <div className="gd">One email is all it takes. Processed within 3 business days.</div>
                  </div>
                </li>
                <li>
                  <div className="gi"><Icon.Calendar size={18} /></div>
                  <div>
                    <div className="gt">7 full days to decide</div>
                    <div className="gd">From the day your custom plan is delivered, not from purchase.</div>
                  </div>
                </li>
                <li>
                  <div className="gi"><Icon.NoLock size={18} /></div>
                  <div>
                    <div className="gt">No contracts, no auto-renewal</div>
                    <div className="gd">One transparent payment. You're never locked in.</div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="shield-big">
              <div className="orbit"></div>
              <svg className="bg" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1B2A55" />
                    <stop offset="100%" stopColor="#060B22" />
                  </linearGradient>
                  <linearGradient id="shieldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#19E3A5" />
                    <stop offset="100%" stopColor="#2A6BFF" />
                  </linearGradient>
                  <radialGradient id="shieldGlow" cx="50%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="rgba(25,227,165,0.3)" />
                    <stop offset="100%" stopColor="rgba(25,227,165,0)" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="url(#shieldGlow)" />
                <path d="M200 40 L340 90 L340 200 C340 290 270 350 200 370 C130 350 60 290 60 200 L60 90 Z"
                  fill="url(#shieldGrad)" stroke="url(#shieldStroke)" strokeWidth="2.5" />
              </svg>
              <div className="inner">
                <div className="days">7</div>
                <div className="lbl">Day Guarantee</div>
                <div className="sub">100% Money Back</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== FAQ =====
function FAQSection() {
  const items = [
    {
      q: 'How is Transformica different from a fitness app or YouTube program?',
      a: 'Apps and free programs hand you the same generic plan as everyone else. Transformica starts with your complete blood-work, gives you a real human coach, and adapts the plan to your body every single week. That\'s the difference between "trying to get fit" and an actual transformation.'
    },
    {
      q: 'How does the 7-day money back guarantee work?',
      a: 'You have a full 7 days from the moment your custom plan is delivered to try the program. If it isn\'t right for you for any reason, send one email. We refund 100% within 3 business days. No questions. No retention calls. No fine print.'
    },
    {
      q: 'What if I\'m a complete beginner — or already advanced?',
      a: 'Both work. Every plan is built from scratch around your current fitness level, lifestyle, equipment access and goals. We\'ve coached complete beginners and competitive athletes through the same system.'
    },
    {
      q: 'How much time do I need each day?',
      a: 'Most clients spend 45 minutes to an hour on training, four to five days a week. Meal-prep is 90 minutes once a week. Your coach optimizes everything around the schedule you actually have — not an ideal one.'
    },
    {
      q: 'Can I do this without going to a gym?',
      a: 'Yes. We design plans for home, hotel, bodyweight-only and full-gym setups. Tell your coach what you have access to and the plan adapts.'
    },
    {
      q: 'What about food — do I need a special diet?',
      a: 'No keto, no fasting, no banned foods unless you want them. Your coach builds the diet around the cuisine and meals you already eat — just dialed in to hit your protein, calories and recovery targets.'
    },
    {
      q: 'Is the bloodwork done in person or remotely?',
      a: 'We partner with diagnostic labs across India for at-home sample collection. You don\'t need to step out — results are uploaded to your dashboard within 48 hours and reviewed by our medical team.'
    },
    {
      q: 'How do I know it will actually work for me?',
      a: '96% of our clients hit their 90-day goal. The other 4% get a full refund or extended coaching at no cost. Either way, you don\'t pay for a result you didn\'t get.'
    },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">Frequently asked</div>
          <h2 className="section-title">Everything you want to know.</h2>
          <p className="section-sub">Still on the fence? These are the questions our team hears most often.</p>
        </div>

        <div className="faq-list">
          {items.map((it, i) => (
            <div key={i} className={`faq ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="ic"><Icon.Plus size={14} /></span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== FINAL CTA =====
function FinalCTA({ onCTAClick }) {
  return (
    <section className="final-cta">
      <div className="aurora"></div>
      <div className="grid-bg"></div>
      <div className="container">
        <Reveal>
          <h2>The version of you you've been<br/><span className="grad">putting off — starts in 90 days.</span></h2>
          <p>Spots in the May 2026 cohort are filling fast. Start your 7-day risk-free trial today.</p>
          <div className="row">
            <button onClick={onCTAClick} className="btn btn-mint btn-xl">
              Claim my spot for ₹7,997 <Icon.Arrow size={16} />
            </button>
          </div>
          <div className="final-foot">
            <span className="li"><Icon.Shield size={14} /> 7-day money back guarantee</span>
            <span className="li"><Icon.Lock size={14} /> Secure checkout · 100% encrypted</span>
            <span className="li"><Icon.Verified size={14} /> Trusted by 5,240+ clients</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-col">
            <a href="#top" className="brand" style={{ marginBottom: 14 }}>
              <BrandMark size={32} />
              <span className="brand-name" style={{ fontSize: 18 }}>Transformica</span>
            </a>
            <div className="footer-tag">Science-backed, coach-led body transformation programs. Built in India for people who are serious about results.</div>
          </div>
          <div className="footer-col">
            <h6>Program</h6>
            <a href="#how">How it works</a>
            <a href="#plan">Transformica Pro</a>
            <a href="#results">Client results</a>
            <a href="#testimonials">Reviews</a>
          </div>
          <div className="footer-col">
            <h6>Company</h6>
            <a href="#">About us</a>
            <a href="#">Our coaches</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h6>Support</h6>
            <a href="#faq">FAQ</a>
            <a href="#">Guarantee</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Transformica Fitness Pvt. Ltd. · All rights reserved.</div>
          <div>Made with discipline in Bangalore · Mumbai · Delhi</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, TrustStrip, StatsSection, HowItWorks, PlanSection,
  ResultsSection, TestimonialsSection, GuaranteeSection, FAQSection, FinalCTA, Footer
});
