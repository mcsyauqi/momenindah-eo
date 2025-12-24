"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, ArrowRight } from "lucide-react";

interface PortfolioCardProps {
  slug: string;
  title: string;
  category: string;
  guests: string;
  location: string;
  thumbnail?: string;
  index: number;
}

export default function PortfolioCard({
  slug,
  title,
  category,
  guests,
  location,
  thumbnail,
  index,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/portfolio/${slug}`}>
        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
          {/* Image */}
          <div className="h-64 relative overflow-hidden">
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500" />
            )}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                {category}
              </span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#7C3AED]" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#1E1B4B] mb-3 font-[family-name:var(--font-heading)] group-hover:text-[#7C3AED] transition-colors">
              {title}
            </h3>
            <div className="flex items-center space-x-4 text-gray-600 text-sm">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{guests}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
