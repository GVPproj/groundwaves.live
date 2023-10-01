import { motion } from "framer-motion";

type Props = {
  text: string; // required
  isActive?: boolean; // optional, also has a default value
};

export default function ReactTest({ text, isActive = true }: Props) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
      {text}
      {isActive && <span> active</span>}
    </motion.p>
  );
}
