import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Sparkles, Zap, Shield, Package, Truck } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Custom Logo & Teks',
    description: 'Desain sesuai request, bisa cetak logo, nama, atau tagline usaha Anda.',
    highlight: 'Sesuai Request',
  },
  {
    icon: Sparkles,
    title: 'Free Design',
    description: 'Konsultasi & desain gratis untuk setiap pemesanan. Tim kami siap membantu.',
    highlight: 'Gratis',
  },
  {
    icon: Zap,
    title: 'Produksi Cepat',
    description: 'Proses produksi efisien, selesai dalam hitungan hari. Tepat waktu terjamin.',
    highlight: 'Pengerjaan Cepat',
  },
  {
    icon: Shield,
    title: 'Bahan Premium',
    description: 'Menggunakan bahan berkualitas tinggi, awet dan nyaman digunakan.',
    highlight: 'Kualitas Terjamin',
  },
  {
    icon: Package,
    title: 'Order Fleksibel',
    description: 'Minimum 1 pcs untuk satuan, harga spesial untuk grosir.',
    highlight: '1 pcs - 10.000+',
  },
  {
    icon: Truck,
    title: 'Kirim Seluruh Indonesia',
    description: 'Pengiriman ke seluruh pelosok Indonesia dengan berbagai pilihan kurir.',
    highlight: 'Nationwide',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="layanan" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[800px] h-[600px] bg-glow-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kenapa Memilih
            <span className="gradient-text"> Torven Industries</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Solusi lengkap tas custom untuk kebutuhan branding usaha, souvenir, dan merchandise perusahaan Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-glow-cyan/20 to-glow-blue/20 flex items-center justify-center mb-5 group-hover:from-glow-cyan/30 group-hover:to-glow-blue/30 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-glow-cyan" />
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 mb-4">
                {feature.description}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-glow-cyan/10 border border-glow-cyan/20">
                <span className="w-2 h-2 rounded-full bg-glow-cyan animate-pulse" />
                <span className="text-xs text-glow-cyan font-medium">{feature.highlight}</span>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-glow-cyan/0 to-glow-violet/0 group-hover:from-glow-cyan/5 group-hover:to-glow-violet/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
