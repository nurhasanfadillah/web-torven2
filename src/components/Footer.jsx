import { ShoppingBag, Mail, Phone, MapPin, Instagram, ShoppingCart, Video } from 'lucide-react'

const footerLinks = {
  layanan: [
    { label: 'Custom Tas', href: '#layanan' },
    { label: 'Souvenir', href: '#layanan' },
    { label: 'Merchandise', href: '#layanan' },
  ],
  tentang: [
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Testimoni', href: '#testimoni' },
  ],
  kontak: [
    { label: 'WhatsApp', href: 'https://wa.me/6281212441652' },
    { label: 'Email', href: 'mailto:torven.industries@gmail.com' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/torven_industries?igsh=MWc4N2ZzYzhzOXV4dg%3D%3D&utm_source=qr', label: 'Instagram' },
  { icon: ShoppingCart, href: 'https://id.shp.ee/qm4bzVH4', label: 'Shopee' },
  { icon: Video, href: 'https://tiktok.com/@torvenofficial', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer id="kontak" className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://lh3.googleusercontent.com/d/1Fi3RtVLVjkO7P5nXWLQms5DTeCZmSyJn" 
                alt="TORVEN Logo" 
                className="h-10 w-auto"
              />
              <span className="font-heading font-bold text-xl text-white">TORVEN INDUSTRIES</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-xs">
              Solusi tas custom untuk branding usaha, souvenir, dan merchandise perusahaan.
            </p>
            <p className="text-glow-cyan font-semibold text-sm">
              Custom Bag for Your Brand Identity
            </p>

            <div className="space-y-3 mt-6">
              <a href="mailto:torven.industries@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-glow-cyan transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">torven.industries@gmail.com</span>
              </a>
              <a href="https://wa.me/6281212441652" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-glow-cyan transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">0812 1244 1652 (WhatsApp)</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">Jl. Raya Cileungsi-Jonggol Km. 10, Cipeucang, Cileungsi, Bogor 16820</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-glow-cyan transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Tentang</h4>
            <ul className="space-y-3">
              {footerLinks.tentang.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-glow-cyan transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3">
              {footerLinks.kontak.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-sm text-slate-400 hover:text-glow-cyan transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Sosial Media</h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-glow-cyan transition-colors">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2024 TORVEN INDUSTRIES. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Berbasis di Bogor, Indonesia • Melayani Seluruh Indonesia
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-glow-cyan hover:border-glow-cyan/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
