import { motion } from 'motion/react';

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      custom={delay}
      initial="hidden"
      variants={revealVariants}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
