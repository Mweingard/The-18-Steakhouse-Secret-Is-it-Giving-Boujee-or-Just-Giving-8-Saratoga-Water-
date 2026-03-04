import { motion } from "framer-motion";

interface RatingBarProps {
  label: string;
  score: number;
  maxScore?: number;
}

const RatingBar = ({ label, score, maxScore = 10 }: RatingBarProps) => {
  const percentage = (score / maxScore) * 100;

  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-display text-lg font-medium text-foreground">{label}</span>
        <span className="font-display text-xl font-bold text-primary">
          {score} <span className="text-sm font-body text-muted-foreground">/ {maxScore}</span>
        </span>
      </div>
      <div className="w-full h-2 rounded-full bg-secondary">
        <motion.div
          className="rating-bar"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default RatingBar;
