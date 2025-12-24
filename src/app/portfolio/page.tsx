"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioData } from "@/data/portfolio";

const categories = [
  "Semua",
  "Corporate Event",
  "Product Launching",
  "Exhibition & Expo",
  "Gala Dinner",
  "Team Building",
  "Virtual Event",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredPortfolio =
    activeCategory === "Semua"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 gradient-primary overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#EC4899]/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Event yang Telah Kami Wujudkan
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Lihat berbagai event sukses yang telah kami selenggarakan untuk klien-klien terbaik kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "gradient-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <PortfolioCard
                key={item.slug}
                slug={item.slug}
                title={item.title}
                category={item.category}
                guests={item.guests}
                location={item.location}
                thumbnail={item.thumbnail}
                index={index}
              />
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Belum ada portfolio untuk kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "300+", label: "Event Sukses" },
              { value: "50+", label: "Klien Korporat" },
              { value: "8", label: "Tahun Pengalaman" },
              { value: "100+", label: "Vendor Partner" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text mb-2 font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
