import { MessageCircle } from 'lucide-react';

function FloatingWhatsApp({ href, theme }) {
  const buttonClassName =
    theme === 'dark'
      ? 'fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-gold/45 bg-gold px-5 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#18120d] shadow-[0_20px_44px_rgba(0,0,0,0.26)] transition hover:scale-[1.02] hover:bg-[#f7efe6] hover:text-[#1d1812]'
      : 'fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-[#d2b28d]/40 bg-[#f7efe6] px-5 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#1d1812] shadow-[0_20px_44px_rgba(17,12,8,0.16)] transition hover:scale-[1.02] hover:border-gold hover:bg-gold hover:text-ink';

  return (
    <a
      className={buttonClassName}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

export default FloatingWhatsApp;
