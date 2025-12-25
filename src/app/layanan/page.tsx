"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Rocket,
  Store,
  UtensilsCrossed,
  Users,
  Monitor,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Shield,
  Headphones,
  TrendingUp,
  ChevronDown,
  Quote,
} from "lucide-react";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    icon: Building2,
    title: "Corporate Event",
    description: "Meeting, seminar, annual gathering, dan berbagai acara korporat lainnya dengan pengelolaan profesional.",
    features: [
      "Perencanaan dan koordinasi event",
      "Venue scouting dan setup",
      "Audio visual dan lighting",
      "Catering dan hospitality",
      "MC dan entertainment",
      "Dokumentasi foto dan video",
    ],
    image: "/images/services/corporate.svg",
  },
  {
    icon: Rocket,
    title: "Product Launching",
    description: "Grand launching dengan impact maksimal untuk memperkenalkan produk baru Anda ke pasar.",
    features: [
      "Konsep kreatif dan tema",
      "Stage design spectacular",
      "Special effects dan multimedia",
      "Media invitation dan coverage",
      "Live streaming",
      "Merchandise dan giveaway",
    ],
    image: "/images/services/launching.svg",
  },
  {
    icon: Store,
    title: "Exhibition & Expo",
    description: "Booth design dan event management untuk pameran dan expo yang menarik pengunjung.",
    features: [
      "Booth design dan fabrication",
      "Event layout planning",
      "Visitor registration system",
      "Exhibitor coordination",
      "Traffic management",
      "Post-event report",
    ],
    image: "/images/services/exhibition.svg",
  },
  {
    icon: UtensilsCrossed,
    title: "Gala Dinner",
    description: "Acara malam eksklusif dengan konsep elegan dan pengalaman dining yang tak terlupakan.",
    features: [
      "Venue selection premium",
      "Table setting dan decoration",
      "Fine dining experience",
      "Entertainment berkelas",
      "Award ceremony",
      "Dress code management",
    ],
    image: "/images/services/gala.svg",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Outbound, games, dan bonding activity untuk mempererat hubungan tim Anda.",
    features: [
      "Custom activity design",
      "Facilitator profesional",
      "Equipment dan logistics",
      "Safety management",
      "Team assessment",
      "Fun games dan challenge",
    ],
    image: "/images/services/teambuilding.svg",
  },
  {
    icon: Monitor,
    title: "Virtual Event",
    description: "Webinar, virtual conference, dan hybrid event dengan teknologi terkini.",
    features: [
      "Platform selection",
      "Studio setup",
      "Live streaming HD",
      "Interactive features",
      "Technical support",
      "Recording dan replay",
    ],
    image: "/images/services/virtual.svg",
  },
];

