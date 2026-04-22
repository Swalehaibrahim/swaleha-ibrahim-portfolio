import TextReveal from '../TextReveal';
import Reveal from './Reveal';

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignmentClassName = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <Reveal className={`max-w-3xl ${alignmentClassName}`}>
      <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-gold">
        {eyebrow}
      </p>
      <TextReveal
        as="h2"
        className="text-balance font-heading text-4xl leading-none text-ink sm:text-5xl lg:text-[4rem]"
        text={title}
      />
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-mist sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
