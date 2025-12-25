"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Users,
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
  Clock,
  FileText,
  ThumbsUp,
} from "lucide-react";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

const eventTypes = [
  "Corporate Event",
  "Product Launching",
  "Exhibition & Expo",
  "Gala Dinner",
  "Team Building",
  "Virtual Event",
  "Wedding",
  "Lainnya",
];

const budgetRanges = [
  "< Rp 50 Juta",
  "Rp 50 - 100 Juta",
  "Rp 100 - 250 Juta",
  "Rp 250 - 500 Juta",
  "> Rp 500 Juta",
];

const benefits = [
  "Konsultasi gratis tanpa komitmen",
  "Proposal custom sesuai kebutuhan",
  "Estimasi budget transparan",
  "Rekomendasi vendor terbaik",
];

export default function KonsultasiPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    location: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Terima kasih! Tim kami akan segera menghubungi Anda.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
              Konsultasi Gratis
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Wujudkan Event Impian Anda
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ceritakan kebutuhan event Anda dan dapatkan proposal custom dari tim profesional kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
                  Form Konsultasi
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
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
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                        placeholder="Nama Perusahaan"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                        placeholder="email@perusahaan.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        No. Telepon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                        placeholder="+62 812-3456-7890"
                      />
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Event *
                      </label>
                      <select
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                      >
                        <option value="">Pilih Jenis Event</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Event
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimasi Tamu
                      </label>
                      <input
                        type="text"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                        placeholder="Contoh: 100-200 orang"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lokasi Event
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                        placeholder="Kota atau venue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimasi Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
                    >
                      <option value="">Pilih Range Budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detail Kebutuhan Event
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all resize-none"
                      placeholder="Ceritakan konsep atau kebutuhan khusus event Anda..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Kirim Permintaan Konsultasi
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Benefits */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
                    Yang Anda Dapatkan
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#7C3AED] mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                    Butuh Respon Cepat?
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/6281234567890"
                      className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp: 0812-3456-7890</span>
                    </a>
                    <a
                      href="tel:+6281234567890"
                      className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Telepon: 0812-3456-7890</span>
                    </a>
                    <a
                      href="mailto:hello@momenindah.id"
                      className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                    >
                      <Mail className="w-5 h-5" />
                      <span>hello@momenindah.id</span>
                    </a>
                  </div>
                </div>

                {/* Event Stats */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1E1B4B] mb-6 font-[family-name:var(--font-heading)]">
                    Pengalaman Kami
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-[#7C3AED]" />
                      <span className="text-gray-600">300+ Event Sukses</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-[#7C3AED]" />
                      <span className="text-gray-600">50+ Klien Korporat</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#7C3AED]" />
                      <span className="text-gray-600">Seluruh Indonesia</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Proses"
            title="Bagaimana Konsultasi Bekerja"
            description="4 langkah mudah untuk memulai perjalanan event Anda"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: FileText,
                title: "Isi Form",
                description: "Lengkapi form konsultasi dengan detail kebutuhan event Anda",
              },
              {
                step: "2",
                icon: Phone,
                title: "Konsultasi",
                description: "Tim kami akan menghubungi Anda untuk diskusi lebih lanjut",
              },
              {
                step: "3",
                icon: Clock,
                title: "Proposal",
                description: "Terima proposal custom sesuai kebutuhan dan budget Anda",
              },
              {
                step: "4",
                icon: ThumbsUp,
                title: "Deal!",
                description: "Setujui proposal dan mulai persiapan event bersama kami",
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
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full text-center">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-semibold mb-3">
                    Step {item.step}
                  </span>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#7C3AED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
              Pengalaman Klien Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dewi Lestari",
                role: "Marketing Manager, ABC Corp",
                content: "Proses konsultasinya sangat membantu! Tim MomenIndah memahami kebutuhan kami dengan baik dan memberikan solusi yang tepat.",
                rating: 5,
              },
              {
                name: "Andi Wijaya",
                role: "CEO, Startup XYZ",
                content: "Response cepat dan proposal yang detail. Sangat recommended untuk corporate event!",
                rating: 5,
              },
              {
                name: "Sari Indah",
                role: "HR Director, Finance Corp",
                content: "Dari konsultasi sampai eksekusi event, semuanya berjalan smooth. Tim yang sangat profesional!",
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
            title="Pertanyaan Seputar Konsultasi"
            description="Jawaban untuk pertanyaan yang sering diajukan"
          />

          <div className="space-y-4">
            <FAQItem
              question="Apakah konsultasi benar-benar gratis?"
              answer="Ya, konsultasi awal benar-benar gratis tanpa komitmen. Kami akan berdiskusi tentang kebutuhan event Anda dan memberikan estimasi serta rekomendasi tanpa biaya apapun."
            />
            <FAQItem
              question="Berapa lama waktu response setelah mengisi form?"
              answer="Tim kami akan menghubungi Anda dalam waktu maksimal 1x24 jam setelah form diterima. Untuk response yang lebih cepat, Anda bisa langsung menghubungi kami via WhatsApp."
            />
            <FAQItem
              question="Apakah bisa konsultasi untuk event di luar kota?"
              answer="Tentu! Kami melayani event di seluruh Indonesia. Konsultasi bisa dilakukan via telepon, video call, atau kami bisa mengatur pertemuan langsung jika diperlukan."
            />
            <FAQItem
              question="Bagaimana jika saya belum memiliki budget yang pasti?"
              answer="Tidak masalah! Kami bisa membantu memberikan estimasi budget berdasarkan konsep dan kebutuhan event Anda. Kami juga fleksibel dalam menyesuaikan proposal dengan budget yang tersedia."
            />
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
              Masih Ragu?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lihat portfolio kami terlebih dahulu atau langsung hubungi kami untuk diskusi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/portfolio" variant="secondary" size="lg">
                Lihat Portfolio <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/kontak" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Hubungi Kami
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
