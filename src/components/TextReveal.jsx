import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';

function TextReveal({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  stagger = 0.04,
  once = true,
  amount = 0.72,
}) {
  const reduceMotion = useReducedMotion();
  const revealRef = useRef(null);
  const isInView = useInView(revealRef, { amount, once });
  const words = text.split(' ');
  let characterIndex = 0;

  return (
    <Tag
      aria-label={text}
      className={className}
    >
      <span className="sr-only">{text}</span>
      <motion.span
        ref={revealRef}
        aria-hidden="true"
        className="inline-block max-w-full"
        animate={reduceMotion || isInView ? 'visible' : 'hidden'}
        initial={reduceMotion ? false : 'hidden'}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {words.map((word, wordIndex) => (
          <span
            className="mr-[0.22em] inline-block whitespace-nowrap last:mr-0"
            key={`${word}-${wordIndex}`}
          >
            {Array.from(word).map((character, letterIndex) => {
              const currentIndex = characterIndex;
              characterIndex += 1;

              return (
                <motion.span
                  className="inline-block"
                  key={`${character}-${wordIndex}-${letterIndex}`}
                  transition={{
                    delay: reduceMotion ? 0 : delay + currentIndex * stagger,
                    duration: reduceMotion ? 0.01 : 0.72,
                    ease: 'easeInOut',
                  }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: reduceMotion ? 0 : '0.45em',
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  {character}
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export default TextReveal;
