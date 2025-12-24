"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Rocket,
  Store,
  UtensilsCrossed,
  Users,
  Monitor,
  CheckCircle,
  ArrowRight,
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
    image: "from-purple-500 to-pink-500",
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
    image: "from-pink-500 to-orange-500",
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
    image: "from-orange-500 to-yellow-500",
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
    image: "from-blue-500 to-purple-500",
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
    image: "from-green-500 to-teal-500",
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
    image: "from-indigo-500 to-blue-500",
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
                  <div
                    className={`h-80 lg:h-96 rounded-2xl bg-gradient-to-br ${service.image} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <service.icon className="w-24 h-24 text-white/80" />
                    </div>
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
            <Button href="/konsultasi" variant="secondary" size="lg">
              Hubungi Kami <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
