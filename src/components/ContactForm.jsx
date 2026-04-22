import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import SuccessMessage from './SuccessMessage';
import Button from './ui/Button';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current || loading) {
      return;
    }

    try {
      setLoading(true);

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      formRef.current.reset();
      setSent(true);
    } catch (error) {
      console.error('EmailJS send failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="luxury-card overflow-hidden rounded-[2rem] p-6 text-ink sm:p-8">
      {sent ? (
        <SuccessMessage />
      ) : (
        <form
          className="space-y-5"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-3 block text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
                Name
              </span>
              <input
                autoComplete="name"
                className="input-shell w-full rounded-[1.25rem] px-4 py-4 text-sm text-ink outline-none transition placeholder:text-mist/70 focus:border-gold/55"
                name="user_name"
                placeholder="Your name"
                required
                type="text"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
                Email
              </span>
              <input
                autoComplete="email"
                className="input-shell w-full rounded-[1.25rem] px-4 py-4 text-sm text-ink outline-none transition placeholder:text-mist/70 focus:border-gold/55"
                name="user_email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-3 block text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Message
            </span>
            <textarea
              className="input-shell min-h-[180px] w-full rounded-[1.5rem] px-4 py-4 text-sm text-ink outline-none transition placeholder:text-mist/70 focus:border-gold/55"
              name="message"
              placeholder="Tell us about your space, timeline, and design aspirations."
              required
            />
          </label>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button
              className="min-w-[176px] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={loading}
              type="submit"
            >
              {loading ? 'Sending...' : 'Send Inquiry'}
            </Button>

            <p className="max-w-sm text-sm leading-6 text-mist">
              Share your requirements and we'll get back with a tailored design approach and relevant project details.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
