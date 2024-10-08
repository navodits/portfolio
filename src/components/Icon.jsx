import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Icon = ({ children, duration = 0 }) => {
  return (
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-2 border-neutral-400 p-4"
    >
      {children}
    </motion.div>
  );
};

export default Icon;
