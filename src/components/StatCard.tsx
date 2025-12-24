"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export default function StatCard({ value, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-[family-name:var(--font-heading)]">
        {value}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}
