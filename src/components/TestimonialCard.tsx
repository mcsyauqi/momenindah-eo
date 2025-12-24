"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  index: number;
}

export default function TestimonialCard({
  quote,
  author,
  position,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-lg relative"
    >
      <Quote className="w-12 h-12 text-[#7C3AED]/20 absolute top-6 right-6" />
      <p className="text-gray-600 text-lg mb-6 relative z-10">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-[#1E1B4B]">{author}</h4>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
