import Link from 'next/link'
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Pranic Healing Center</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Transform your life through the ancient wisdom of Pranic Healing. 
              Experience deep healing and spiritual growth with our certified instructors.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Basic Pranic Healing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Advanced Healing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Twin Hearts Meditation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Crystal Healing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/benefits" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Benefits
                    </Link>
                  </li>
                  <li>
                    <Link href="/schedule" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Schedule
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Info</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-gray-300">(555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-gray-300">info@pranichealingcenter.com</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-purple-400 mt-1" />
                    <span className="text-sm text-gray-300">
                      123 Healing Lane<br />
                      Wellness City, WC 12345
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; 2024 Pranic Healing Center. All rights reserved. | Certified by Master Choa Kok Sui Institute
          </p>
        </div>
      </div>
    </footer>
  )
}