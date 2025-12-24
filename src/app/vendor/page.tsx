"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Music,
  UtensilsCrossed,
  Palette,
  Lightbulb,
  Truck,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

const vendorCategories = [
  {
    icon: Camera,
    title: "Foto & Video",
    count: "15+ Vendor",
    description: "Dokumentasi profesional untuk momen berharga event Anda",
    vendors: ["Studio Pro", "Capture Moment", "Visual Works"],
  },
  {
    icon: Music,
    title: "Entertainment",
    count: "20+ Vendor",
    description: "Band, DJ, MC, dan berbagai hiburan berkualitas",
    vendors: ["Top Band ID", "DJ Network", "MC Pro"],
  },
  {
    icon: UtensilsCrossed,
    title: "Catering",
    count: "12+ Vendor",
    description: "Layanan makanan dan minuman untuk berbagai skala event",
    vendors: ["Gourmet Catering", "Fine Dining Co", "Event Foods"],
  },
  {
    icon: Palette,
    title: "Decoration",
    count: "18+ Vendor",
    description: "Dekorasi dan styling yang mengubah venue menjadi luar biasa",
    vendors: ["Decor Dreams", "Event Styling", "Creative Decor"],
  },
  {
    icon: Lightbulb,
    title: "Lighting & Sound",
    count: "10+ Vendor",
    description: "Sistem audio visual dan lighting profesional",
    vendors: ["Light Pro", "Sound System ID", "AV Solutions"],
  },
  {
    icon: Truck,
    title: "Logistics",
    count: "8+ Vendor",
    description: "Transportasi dan logistik untuk kelancaran event",
    vendors: ["Event Logistics", "Transport Pro", "Moving Co"],
  },
  {
    icon: Sparkles,
    title: "Special Effects",
    count: "6+ Vendor",
    description: "Pyrotechnic, confetti, dan efek spesial lainnya",
    vendors: ["FX Pro", "Pyro Magic", "Effect Studio"],
  },
  {
    icon: Users,
    title: "Talent & Crew",
    count: "25+ Vendor",
    description: "SPG, usher, crew, dan tenaga profesional event",
    vendors: ["Talent Agency", "Crew Pro", "Event Staff"],
  },
];

const benefits = [
  {
    title: "Vendor Terverifikasi",
    description: "Semua vendor telah melalui proses seleksi dan verifikasi ketat",
  },
  {
    title: "Harga Kompetitif",
    description: "Dapatkan harga special melalui kerjasama eksklusif kami",
  },
  {
    title: "Koordinasi Terpadu",
    description: "Tim kami yang akan mengkoordinasikan semua vendor untuk Anda",
  },
  {
    title: "Backup Plan",
    description: "Selalu ada vendor cadangan untuk memastikan event berjalan lancar",
  },
];

export default function VendorPage() {
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
              Vendor Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              100+ Vendor Partner Terpercaya
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Jaringan vendor profesional yang siap mewujudkan event impian Anda dengan kualitas terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vendor Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Kategori Vendor"
            title="Vendor untuk Setiap Kebutuhan"
            description="Kami memiliki jaringan vendor di berbagai kategori untuk memenuhi semua kebutuhan event Anda"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vendorCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#1E1B4B] font-[family-name:var(--font-heading)]">
                    {category.title}
                  </h3>
                  <span className="text-sm text-[#7C3AED] font-semibold bg-[#7C3AED]/10 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.vendors.map((vendor) => (
                    <span
                      key={vendor}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {vendor}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Keuntungan"
            title="Mengapa Menggunakan Vendor Kami"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-2 font-[family-name:var(--font-heading)]">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Vendor CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-3xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
                Ingin Menjadi Vendor Partner?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan jaringan vendor kami dan dapatkan akses ke berbagai project event besar.
              </p>
              <Button href="/kontak" variant="secondary" size="lg">
                Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="py-20 bg-[#1E1B4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Butuh Rekomendasi Vendor?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu memilihkan vendor yang tepat sesuai kebutuhan dan budget event Anda.
            </p>
            <Button href="/konsultasi" variant="secondary" size="lg">
              Konsultasi Gratis <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
