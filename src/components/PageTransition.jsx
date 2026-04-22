import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

function PageTransition({ children, className = '', transitionKey = 'page' }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className={className}
        exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.99 }}
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
        key={transitionKey}
        transition={{
          duration: reduceMotion ? 0.01 : 0.72,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
