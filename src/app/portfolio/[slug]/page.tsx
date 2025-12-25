"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  Clock,
  Award,
  Share2,
  Heart,
} from "lucide-react";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import { getPortfolioBySlug, portfolioData } from "@/data/portfolio";

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1E1B4B] mb-4">
            Portfolio Tidak Ditemukan
          </h1>
          <p className="text-gray-600 mb-8">
            Maaf, portfolio yang Anda cari tidak tersedia.
          </p>
          <Button href="/portfolio" variant="primary">
            <ArrowLeft className="mr-2 w-5 h-5" /> Kembali ke Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const gradients = [
    "from-purple-500 to-pink-500",
    "from-pink-500 to-orange-500",
    "from-orange-500 to-yellow-500",
    "from-blue-500 to-purple-500",
  ];

  const currentIndex = portfolioData.findIndex((p) => p.slug === slug);
  const randomGradient = gradients[currentIndex % gradients.length];

  const otherPortfolios = portfolioData
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${randomGradient} opacity-90`}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 w-5 h-5" /> Kembali ke Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              {portfolio.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              {portfolio.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>{portfolio.guests}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{portfolio.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{portfolio.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
                  Tentang Event
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {portfolio.description}
                </p>

                {/* Gallery Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-48 rounded-xl bg-gradient-to-br ${
                        gradients[(currentIndex + i) % gradients.length]
                      } opacity-80`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg sticky top-24"
              >
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
                  Event Highlights
                </h3>
                <ul className="space-y-4">
                  {portfolio.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#7C3AED] mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <hr className="my-8 border-gray-200" />

                <h3 className="text-xl font-bold text-[#1E1B4B] mb-4 font-[family-name:var(--font-heading)]">
                  Tertarik dengan Event Serupa?
                </h3>
                <p className="text-gray-600 mb-6">
                  Konsultasikan kebutuhan event Anda dengan tim kami.
                </p>
                <Button href="/konsultasi" variant="primary" className="w-full">
                  Konsultasi Sekarang
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Stats Section */}
      <section className="py-16 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: portfolio.guests.replace(/[^0-9+]/g, ''), label: "Tamu Hadir", icon: Users },
              { value: "3", label: "Hari Event", icon: Calendar },
              { value: "100%", label: "Client Satisfaction", icon: Heart },
              { value: "50+", label: "Crew Terlibat", icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1 font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote className="w-16 h-16 text-white/20 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              &quot;Tim MomenIndah sangat profesional dalam menangani event kami. Dari perencanaan hingga eksekusi,
              semuanya berjalan dengan sangat baik. Kami sangat puas dengan hasilnya dan pasti akan bekerja sama lagi
              di event-event selanjutnya.&quot;
            </p>
            <div className="flex gap-1 justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
            <p className="text-white font-bold text-lg">Client Representative</p>
            <p className="text-white/70">{portfolio.title}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Used Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Layanan"
            title="Layanan yang Digunakan"
            description="Berbagai layanan yang kami sediakan untuk event ini"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Event Planning",
              "Venue Setup",
              "Catering",
              "Entertainment",
              "Dokumentasi",
              "Dekorasi",
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#FAF5FF] rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-[#7C3AED] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#1E1B4B]">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-2 font-[family-name:var(--font-heading)]">
                Tertarik dengan event seperti ini?
              </h3>
              <p className="text-gray-600">Konsultasikan ide event Anda dengan tim kami secara gratis.</p>
            </div>
            <div className="flex gap-4">
              <Button href="/konsultasi" variant="primary">
                Konsultasi Sekarang <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E1B4B] font-[family-name:var(--font-heading)]">
              Portfolio Lainnya
            </h2>
            <Button href="/portfolio" variant="secondary">
              Lihat Semua <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPortfolios.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/portfolio/${item.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#1E1B4B] mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#7C3AED] transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-gray-600 text-sm">
                        <span>{item.guests}</span>
                        <span>•</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
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
              Wujudkan Event Impian Anda
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Jadikan event Anda bagian dari portfolio sukses kami selanjutnya.
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
