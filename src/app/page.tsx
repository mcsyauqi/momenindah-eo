"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  CheckCircle,
  Phone,
  Calendar,
  ClipboardList,
  PartyPopper,
  Camera,
  Music,
  Palette,
  ChevronDown,
} from "lucide-react";
import Button from "@/components/Button";
import Confetti from "@/components/Confetti";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCard from "@/components/StatCard";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";

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
  { value: "100+", label: "Vendor Partner" },
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
  {
    quote: "Tim yang sangat profesional dan responsif. Event gathering kami berjalan lancar tanpa hambatan.",
    author: "Diana Putri",
    position: "CEO, Startup Inc",
  },
  {
    quote: "Pameran kami ramai pengunjung berkat konsep booth yang kreatif dari MomenIndah.",
    author: "Ahmad Rizki",
    position: "Brand Manager, Fashion Brand",
  },
];

const clients = [
  { name: "Bank XYZ", logo: "/images/clients/bank-xyz.svg" },
  { name: "ABC Tech", logo: "/images/clients/abc-tech.svg" },
  { name: "Fashion Brand", logo: "/images/clients/fashion-brand.svg" },
  { name: "Startup Inc", logo: "/images/clients/startup-inc.svg" },
  { name: "Media Corp", logo: "/images/clients/media-corp.svg" },
  { name: "Health Plus", logo: "/images/clients/health-plus.svg" },
];

const processSteps = [
  {
    icon: Phone,
    title: "Konsultasi Awal",
    description: "Diskusi kebutuhan, tujuan, dan visi event Anda bersama tim kami.",
  },
  {
    icon: ClipboardList,
    title: "Proposal & Planning",
    description: "Kami menyusun proposal lengkap dengan konsep, timeline, dan budget.",
  },
  {
    icon: Calendar,
    title: "Persiapan & Koordinasi",
    description: "Koordinasi vendor, venue, dan semua kebutuhan teknis event.",
  },
  {
    icon: PartyPopper,
    title: "Eksekusi Event",
    description: "Tim profesional kami memastikan event berjalan sempurna.",
  },
];

const vendorCategories = [
  { icon: Camera, name: "Foto & Video", count: "15+" },
  { icon: Music, name: "Entertainment", count: "20+" },
  { icon: UtensilsCrossed, name: "Catering", count: "12+" },
  { icon: Palette, name: "Decoration", count: "18+" },
];

const faqs = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk persiapan event?",
    answer: "Waktu persiapan tergantung skala event. Untuk event kecil (50-100 orang), minimal 2-4 minggu. Event menengah (100-500 orang) membutuhkan 1-2 bulan. Sedangkan event besar (500+ orang) idealnya dipersiapkan 2-3 bulan sebelumnya.",
  },
  {
    question: "Apakah MomenIndah bisa menangani event di luar Jakarta?",
    answer: "Ya, kami melayani event di seluruh Indonesia. Tim kami sudah berpengalaman menangani event di berbagai kota seperti Bali, Surabaya, Bandung, Yogyakarta, dan kota-kota lainnya.",
  },
  {
    question: "Bagaimana sistem pembayaran di MomenIndah?",
    answer: "Kami menerapkan sistem pembayaran bertahap: 30% DP saat deal, 40% H-14 sebelum event, dan 30% pelunasan setelah event selesai. Metode pembayaran bisa transfer bank atau invoice untuk corporate.",
  },
  {
    question: "Apakah ada minimum budget untuk menggunakan jasa MomenIndah?",
    answer: "Kami melayani berbagai range budget mulai dari Rp 25 juta untuk event intimate hingga miliaran untuk event besar. Konsultasikan budget Anda dan kami akan memberikan solusi terbaik.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.svg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Confetti />

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
                #1 Event Organizer di Jakarta
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
              gathering, exhibition, dan acara spesial lainnya. Dipercaya 50+ perusahaan di Indonesia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button href="/konsultasi" variant="secondary" size="lg">
                Konsultasi Gratis
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                Lihat Portfolio <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-6 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                <span>Konsultasi Gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                <span>Tim Berpengalaman</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                <span>Harga Transparan</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-semibold mb-4">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
                MomenIndah Event Organizer
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Sejak 2017, MomenIndah telah menjadi partner terpercaya untuk berbagai event korporat dan personal. Kami percaya setiap event adalah kesempatan untuk menciptakan momen yang tak terlupakan.
              </p>
              <p className="text-gray-600 mb-8">
                Dengan tim yang berpengalaman dan jaringan vendor yang luas, kami siap mewujudkan event impian Anda dari konsep hingga eksekusi. Apapun skalanya, kami berkomitmen memberikan yang terbaik.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Konsep Kreatif",
                  "Eksekusi Profesional",
                  "Vendor Terpercaya",
                  "Budget Fleksibel",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#7C3AED]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden">
                    <Image
                      src="/images/portfolio/corporate-event.svg"
                      alt="Corporate Event"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 overflow-hidden">
                    <Image
                      src="/images/portfolio/gala-dinner.svg"
                      alt="Gala Dinner"
                      width={300}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 overflow-hidden">
                    <Image
                      src="/images/portfolio/product-launch.svg"
                      alt="Product Launch"
                      width={300}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                    <Image
                      src="/images/portfolio/team-building.svg"
                      alt="Team Building"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
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
              Lihat Detail Layanan <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Cara Kerja"
            title="Proses yang Mudah & Transparan"
            description="4 langkah sederhana untuk mewujudkan event impian Anda"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E1B4B] mb-3 font-[family-name:var(--font-heading)]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] opacity-30" style={{ width: 'calc(100% - 5rem)' }} />
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/konsultasi" variant="primary" size="lg">
              Mulai Konsultasi <ArrowRight className="ml-2 w-5 h-5" />
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
                thumbnail={item.thumbnail}
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

      {/* Vendor Partner Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Vendor Partner"
                title="100+ Vendor Terpercaya"
                description="Jaringan vendor profesional untuk memenuhi segala kebutuhan event Anda"
                center={false}
              />
              <div className="grid grid-cols-2 gap-4 mb-8">
                {vendorCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-[#7C3AED]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1E1B4B]">{category.name}</p>
                      <p className="text-sm text-gray-500">{category.count} Vendor</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button href="/vendor" variant="primary">
                Lihat Semua Vendor <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                  Mengapa Vendor Kami?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Terverifikasi dan berpengalaman",
                    "Harga kompetitif khusus partner",
                    "Koordinasi terpadu oleh tim kami",
                    "Backup plan untuk setiap kebutuhan",
                    "Quality control ketat",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Klien Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Klien Kami"
            title="Dipercaya oleh Brand Terkemuka"
            description="Kami bangga telah bekerja sama dengan berbagai perusahaan ternama di Indonesia"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow h-24"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={60}
                  className="object-contain"
                />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Temukan jawaban untuk pertanyaan umum seputar layanan kami"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[#1E1B4B]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7C3AED] transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Masih punya pertanyaan lain?</p>
            <Button href="/kontak" variant="primary">
              Hubungi Kami <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
              Konsultasikan kebutuhan event Anda dengan tim kami. Gratis dan tanpa komitmen!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/konsultasi" variant="secondary" size="lg">
                Konsultasi Gratis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/kontak" variant="outline" size="lg">
                Hubungi Kami
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
