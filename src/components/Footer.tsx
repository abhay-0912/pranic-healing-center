import Link from 'next/link'
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1f2620] text-[#f5f2ed]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-[#c982d8]" />
              <div>
                <span className="text-xl font-bold block">Pranic Healing Center</span>
                <span className="text-sm text-[#7fa9c9]">Lucknow, Uttar Pradesh</span>
              </div>
            </div>
            <p className="text-sm leading-6 text-[#b8d4e8]">
              Part of MCKS Yoga Vidya Pranic Healing Trust of UP Lucknow. Spreading Master Choa Kok Sui&apos;s teachings of energy healing and spiritual development across Lucknow.
            </p>
            <p className="text-xs text-[#7fa9c9]">
              Affiliated with World Pranic Healing Foundation
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#b8d4e8] hover:text-[#c982d8] transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#b8d4e8] hover:text-[#c982d8] transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#b8d4e8] hover:text-[#c982d8] transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Programs</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link href="/services" className="text-sm leading-6 text-[#b8d4e8] hover:text-white transition-colors">
                    Basic Pranic Healing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm leading-6 text-[#b8d4e8] hover:text-white transition-colors">
                    Intermediate Healing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm leading-6 text-[#b8d4e8] hover:text-white transition-colors">
                    Twin Hearts Meditation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm leading-6 text-[#b8d4e8] hover:text-white transition-colors">
                    Arhatic Yoga
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link href="/about" className="text-sm leading-6 text-[#b8d4e8] hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/benefits" className="text-sm leading-6 text-[#b8d4e8] hover:text-white transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm leading-6 text-[#b8d4e8] hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm leading-6 text-[#b8d4e8] hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Contact Info</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#c982d8]" />
                  <span className="text-sm text-[#b8d4e8]">(+91) 94XXXXXX45</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#c982d8]" />
                  <span className="text-sm text-[#b8d4e8]">lucknow@pranichealingcenter.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-[#c982d8] mt-1" />
                  <span className="text-sm text-[#b8d4e8]">
                    Lucknow<br />
                    Uttar Pradesh, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-[#3d5c4c]/40 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-[#7fa9c9] text-center">
            &copy; 2024 Pranic Healing Center Lucknow. All rights reserved. | Part of World Pranic Healing Foundation | Certified Instructors trained by Master Choa Kok Sui Institute
          </p>
        </div>
      </div>
    </footer>
  )
}