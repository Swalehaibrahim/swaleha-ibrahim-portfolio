import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

function SuccessMessage() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[360px] flex-col items-center justify-center text-center sm:min-h-[420px]"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
        <CheckCircle2 size={28} />
      </div>
      <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
        Inquiry Sent
      </p>
      <h3 className="mt-4 font-heading text-4xl leading-none text-ink sm:text-5xl">
        Inquiry Sent
      </h3>
      <p className="mt-5 max-w-md text-base leading-8 text-mist sm:text-lg">
        Thank you. Swaleha will contact you shortly.
      </p>
    </motion.div>
  );
}

export default SuccessMessage;
