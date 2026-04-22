import { motion } from 'motion/react';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Container from './ui/Container';

function Navbar({ links, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contactButtonClassName =
    theme === 'dark'
      ? 'hidden items-center justify-center rounded-full border border-gold/45 bg-gold px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#18120d] shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition hover:bg-[#f7efe6] hover:text-[#1d1812] sm:inline-flex'
      : 'hidden items-center justify-center rounded-full border border-[#d2b28d]/35 bg-[#f7efe6] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#1d1812] shadow-[0_12px_28px_rgba(17,12,8,0.1)] transition hover:border-gold hover:bg-gold hover:text-ink sm:inline-flex';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <Container>
        <div
          className={`rounded-full transition duration-300 ${
            isScrolled ? 'glass-panel' : 'border border-white/20 bg-white/10 backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <a
              className="flex items-center gap-3"
              href="#home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold-soft text-sm font-semibold tracking-[0.2em] text-gold">
                SI
              </span>
              <div>
                <p className="font-heading text-2xl leading-none text-ink">Swaleha Ibrahim</p>
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-mist">
                  Interior Designer
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  className="text-sm text-mist transition hover:text-gold"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                aria-label="Toggle theme"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/30 text-ink transition hover:border-gold hover:text-gold"
                onClick={onToggleTheme}
                type="button"
              >
                {theme === 'light' ? <MoonStar size={18} /> : <SunMedium size={18} />}
              </button>

              <a
                className={contactButtonClassName}
                href="#contact"
              >
                Get in Touch
              </a>

              <button
                aria-expanded={isOpen}
                aria-label="Open navigation menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/30 text-ink transition hover:border-gold hover:text-gold lg:hidden"
                onClick={() => setIsOpen((current) => !current)}
                type="button"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          className="overflow-hidden lg:hidden"
          initial={false}
          variants={{
            open: { height: 'auto', opacity: 1, marginTop: 12 },
            closed: { height: 0, opacity: 0, marginTop: 0 },
          }}
        >
          <div className="glass-panel rounded-[2rem] p-5">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  className="border-b border-line pb-4 text-sm uppercase tracking-[0.2em] text-mist last:border-b-0 last:pb-0"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </Container>
    </header>
  );
}

export default Navbar;
