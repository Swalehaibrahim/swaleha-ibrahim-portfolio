import { useEffect, useState } from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CursorGlow from './components/CursorGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import RequestPortfolio from './components/RequestPortfolio';
import ServicesSection from './components/ServicesSection';
import {
  contactDetails,
  heroImages,
  navLinks,
  profile,
  services,
} from './data/siteContent';

const THEME_STORAGE_KEY = 'swaleha-ibrahim-theme';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) ?? 'light';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="relative isolate bg-sand text-ink">
      <CursorGlow theme={theme} />

      <PageTransition
        className="relative z-10"
        transitionKey="swaleha-landing"
      >
        <Navbar
          links={navLinks}
          theme={theme}
          onToggleTheme={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
        />

        <main>
          <Hero
            images={heroImages}
            profile={profile}
            theme={theme}
          />
          <AboutSection profile={profile} />
          <RequestPortfolio whatsappHref={contactDetails.whatsapp} />
          <ServicesSection services={services} />
          <ContactSection contactDetails={contactDetails} />
        </main>

        <Footer links={navLinks} />
        <FloatingWhatsApp
          href={contactDetails.whatsapp}
          theme={theme}
        />
      </PageTransition>
    </div>
  );
}

export default App;
