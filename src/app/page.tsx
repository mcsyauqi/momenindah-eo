"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Rocket,
  Store,
  UtensilsCrossed,
  Users,
  Monitor,
  Lightbulb,
  Award,
  Network,
  Wallet,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/Button";
import Confetti from "@/components/Confetti";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCard from "@/components/StatCard";
import { portfolioData } from "@/data/portfolio";

const services = [
  {
    icon: Building2,
    title: "Corporate Event",
    description: "Meeting, seminar, annual gathering, dan berbagai acara korporat lainnya dengan pengelolaan profesional.",
  },
  {
    icon: Rocket,
    title: "Product Launching",
    description: "Grand launching dengan impact maksimal untuk memperkenalkan produk baru Anda ke pasar.",
  },
  {
    icon: Store,
    title: "Exhibition & Expo",
    description: "Booth design dan event management untuk pameran dan expo yang menarik pengunjung.",
  },
  {
    icon: UtensilsCrossed,
    title: "Gala Dinner",
    description: "Acara malam eksklusif dengan konsep elegan dan pengalaman dining yang tak terlupakan.",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Outbound, games, dan bonding activity untuk mempererat hubungan tim Anda.",
  },
  {
    icon: Monitor,
    title: "Virtual Event",
    description: "Webinar, virtual conference, dan hybrid event dengan teknologi terkini.",
  },
];

const keunggulan = [
  {
    icon: Lightbulb,
    title: "Creative Concept",
    description: "Konsep unik dan memorable yang disesuaikan dengan brand dan tujuan acara Anda.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "Tim berpengalaman yang telah menangani berbagai jenis event besar.",
  },
  {
    icon: Network,
    title: "Vendor Network",
    description: "100+ vendor partner terpercaya untuk memenuhi segala kebutuhan event.",
  },
  {
    icon: Wallet,
    title: "Budget Friendly",
    description: "Solusi kreatif yang sesuai dengan budget tanpa mengurangi kualitas.",
  },
];

const stats = [
  { value: "300+", label: "Event Sukses" },
  { value: "50+", label: "Klien Korporat" },
  { value: "8", label: "Tahun Pengalaman" },
];

const testimonials = [
  {
    quote: "MomenIndah selalu deliver beyond expectation. Partner event kami sejak 2020 dan tidak pernah mengecewakan.",
    author: "Rina Susanti",
    position: "HR Director, Bank XYZ",
  },
  {
    quote: "Launching product kami sukses besar berkat kreativitas tim MomenIndah. Highly recommended!",
    author: "Budi Prakoso",
    position: "Marketing Manager, ABC Tech",
  },
];

const clients = [
  "Bank XYZ",
  "ABC Tech",
  "Fashion Brand",
  "Startup Inc",
  "Media Corp",
  "Health Plus",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <Confetti />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#EC4899]/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
                Event Organizer Profesional
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)] leading-tight"
            >
              Dari Ide Menjadi{" "}
              <span className="text-[#F59E0B]">Pengalaman Luar Biasa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Event organizer profesional untuk corporate event, launching product,
              gathering, exhibition, dan acara spesial lainnya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/konsultasi" variant="secondary" size="lg">
                Konsultasi Event
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                Lihat Portfolio <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Layanan Kami"
            title="Solusi Event yang Lengkap"
            description="Kami menyediakan berbagai layanan event untuk memenuhi kebutuhan acara Anda"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/layanan" variant="primary" size="lg">
              Lihat Semua Layanan <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Portfolio"
            title="Event yang Telah Kami Wujudkan"
            description="Lihat beberapa event sukses yang telah kami selenggarakan"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.slice(0, 4).map((item, index) => (
              <PortfolioCard
                key={item.slug}
                slug={item.slug}
                title={item.title}
                category={item.category}
                guests={item.guests}
                location={item.location}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/portfolio" variant="primary" size="lg">
              Lihat Semua Portfolio <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Klien Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Klien Kami"
            title="Dipercaya oleh Brand Terkemuka"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-600 font-semibold">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Mengapa Kami"
            title="Keunggulan MomenIndah"
            description="Apa yang membuat kami berbeda dari event organizer lainnya"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keunggulan.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Testimoni"
            title="Apa Kata Klien Kami"
            description="Pengalaman klien yang telah bekerja sama dengan MomenIndah"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                index={index}
              />
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Siap Wujudkan Event Impian Anda?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan event Anda dengan tim kami. Gratis!
            </p>
            <Button href="/konsultasi" variant="secondary" size="lg">
              Konsultasi Sekarang <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
