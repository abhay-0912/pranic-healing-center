import Link from 'next/link'
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2A3A32] to-[#1A2A22] text-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-10">
          <div className="space-y-6 sm:space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-[#A8D5BA]" fill="#A8D5BA" />
              <span className="text-xl font-bold text-white">Pranic Healing Center</span>
            </div>
            <p className="text-sm leading-6 text-white/90">
              Transform your life through the ancient wisdom of Pranic Healing. 
              Experience deep healing and spiritual growth with our certified instructors.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Link groups */}
          <div className="mt-12 sm:mt-16 xl:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 xl:col-span-2">
            {/* Services */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-[#FAF9F6]">Services</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                      Basic Pranic Healing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                      Advanced Healing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                      Twin Hearts Meditation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                      Crystal Healing
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Company */}
              <div className="pt-2">
                <h3 className="text-sm font-semibold leading-6 text-[#FAF9F6]">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/benefits" className="text-sm leading-6 text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                      Benefits
                    </Link>
                  </li>
                  <li>
                    <Link href="/schedule" className="text-sm leading-6 text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                      Schedule
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-[#FAF9F6]/70 hover:text-[#A3DCEF] transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-[#FAF9F6]">Contact Info</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex items-center space-x-2 max-w-full">
                    <Phone className="h-4 w-4 text-[#A8D5BA] flex-shrink-0" />
                    <span className="text-sm text-[#FAF9F6]/70">(555) 123-4567</span>
                  </li>
                  <li className="flex items-start space-x-2 max-w-full">
                    <Mail className="h-4 w-4 text-[#A8D5BA] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#FAF9F6]/70 break-all">info@pranichealingcenter.com</span>
                  </li>
                  <li className="flex items-start space-x-2 max-w-full">
                    <MapPin className="h-4 w-4 text-[#A8D5BA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#FAF9F6]/70">
                      123 Healing Lane<br />
                      Wellness City, WC 12345
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-[#FAF9F6]/20 pt-6 sm:pt-8">
          <p className="text-xs leading-5 text-[#FAF9F6]/60 text-center px-2">
            &copy; 2024 Pranic Healing Center. All rights reserved. | Certified by Master Choa Kok Sui Institute
          </p>
        </div>
      </div>
    </footer>
  )
}