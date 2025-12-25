"use client";

import { useState } from "react";
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
  Award,
  Star,
  Quote,
  Shield,
  TrendingUp,
  Handshake,
  ChevronDown,
  CheckCircle,
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Vendor Partner", icon: Handshake },
              { value: "8", label: "Kategori Layanan", icon: Award },
              { value: "300+", label: "Event Berhasil", icon: TrendingUp },
              { value: "98%", label: "Tingkat Kepuasan", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Categories */}
      <section className="py-20 bg-[#FAF5FF]">
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

      {/* How We Work Section */}
      <section className="py-20 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Proses Kerja"
            title="Bagaimana Kami Bekerja dengan Vendor"
            description="Proses koordinasi yang terstruktur untuk hasil terbaik"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Seleksi",
                description: "Vendor melalui proses seleksi ketat berdasarkan portfolio dan track record",
              },
              {
                step: "2",
                title: "Briefing",
                description: "Vendor menerima brief detail tentang kebutuhan dan ekspektasi klien",
              },
              {
                step: "3",
                title: "Koordinasi",
                description: "Tim kami mengkoordinasikan seluruh vendor untuk eksekusi yang seamless",
              },
              {
                step: "4",
                title: "Quality Control",
                description: "Monitoring dan evaluasi kualitas untuk memastikan standar terpenuhi",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E1B4B] mb-2 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#7C3AED]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#7C3AED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              Testimoni Vendor
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
              Kata Vendor Partner Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Studio Pro Photography",
                role: "Vendor Foto & Video",
                content: "Bekerja sama dengan MomenIndah selalu menyenangkan. Koordinasi yang baik dan klien-klien berkualitas.",
                rating: 5,
              },
              {
                name: "Gourmet Catering",
                role: "Vendor Catering",
                content: "Pembayaran tepat waktu dan briefing yang jelas. Sudah handle 50+ event bersama MomenIndah.",
                rating: 5,
              },
              {
                name: "Light Pro Solutions",
                role: "Vendor Lighting & Sound",
                content: "Tim yang profesional dan selalu support kebutuhan technical kami di lapangan.",
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
                <p className="text-gray-600 mb-6">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-bold text-[#1E1B4B]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="FAQ"
            title="Pertanyaan Tentang Vendor"
            description="Jawaban untuk pertanyaan yang sering diajukan tentang vendor partner kami"
          />

          <div className="space-y-4">
            <FAQItem
              question="Bagaimana cara menjadi vendor partner MomenIndah?"
              answer="Anda bisa mendaftar melalui halaman kontak kami dengan melampirkan portfolio dan company profile. Tim kami akan melakukan review dan menghubungi Anda untuk proses selanjutnya."
            />
            <FAQItem
              question="Apakah ada biaya untuk menjadi vendor partner?"
              answer="Tidak ada biaya pendaftaran untuk menjadi vendor partner. Kami menggunakan sistem bagi hasil atau fee yang disepakati bersama untuk setiap project."
            />
            <FAQItem
              question="Bagaimana sistem pembayaran untuk vendor?"
              answer="Pembayaran dilakukan sesuai agreement yang disepakati, biasanya 50% setelah kontrak dan 50% setelah event selesai. Pembayaran selalu tepat waktu."
            />
            <FAQItem
              question="Apakah vendor bisa menolak project tertentu?"
              answer="Tentu, vendor memiliki kebebasan untuk menerima atau menolak project berdasarkan ketersediaan dan kesesuaian dengan spesialisasi mereka."
            />
          </div>
        </div>
      </section>

      {/* Become Vendor CTA */}
      <section className="py-20 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
                  Ingin Menjadi Vendor Partner?
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  Bergabunglah dengan jaringan vendor kami dan dapatkan akses ke berbagai project event besar.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Akses ke project event besar",
                    "Pembayaran tepat waktu",
                    "Support dan koordinasi profesional",
                    "Kesempatan networking",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/90">
                      <CheckCircle className="w-5 h-5 text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/kontak" variant="secondary" size="lg">
                  Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hidden lg:block"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Syarat Menjadi Vendor</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 mt-0.5" />
                      <span>Memiliki legalitas usaha yang valid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 mt-0.5" />
                      <span>Portfolio minimal 10 event</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 mt-0.5" />
                      <span>Tim yang profesional dan berpengalaman</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-0.5" />
                      <span>Komitmen terhadap kualitas layanan</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/konsultasi" variant="secondary" size="lg">
                Konsultasi Gratis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/layanan" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Lihat Layanan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#1E1B4B] text-left">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#7C3AED] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </motion.div>
  );
}
