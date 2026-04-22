import { Hammer, MessageSquare, Palette, Ruler } from 'lucide-react';
import Container from './ui/Container';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const iconMap = {
  Hammer,
  MessageSquare,
  Palette,
  Ruler,
};

function ServicesSection({ services }) {
  return (
    <section
      className="section-shell scroll-mt-28 py-24 sm:py-28"
      id="services"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Services"
          title="Design support that feels curated, strategic, and deeply personal."
          description="From full-scale interiors to focused consultations, every service is shaped around premium detailing, calm decision-making, and refined spatial clarity."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <Reveal
                className="luxury-card rounded-[2rem] p-7"
                delay={index * 0.06}
                key={service.title}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-gold-soft text-gold">
                  <Icon size={22} />
                </div>
                <p className="mt-7 text-[0.72rem] uppercase tracking-[0.32em] text-gold">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-heading text-4xl leading-none text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-mist">{service.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
