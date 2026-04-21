import React, { useState } from 'react';
import '../styles/Contact.css';

const INFO = [
  { icon: '🌐', label: 'Website', value: 'www.marquebrands.com' },
  { icon: '📱', label: 'Contact',  value: 'Surya — +91 7835917191' },
];

function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [sent, setSent]   = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">

        {/* Left */}
        <div>
          <div className="section-chip section-chip--ghost">Let's Talk</div>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: 20 }}>
            Let's Transform <span>Together</span>
          </h2>
          <p className="contact__tagline">
            At Marque Brands, we don't just work for our clients — we partner.
            Let's embark on a journey of growth, innovation, and success.
          </p>
          <div className="contact__info-list">
            {INFO.map(({ icon, label, value }) => (
              <div key={label} className="contact__info-item">
                <div className="contact__info-icon">{icon}</div>
                <div>
                  <div className="contact__info-label">{label}</div>
                  <div className="contact__info-value">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact__form-box">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-emoji">🎉</div>
              <h3 className="contact__success-title">Message Sent!</h3>
              <p className="contact__success-sub">We'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <h3 className="contact__form-title">Send Us a Message</h3>
              <input
                className="contact__input"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="contact__input"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                className="contact__textarea"
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
              <button className="contact__submit" onClick={handleSubmit}>
                Send Message →
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;