export default function LayananPage() {
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
              Layanan Kami
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Solusi Event yang Lengkap
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan event profesional untuk memenuhi kebutuhan acara Anda dari A sampai Z.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="h-80 lg:h-96 rounded-2xl relative overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#1E1B4B] font-[family-name:var(--font-heading)]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[#7C3AED]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button href="/konsultasi" variant="primary">
                    Konsultasi Layanan Ini <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Proses Kerja"
            title="Bagaimana Kami Bekerja"
            description="Proses terstruktur untuk memastikan event Anda sukses"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultasi", desc: "Diskusi kebutuhan dan tujuan event Anda" },
              { step: "02", title: "Perencanaan", desc: "Menyusun konsep, timeline, dan budget" },
              { step: "03", title: "Eksekusi", desc: "Implementasi dengan tim profesional" },
              { step: "04", title: "Evaluasi", desc: "Review dan laporan pasca event" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-2 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "300+", label: "Event Sukses", icon: Award },
              { value: "98%", label: "Kepuasan Klien", icon: Star },
              { value: "24/7", label: "Support Tersedia", icon: Headphones },
              { value: "50+", label: "Vendor Partner", icon: TrendingUp },
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Mengapa Kami?"
            title="Keunggulan Layanan Kami"
            description="Alasan mengapa klien mempercayakan event mereka kepada kami"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Tim Profesional",
                description: "Tim berpengalaman dengan sertifikasi industri event dan track record yang terbukti.",
              },
              {
                icon: Clock,
                title: "Tepat Waktu",
                description: "Komitmen tinggi terhadap timeline dan deadline untuk memastikan event berjalan lancar.",
              },
              {
                icon: Shield,
                title: "Jaminan Kualitas",
                description: "Standar kualitas tinggi dengan backup plan untuk setiap kemungkinan.",
              },
              {
                icon: Headphones,
                title: "Support 24/7",
                description: "Tim support selalu siap membantu sebelum, selama, dan setelah event berlangsung.",
              },
              {
                icon: TrendingUp,
                title: "Harga Kompetitif",
                description: "Paket harga yang transparan dan kompetitif dengan value maksimal.",
              },
              {
                icon: Star,
                title: "Vendor Terpercaya",
                description: "Jaringan vendor partner yang sudah terverifikasi kualitasnya.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF5FF] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-2 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#7C3AED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              Testimoni Klien
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
              Apa Kata Mereka?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rina Susanti",
                role: "HR Director, XYZ Bank",
                content: "Annual gathering kami berlangsung luar biasa! Tim MomenIndah sangat profesional dan detail dalam setiap aspek acara.",
                rating: 5,
              },
              {
                name: "Budi Hartono",
                role: "CEO, ABC Tech",
                content: "Product launching kami sukses besar berkat kreativitas dan eksekusi sempurna dari MomenIndah. Highly recommended!",
                rating: 5,
              },
              {
                name: "Maya Putri",
                role: "Event Manager, Fashion Week",
                content: "Koordinasi dengan 50+ brand berjalan mulus. Tim yang sangat terorganisir dan solutif saat menghadapi tantangan.",
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
                <p className="text-gray-600 mb-6 relative z-10">&quot;{testimonial.content}&quot;</p>
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
            title="Pertanyaan Seputar Layanan"
            description="Jawaban untuk pertanyaan yang sering diajukan tentang layanan kami"
          />

          <div className="space-y-4">
            <FAQItem
              question="Berapa lama waktu yang dibutuhkan untuk merencanakan sebuah event?"
              answer="Waktu perencanaan tergantung pada skala event. Untuk event kecil (50-100 orang) minimal 2-4 minggu, event menengah (100-500 orang) 1-2 bulan, dan event besar (500+ orang) minimal 2-3 bulan. Semakin awal Anda menghubungi kami, semakin baik persiapan yang bisa kami lakukan."
            />
            <FAQItem
              question="Apakah kalian menyediakan layanan all-in-one?"
              answer="Ya, kami menyediakan layanan lengkap dari A-Z termasuk venue, catering, dekorasi, entertainment, dokumentasi, dan semua kebutuhan event lainnya. Anda cukup menyampaikan konsep dan anggaran, kami yang akan mengurus semuanya."
            />
            <FAQItem
              question="Bagaimana sistem pembayaran untuk layanan?"
              answer="Kami menggunakan sistem pembayaran bertahap: 30% DP saat deal, 40% saat persiapan, dan 30% setelah event selesai. Kami juga menerima pembayaran via transfer bank, kartu kredit, atau invoice untuk klien korporat."
            />
            <FAQItem
              question="Apakah ada garansi jika terjadi kendala saat event?"
              answer="Tentu! Kami selalu memiliki backup plan untuk setiap kemungkinan. Tim kami juga standby selama event berlangsung untuk menangani masalah yang mungkin timbul. Kepuasan klien adalah prioritas utama kami."
            />
            <FAQItem
              question="Apakah bisa request layanan custom yang tidak ada di list?"
              answer="Absolutely! Kami sangat terbuka untuk custom request. Tim kreatif kami siap membantu mewujudkan konsep unik yang Anda inginkan. Silakan konsultasikan ide Anda dengan kami."
            />
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Paket Layanan"
            title="Pilihan Paket Sesuai Kebutuhan"
            description="Kami menawarkan berbagai paket yang dapat disesuaikan dengan budget dan kebutuhan Anda"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "Mulai 15 Juta",
                description: "Cocok untuk event kecil dan intimate gathering",
                features: [
                  "Konsultasi & planning",
                  "Koordinasi vendor dasar",
                  "Timeline management",
                  "On-site coordinator (1 orang)",
                  "Dokumentasi foto basic",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "Mulai 35 Juta",
                description: "Ideal untuk corporate event dan launching",
                features: [
                  "Semua fitur Essential",
                  "Creative concept development",
                  "Full vendor management",
                  "On-site team (3-5 orang)",
                  "Foto & video profesional",
                  "MC profesional",
                ],
                popular: true,
              },
              {
                name: "Premium",
                price: "Custom",
                description: "Untuk event besar dan experience luxury",
                features: [
                  "Semua fitur Professional",
                  "Dedicated project manager",
                  "Custom stage & production",
                  "Live streaming setup",
                  "Full entertainment package",
                  "Post-event report lengkap",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white"
                    : "bg-white"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F59E0B] text-white text-sm font-semibold rounded-full">
                    Paling Populer
                  </span>
                )}
                <h3 className={`text-2xl font-bold mb-2 font-[family-name:var(--font-heading)] ${pkg.popular ? "text-white" : "text-[#1E1B4B]"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-3xl font-bold mb-4 ${pkg.popular ? "text-white" : "gradient-text"}`}>
                  {pkg.price}
                </p>
                <p className={`mb-6 ${pkg.popular ? "text-white/80" : "text-gray-600"}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 ${pkg.popular ? "text-white" : "text-[#7C3AED]"}`} />
                      <span className={pkg.popular ? "text-white/90" : "text-gray-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/konsultasi"
                  variant={pkg.popular ? "secondary" : "primary"}
                  className="w-full justify-center"
                >
                  Pilih Paket
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            * Harga dapat disesuaikan berdasarkan scope dan kebutuhan event Anda
          </p>
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
              Butuh Layanan Khusus?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Kami juga menerima custom request untuk kebutuhan event yang unik. Hubungi kami untuk diskusi lebih lanjut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/konsultasi" variant="secondary" size="lg">
                Konsultasi Gratis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Lihat Portfolio
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
