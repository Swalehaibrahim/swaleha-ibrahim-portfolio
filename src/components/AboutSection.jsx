import ParallaxImage from './ParallaxImage';
import Container from './ui/Container';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

function AboutSection({ profile }) {
  return (
    <section
      className="section-shell scroll-mt-28 py-24 sm:py-28"
      id="about"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-[540px]">
            <div className="luxury-card relative overflow-hidden rounded-[2.2rem] p-3 sm:p-4">
              <ParallaxImage
                alt={`${profile.name} portrait`}
                containerClassName="rounded-[1.8rem] bg-[#120f0d] aspect-[4/3.9]"
                imageClassName="h-[calc(100%+2rem)] w-full object-cover object-[center_78%] brightness-[1.05] contrast-[1.04] saturate-[0.84]"
                maxOffset={32}
                src={profile.portrait}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,11,8,0.04)_0%,rgba(15,11,8,0.12)_62%,rgba(15,11,8,0.38)_100%)]" />

                <div className="absolute left-4 top-4 rounded-full border border-white/16 bg-black/20 px-4 py-2 backdrop-blur-md sm:left-6 sm:top-6">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/78">
                    Interior Designer
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/46 to-transparent" />
              </ParallaxImage>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-[minmax(0,1fr)_220px]">
              <div className="glass-panel rounded-[1.5rem] p-5 sm:p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.32em] text-gold">Swaleha Ibrahim</p>
                <p className="mt-3 font-heading text-3xl leading-tight text-ink sm:text-[2.2rem]">
                  Thoughtful spaces with warmth, identity, and purpose.
                </p>
              </div>

              <div className="glass-panel rounded-[1.5rem] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.32em] text-gold">Design Note</p>
                <p className="mt-3 font-heading text-2xl leading-tight text-ink">
                  Elegance lives in restraint, rhythm, and light.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About Swaleha"
              title="A quietly luxurious approach to contemporary interiors."
              description={profile.bio[0]}
            />

            <Reveal
              className="mt-8 space-y-6 text-base leading-7 text-mist sm:text-lg"
              delay={0.08}
            >
              <p>{profile.bio[1]}</p>
              <div className="luxury-card rounded-[2rem] p-7">
                <p className="text-[0.72rem] uppercase tracking-[0.32em] text-gold">
                  Design Philosophy
                </p>
                <p className="mt-4 font-heading text-3xl leading-tight text-ink sm:text-4xl">
                  {profile.philosophy}
                </p>
              </div>
            </Reveal>

            <Reveal
              className="mt-8 grid gap-4 sm:grid-cols-3"
              delay={0.14}
            >
              {profile.highlights.map((item) => (
                <div
                  className="glass-panel rounded-[1.75rem] p-5"
                  key={item.label}
                >
                  <p className="font-heading text-4xl leading-none text-ink">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-mist">{item.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
