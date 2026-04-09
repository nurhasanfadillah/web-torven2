import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, ShoppingBag, Users, Award, CheckCircle } from 'lucide-react'

const socialProofItems = [
  { icon: ShoppingBag, label: 'Tas Terjual', value: '10,000+' },
  { icon: Users, label: 'Klien Dilayani', value: '500+' },
  { icon: Award, label: 'Rating Toko', value: '4.9/5' },
  { icon: CheckCircle, label: 'Tahun Pengalaman', value: '5+' },
]

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Toko Elektronik",
    text: "Tas custom untuk parcel akhir tahun kami hasilnya premium banget! Pelayanan ramah dan kirim cepat. Recommended!",
    avatar: "👨‍💼"
  },
  {
    name: "Siti Rahayu",
    role: "HRD PT Maju Mundur",
    text: "Kami pesan 200 pcs tas untuk goodie bag seminar. Desain sesuai request, bahan kuat, dan harga bersahabat. Terima kasih Torven!",
    avatar: "👩‍💼"
  },
  {
    name: "Ahmad Fauzi",
    role: "Ketua Komunitas Entreprenuer Muda",
    text: "Konsultasi design-nya sangat membantu. Hasil sablon rapi dan warna tajam. Pasti repeat order!",
    avatar: "👨‍🎨"
  }
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimoni" ref={ref} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {socialProofItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <item.icon className="w-8 h-8 text-glow-cyan mx-auto mb-3" />
              <p className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
                {item.value}
              </p>
              <p className="text-sm text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-glow-cyan text-sm font-semibold mb-4">
            Testimoni
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Kepercayaan Anda adalah prioritas utama kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-3xl p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-glow-cyan to-glow-blue flex items-center justify-center">
                  <span className="text-2xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-glow-cyan text-glow-cyan" />
                ))}
              </div>
              <p className="text-slate-300 italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
