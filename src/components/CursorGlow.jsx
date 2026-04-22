import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

function CursorGlow({ theme = 'light' }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-240);
  const pointerY = useMotionValue(-240);
  const x = useSpring(pointerX, { stiffness: 140, damping: 26, mass: 0.6 });
  const y = useSpring(pointerY, { stiffness: 140, damping: 26, mass: 0.6 });
  const isDark = theme === 'dark';

  if (reduceMotion) {
    return null;
  }

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerX.set(event.clientX - 240);
      pointerY.set(event.clientY - 240);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [pointerX, pointerY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      <motion.div
        className="absolute h-[480px] w-[480px] rounded-full blur-3xl"
        style={{
          x,
          y,
          opacity: isDark ? 0.55 : 0.12,
          mixBlendMode: isDark ? 'screen' : 'soft-light',
          background: isDark
            ? 'radial-gradient(circle, rgba(202,160,106,0.16) 0%, rgba(202,160,106,0.10) 22%, rgba(202,160,106,0.04) 38%, transparent 72%)'
            : 'radial-gradient(circle, rgba(178,140,92,0.14) 0%, rgba(178,140,92,0.06) 26%, transparent 72%)',
        }}
      />
    </div>
  );
}

export default CursorGlow;
