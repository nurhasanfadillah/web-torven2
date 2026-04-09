import { motion } from 'framer-motion'
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '#layanan', label: 'Layanan' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#portofolio', label: 'Portofolio' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <img 
                src="https://lh3.googleusercontent.com/d/1Fi3RtVLVjkO7P5nXWLQms5DTeCZmSyJn" 
                alt="TORVEN Logo" 
                className="h-10 w-auto"
              />
            <span className="font-heading font-bold text-xl text-white">TORVEN INDUSTRIES</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-glow-cyan transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.a
            href="https://wa.me/6281212441652?text=Halo%20Torven%2C%20saya%20tertarik%20pesan%20tas%20custom"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-glow-cyan to-glow-blue text-bg-primary font-semibold rounded-full btn-glow animate-pulse-glow"
          >
            <MessageCircle className="w-4 h-4" />
            Hubungi Kami
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-glow-cyan"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-glow-cyan transition-colors duration-300 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="https://wa.me/6281212441652?text=Halo%20Torven%2C%20saya%20tertarik%20pesan%20tas%20custom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gradient-to-r from-glow-cyan to-glow-blue text-bg-primary font-semibold rounded-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
