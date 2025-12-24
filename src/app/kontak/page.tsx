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
} from "lucide-react";
import Button from "@/components/Button";

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

      {/* FAQ CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
              Punya Pertanyaan Lain?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim kami siap menjawab semua pertanyaan Anda tentang event.
            </p>
            <Button href="/konsultasi" variant="primary" size="lg">
              Konsultasi Gratis
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
