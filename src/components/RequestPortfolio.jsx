import { ArrowUpRight } from 'lucide-react';
import TextReveal from './TextReveal';
import Button from './ui/Button';
import Container from './ui/Container';
import Reveal from './ui/Reveal';

function RequestPortfolio({ whatsappHref }) {
  return (
    <section
      className="section-shell scroll-mt-28 py-24 sm:py-28"
      id="selected-work"
    >
      <Container>
        <Reveal className="mx-auto max-w-5xl">
          <div className="luxury-card overflow-hidden rounded-[2.4rem] px-6 py-14 text-center text-ink sm:px-10 sm:py-16 lg:px-16">
            <div className="mx-auto mb-6 h-px w-28 bg-gradient-to-r from-transparent via-[#caa06a] to-transparent" />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-[#d7b07a]">
              Selected Work
            </p>
            <TextReveal
              as="h2"
              className="mt-5 font-heading text-4xl leading-none text-ink sm:text-5xl lg:text-[4rem]"
              text="Every space tells a story."
            />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-mist sm:text-lg">
              A curated selection of projects is available upon request. Due to client
              privacy and bespoke design work, full portfolio access is shared selectively.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                className="min-w-[230px]"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Request Portfolio
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default RequestPortfolio;
