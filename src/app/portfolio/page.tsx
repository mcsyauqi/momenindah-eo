"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Award, Users, Calendar, MapPin, Star, Quote } from "lucide-react";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioData } from "@/data/portfolio";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

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
              { value: "300+", label: "Event Sukses", icon: Award },
              { value: "50+", label: "Klien Korporat", icon: Users },
              { value: "8", label: "Tahun Pengalaman", icon: Calendar },
              { value: "100+", label: "Vendor Partner", icon: MapPin },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2 font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event Highlight */}
      <section className="py-20 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Highlight"
            title="Event Terbaik Kami"
            description="Salah satu event spektakuler yang berhasil kami wujudkan"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/portfolio/corporate-event.svg"
                  alt="Featured Event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1E1B4B]">500+</p>
                    <p className="text-gray-600">Tamu Hadir</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-semibold mb-4">
                Corporate Event
              </span>
              <h3 className="text-3xl font-bold text-[#1E1B4B] mb-4 font-[family-name:var(--font-heading)]">
                XYZ Bank Annual Gathering 2024
              </h3>
              <p className="text-gray-600 mb-6">
                Annual gathering spektakuler untuk seluruh karyawan XYZ Bank dengan tema &quot;Together We Grow&quot;.
                Acara berlangsung selama 3 hari di resort mewah di Bali dengan berbagai aktivitas team building,
                gala dinner, dan awarding ceremony.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#7C3AED]" />
                  <span className="text-gray-700">Desember 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#7C3AED]" />
                  <span className="text-gray-700">Bali, Indonesia</span>
                </div>
              </div>
              <Button href="/portfolio/xyz-bank-annual-gathering-2024" variant="primary">
                Lihat Detail <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#7C3AED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
              Kata Mereka Tentang Event Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rina Susanti",
                role: "HR Director, XYZ Bank",
                event: "Annual Gathering 2024",
                content: "Annual gathering kami berlangsung luar biasa! Tim MomenIndah sangat profesional dan detail.",
                rating: 5,
              },
              {
                name: "Budi Hartono",
                role: "CEO, ABC Tech",
                event: "Product Launch",
                content: "Product launching kami sukses besar berkat kreativitas dan eksekusi sempurna dari tim.",
                rating: 5,
              },
              {
                name: "Maya Putri",
                role: "Event Manager",
                event: "Fashion Week Exhibition",
                content: "Koordinasi dengan 50+ brand berjalan mulus. Tim yang sangat terorganisir!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 relative"
              >
                <Quote className="w-10 h-10 text-[#7C3AED]/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&quot;{testimonial.content}&quot;</p>
                <p className="text-sm text-[#7C3AED] font-medium mb-4">{testimonial.event}</p>
                <div>
                  <p className="font-bold text-[#1E1B4B]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Kategori Event"
            title="Berbagai Jenis Event yang Kami Tangani"
            description="Dari corporate event hingga virtual conference, kami siap membantu"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Corporate Event", count: "50+" },
              { name: "Product Launching", count: "40+" },
              { name: "Exhibition & Expo", count: "30+" },
              { name: "Gala Dinner", count: "45+" },
              { name: "Team Building", count: "60+" },
              { name: "Virtual Event", count: "75+" },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#FAF5FF] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => setActiveCategory(category.name)}
              >
                <p className="text-2xl font-bold gradient-text mb-2">{category.count}</p>
                <p className="text-sm text-gray-600 group-hover:text-[#7C3AED] transition-colors">
                  {category.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E1B4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Siap Mewujudkan Event Impian Anda?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Jadikan event Anda menjadi bagian dari portfolio sukses kami. Konsultasikan ide Anda sekarang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/konsultasi" variant="secondary" size="lg">
                Mulai Konsultasi <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/layanan" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Lihat Layanan Kami
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
