"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/Button";
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
                    <div
                      className={`h-48 bg-gradient-to-br ${
                        gradients[index % gradients.length]
                      } relative overflow-hidden`}
                    >
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
    </>
  );
}
