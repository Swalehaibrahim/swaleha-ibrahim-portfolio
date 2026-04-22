import { ArrowUpRight, Mail, MapPin, PhoneCall } from 'lucide-react';
import ContactForm from './ContactForm';
import Container from './ui/Container';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

function ContactSection({ contactDetails }) {
  return (
    <section
      className="section-shell scroll-mt-28 py-24 sm:py-28"
      id="contact"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's create a space that feels effortless, elevated, and unmistakably yours."
              description="Share a little about your project and Swaleha will reach out to begin a tailored design conversation."
            />

            <Reveal
              className="mt-8 luxury-card rounded-[2rem] p-7"
              delay={0.08}
            >
              <div className="space-y-5 text-sm leading-7 text-mist">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-gold" size={18} />
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">Email</p>
                    <a
                      className="mt-1 inline-block text-base text-ink transition hover:text-gold"
                      href={`mailto:${contactDetails.email}`}
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneCall className="mt-1 text-gold" size={18} />
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">Phone</p>
                    <a
                      className="mt-1 inline-block text-base text-ink transition hover:text-gold"
                      href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-gold" size={18} />
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">Location</p>
                    <p className="mt-1 text-base text-ink">{contactDetails.location}</p>
                  </div>
                </div>
              </div>

              <div className="gold-line my-7" />

              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink transition hover:border-gold hover:text-gold"
                  href={contactDetails.instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  Instagram
                  <ArrowUpRight size={16} />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink transition hover:border-gold hover:text-gold"
                  href={contactDetails.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                  <ArrowUpRight size={16} />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink transition hover:border-gold hover:text-gold"
                  href={contactDetails.whatsapp}
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
