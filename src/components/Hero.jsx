import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useEffect, useEffectEvent, useState } from 'react';
import ParallaxImage from './ParallaxImage';
import TextReveal from './TextReveal';
import Container from './ui/Container';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

function Hero({ images, profile, theme }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isDark = theme === 'dark';

  const advanceSlide = useEffectEvent(() => {
    setCurrentSlide((current) => (current + 1) % images.length);
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      advanceSlide();
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [advanceSlide, images.length]);

  return (
    <section
      className="section-shell relative isolate min-h-screen overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.div
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.05,
            }}
            className="absolute inset-0"
            initial={false}
            key={image}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ParallaxImage
              alt="Luxury interior design background"
              containerClassName="h-full w-full"
              imageClassName="h-[calc(100%+3rem)] w-full object-cover"
              maxOffset={50}
              src={image}
            />
          </motion.div>
        ))}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-[linear-gradient(100deg,rgba(8,6,5,0.76)_0%,rgba(8,6,5,0.48)_42%,rgba(8,6,5,0.72)_100%)]'
              : 'bg-[linear-gradient(100deg,rgba(8,6,5,0.58)_0%,rgba(8,6,5,0.28)_42%,rgba(8,6,5,0.46)_100%)]'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-[radial-gradient(circle_at_top_right,rgba(178,140,92,0.22),transparent_28%)]'
              : 'bg-[radial-gradient(circle_at_top_right,rgba(178,140,92,0.16),transparent_30%)]'
          }`}
        />
      </div>

      <Container className="relative flex min-h-screen items-end pt-32 pb-10 sm:pb-14 lg:items-center lg:pb-0">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.4em] text-[#eadcc7]">
              Residential & Commercial Interiors
            </p>
            <TextReveal
              as="h1"
              className="text-balance font-heading text-5xl leading-none text-white sm:text-6xl lg:text-[6rem]"
              text={profile.tagline}
            />
            <p className="mt-4 text-[0.84rem] uppercase tracking-[0.28em] text-[#eadcc7]">
              By {profile.name}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/76 sm:text-lg">
              {profile.subtext}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#services">
                View Services
                <ArrowRight size={16} />
              </Button>
              <Button
                href="#contact"
                variant="secondary"
              >
                Get in Touch
              </Button>
            </div>
          </Reveal>

          <Reveal
            className={`glass-panel w-full max-w-[360px] rounded-[2rem] p-6 lg:justify-self-end ${
              isDark ? 'text-white' : 'text-ink'
            }`}
            delay={0.12}
          >
            <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold">
              Based in India
            </p>
            <p className="mt-4 font-heading text-4xl leading-none">
              From concept to execution.
            </p>
            <div className="gold-line my-6" />
            <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3 lg:grid-cols-1">
              {profile.highlights.map((item) => (
                <div
                  className={`rounded-[1.5rem] border px-4 py-4 ${
                    isDark ? 'border-white/14 bg-white/8' : 'border-line bg-black/[0.04]'
                  }`}
                  key={item.label}
                >
                  <div className="flex flex-col items-center gap-2 sm:justify-center lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:text-left">
                    <p
                      className={`font-heading text-[2rem] leading-none sm:text-3xl lg:text-[2.2rem] ${
                        isDark ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {item.value}
                    </p>
                    <p
                      className={`max-w-[13rem] text-[0.64rem] uppercase leading-5 tracking-[0.14em] ${
                        isDark ? 'text-white/68' : 'text-mist'
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
