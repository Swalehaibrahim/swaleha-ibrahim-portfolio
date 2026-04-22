import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

function ParallaxImage({
  src,
  alt,
  children,
  containerClassName = '',
  imageClassName = '',
  maxOffset = 50,
}) {
  const targetRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -maxOffset],
  );

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      ref={targetRef}
    >
      <motion.img
        alt={alt}
        className={`block h-full w-full will-change-transform ${imageClassName}`}
        src={src}
        style={{ y }}
      />
      {children}
    </div>
  );
}

export default ParallaxImage;
