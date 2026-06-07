function CheckoutModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(2, 5, 18, 0.72)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'grid', placeItems: 'center',
      padding: 20,
      animation: 'fadeIn .25s ease'
    }}>
      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .ck-input:focus { border-color: rgba(79, 139, 255, 0.55) !important; background: rgba(255,255,255,0.05) !important; }`}</style>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', maxWidth: 480,
        background: 'linear-gradient(160deg, rgba(17, 30, 71, 0.95) 0%, rgba(8, 16, 42, 0.98) 100%)',
        border: '1px solid var(--border-strong)',
        borderRadius: 28,
        padding: '36px 32px',
        boxShadow: '0 60px 120px -30px rgba(0,0,0,0.7)',
        animation: 'slideUp .35s ease'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <BrandMark size={36} />
          <button onClick={onClose} aria-label="Close" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'var(--text-2)', fontSize: 22, lineHeight: 1, paddingBottom: 4 }}>×</button>
        </div>
        <div className="plan-badge" style={{ marginBottom: 14 }}>
          <Icon.Star size={11} /> Reserving your spot
        </div>
        <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', margin: '0 0 8px', lineHeight: 1.1 }}>
          One step closer to your transformation.
        </h3>
        <p style={{ color: 'var(--text-2)', fontSize: 14.5, margin: '0 0 22px', lineHeight: 1.5 }}>
          Tell us where to send your bloodwork kit and we'll match you with your dedicated coach within 24 hours.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
          <input placeholder="Full name" className="ck-input" style={inputStyle} />
          <input placeholder="Email address" type="email" className="ck-input" style={inputStyle} />
          <input placeholder="WhatsApp number" type="tel" className="ck-input" style={inputStyle} />
        </div>

        <div style={{
          background: 'rgba(25, 227, 165, 0.07)', border: '1px solid rgba(25, 227, 165, 0.22)',
          borderRadius: 14, padding: '14px 16px', marginBottom: 18,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Transformica Pro · 90 days</div>
            <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 22, marginTop: 2 }}>₹7,997</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: 'var(--text-3)', textDecoration: 'line-through' }}>₹10,000</div>
            <div style={{ color: 'var(--mint)', fontSize: 12, fontWeight: 700 }}>Save ₹2,003</div>
          </div>
        </div>

        <a href="https://rzp.io/rzp/transformica-pro" className="btn btn-mint btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
          Confirm & start 7-day trial <Icon.Arrow size={16} />
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 16, color: 'var(--text-3)', fontSize: 11.5, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Icon.Lock size={12} /> Secure checkout
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--mint)' }}>
            <Icon.Shield size={12} /> 7-day money back
          </span>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 12,
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  fontSize: 14.5,
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'border-color .2s, background .2s',
};

const RAZORPAY_URL = 'https://rzp.io/rzp/transformica-pro';

function App() {
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  // Every payment CTA goes straight to the Razorpay page to shorten checkout.
  const open = () => { window.location.href = RAZORPAY_URL; };
  const close = () => setCheckoutOpen(false);

  return (
    <React.Fragment>
      <Nav onCTAClick={open} />
      <Hero onCTAClick={open} />
      <TrustStrip />
      <StatsSection />
      <HowItWorks />
      <PlanSection onCTAClick={open} />
      <ResultsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA onCTAClick={open} />
      <Footer />

      <CheckoutModal open={checkoutOpen} onClose={close} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
