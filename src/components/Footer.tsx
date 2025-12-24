import Link from "next/link";
import { Sparkles, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E1B4B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-[#7C3AED]" />
              <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                MomenIndah
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Ciptakan Momen yang Tak Terlupakan bersama kami. Event organizer profesional untuk berbagai kebutuhan acara Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">
              Layanan
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/layanan" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Corporate Event
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Product Launching
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Exhibition & Expo
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Gala Dinner
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Team Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/vendor" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Vendor Partner
                </Link>
              </li>
              <li>
                <Link href="/konsultasi" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Konsultasi
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-[#EC4899] transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#EC4899]" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#EC4899]" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#EC4899]" />
                <span className="text-gray-300">hello@momenindah.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 MomenIndah Event Organizer
            </p>
            <p className="text-gray-400 text-sm">
              Website ini dibuat dengan <span className="text-red-500">❤️</span> oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EC4899] hover:underline"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
