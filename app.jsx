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
const WHATSAPP_NUMBER = '919899901124';

function WhatsAppGlyph({ size = 28, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill={color} d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15h-.004a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/>
    </svg>
  );
}

function WhatsAppWidget() {
  const [open, setOpen] = React.useState(false);
  const prefill = encodeURIComponent("Hi Transformica! I'd like to know more about the 90-day program.");
  const chatUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${prefill}`;
  return (
    <div style={{ position: 'fixed', right: 22, bottom: 22, zIndex: 90, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
      <style>{`@keyframes waPop { from { opacity: 0; transform: translateY(14px) scale(.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes waPulse { 0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); } 70% { box-shadow: 0 0 0 16px rgba(37,211,102,0); } 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); } }`}</style>
      {open && (
        <div style={{
          width: 300, borderRadius: 20, overflow: 'hidden',
          background: 'linear-gradient(160deg, rgba(17,30,71,0.98) 0%, rgba(8,16,42,0.99) 100%)',
          border: '1px solid var(--border-strong)',
          boxShadow: '0 40px 90px -30px rgba(0,0,0,0.75)',
          animation: 'waPop .25s ease'
        }}>
          <div style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
              <WhatsAppGlyph size={24} />
            </div>
            <div>
              <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 15, color: '#fff' }}>Transformica Coach</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#aef5c9', display: 'inline-block' }}></span>
                Typically replies in minutes
              </div>
            </div>
          </div>
          <div style={{ padding: 18 }}>
            <div style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)',
              borderRadius: '4px 16px 16px 16px', padding: '12px 14px',
              fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.5
            }}>
              👋 Hi! Got a question about the 90-day program, pricing, or your plan? Chat with a coach now.
            </div>
            <a href={chatUrl} target="_blank" rel="noopener" style={{
              marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', color: '#fff',
              fontFamily: 'Manrope', fontWeight: 700, fontSize: 14.5, padding: 13, borderRadius: 12
            }}>
              <WhatsAppGlyph size={18} /> Start chat on WhatsApp
            </a>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(o => !o)} aria-label={open ? 'Close WhatsApp chat' : 'Chat on WhatsApp'} style={{
        width: 62, height: 62, borderRadius: '50%',
        background: open ? 'rgba(20,32,70,0.95)' : 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        border: open ? '1px solid var(--border-strong)' : 'none',
        boxShadow: '0 14px 34px -8px rgba(37,211,102,0.6)',
        display: 'grid', placeItems: 'center',
        animation: open ? 'none' : 'waPulse 2.4s infinite'
      }}>
        {open
          ? <span style={{ color: 'var(--text)', fontSize: 26, lineHeight: 1, paddingBottom: 3 }}>×</span>
          : <WhatsAppGlyph size={32} />}
      </button>
    </div>
  );
}

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
      <WhatsAppWidget />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
