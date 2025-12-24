"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  center = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-semibold mb-4">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 ${
          light ? "text-white" : "text-[#1E1B4B]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
