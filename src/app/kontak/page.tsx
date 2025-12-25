"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  Award,
  Users,
  Star,
  ChevronDown,
} from "lucide-react";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Sudirman No. 123, Lantai 15",
    detail: "Jakarta Pusat, 10220",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "+62 812-3456-7890",
    detail: "+62 21-1234-5678",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@momenindah.id",
    detail: "info@momenindah.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 09:00 - 18:00",
    detail: "Sabtu: 09:00 - 14:00",
  },
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "#", handle: "@momenindah.eo" },
  { icon: Facebook, name: "Facebook", url: "#", handle: "MomenIndah EO" },
  { icon: Linkedin, name: "LinkedIn", url: "#", handle: "MomenIndah Event" },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Pesan Anda telah terkirim! Kami akan segera merespons.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Hubungi Kami
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Mari Berbicara
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin berdiskusi tentang event Anda? Kami siap membantu!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-10">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1E1B4B] mb-2 font-[family-name:var(--font-heading)]">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.content}</p>
                <p className="text-gray-500 text-sm">{info.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                    placeholder="Tentang apa pesan Anda?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="mr-2 w-5 h-5" /> Kirim Pesan
                </Button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Jakarta, Indonesia</p>
                  <p className="opacity-80">Jl. Sudirman No. 123, Lantai 15</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
                  Ikuti Kami
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center group-hover:gradient-primary transition-all">
                        <social.icon className="w-6 h-6 text-[#7C3AED] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E1B4B]">{social.name}</p>
                        <p className="text-gray-500 text-sm">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-500 rounded-2xl p-6 text-white text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
                  Chat via WhatsApp
                </h3>
                <p className="opacity-90 mb-4">Respon cepat dalam jam kerja</p>
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-block bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Mulai Chat
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "< 1 Jam", label: "Rata-rata Respon", icon: Clock },
              { value: "300+", label: "Event Sukses", icon: Award },
              { value: "50+", label: "Klien Aktif", icon: Users },
              { value: "4.9/5", label: "Rating Kepuasan", icon: Star },
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
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
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
            title="Pertanyaan Umum"
            description="Jawaban untuk pertanyaan yang sering diajukan"
          />

          <div className="space-y-4">
            <FAQItem
              question="Bagaimana cara tercepat untuk menghubungi kalian?"
              answer="Cara tercepat adalah melalui WhatsApp di nomor 0812-3456-7890. Tim kami biasanya merespon dalam waktu kurang dari 1 jam di jam kerja."
            />
            <FAQItem
              question="Apakah bisa meeting langsung di kantor?"
              answer="Tentu! Kantor kami buka Senin-Jumat pukul 09:00-18:00 dan Sabtu pukul 09:00-14:00. Kami sarankan untuk membuat janji terlebih dahulu agar kami bisa menyiapkan tim yang tepat untuk berdiskusi dengan Anda."
            />
            <FAQItem
              question="Apakah melayani event di luar Jakarta?"
              answer="Ya, kami melayani event di seluruh Indonesia. Untuk event di luar Jakarta, kami memiliki jaringan vendor partner yang tersebar di berbagai kota besar."
            />
            <FAQItem
              question="Berapa lama biasanya proses dari konsultasi sampai deal?"
              answer="Tergantung kompleksitas event, biasanya prosesnya memakan waktu 3-7 hari kerja. Ini mencakup konsultasi awal, site visit (jika diperlukan), penyusunan proposal, dan negosiasi."
            />
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#7C3AED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              Cara Lain Menghubungi Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
              Pilih Cara yang Paling Nyaman untuk Anda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Konsultasi Online",
                description: "Isi form konsultasi dan tim kami akan menghubungi Anda dalam 1x24 jam",
                action: "Mulai Konsultasi",
                href: "/konsultasi",
              },
              {
                title: "WhatsApp Chat",
                description: "Chat langsung dengan tim kami untuk respon cepat",
                action: "Chat Sekarang",
                href: "https://wa.me/6281234567890",
              },
              {
                title: "Email",
                description: "Kirim detail kebutuhan event Anda via email untuk proposal lengkap",
                action: "Kirim Email",
                href: "mailto:hello@momenindah.id",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-3 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <Button href={item.href} variant="primary" className="w-full justify-center">
                  {item.action} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
              Siap Mewujudkan Event Impian Anda?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda menciptakan momen yang tak terlupakan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/konsultasi" variant="primary" size="lg">
                Konsultasi Gratis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                Lihat Portfolio Kami
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
