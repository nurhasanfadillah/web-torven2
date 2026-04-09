import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, ShoppingBag, Users, Award, CheckCircle } from 'lucide-react'

const socialProofItems = [
  { icon: ShoppingBag, label: 'Tas Terjual', value: '72,429' },
  { icon: Users, label: 'Klien di Layani', value: '1000+' },
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
  },
  {
    name: "Dewi Lestari",
    role: "Owner Boutik Hijab",
    text: "Tas goodie bag untuk pernikahan anak saya hasilnya memuaskan! Bahannya tebal dan sablonan rapi. Semua tamu praise!",
    avatar: "👩‍🦱"
  },
  {
    name: "Hendra Wijaya",
    role: "Direksi PT Berkah Bersama",
    text: "Sudah 3 kali repeat order untuk tas seminar perusahaan. Kualitas konsisten dan selalu tepat waktu. Sangat profesional!",
    avatar: "👨‍💻"
  },
  {
    name: "Rina Amelia",
    role: "Penyelenggara Workshop",
    text: "Pesan 150 pcs tas untuk workshop motivasi. Hasilnya exceed expectation! Logo jelas, warna vibrant. Worth it banget!",
    avatar: "👩‍🏫"
  },
  {
    name: "Pak Budi",
    role: "Pemilik Warung Kopi Nusantara",
    text: "Buat tas branded untuk gift ke partner bisnis. Desain eksklusif, bahan premium. Tamu senang banget dapat gift ini!",
    avatar: "👨‍🍳"
  },
  {
    name: "Anisa Zahra",
    role: "Event Organizer",
    text: "Sudah bekerja sama dengan Torven untuk 10+ event. Selalu on time, kualitas oke, harga bersahabat. Recommended untuk event!",
    avatar: "👩‍🎓"
  },
  {
    name: "Joko Pramono",
    role: "Marketing Manager",
    text: "Tas custom untuk campaign marketing kami hasilnya keren! Brand awareness naik 40%. Torven partner yang bisa diandalkan!",
    avatar: "👨‍💪"
  },
  {
    name: "Maya Sari",
    role: "Startup Founder",
    text: "Merchandise startup kami dari Torven bikin brand awareness naik! Desain modern, kualitas premium. Sukses terus Torven!",
    avatar: "👩‍🚀"
  },
  {
    name: "Tono Suhartono",
    role: "Pemilik Toko Fashion",
    text: "Tas custom untuk branding toko kami hasilnya super keren! Bahan berkualitas, jahitan rapi. Pelanggan suka banget!",
    avatar: "👨‍🎭"
  },
  {
    name: "Lisa Permata",
    role: "Manajer HRD Corporate",
    text: "Pesen tas untuk employee gathering, hasilnya luar biasa! Logo clear, warna sesuai. Receptionist kagum!",
    avatar: "👩‍💼"
  },
  {
    name: "Rudi Hermawan",
    role: "Pengusaha Catering",
    text: "Tas goodie bag untuk event catering kami bikin image perusahaan naik! Klien happy dapat gift premium dari Torven.",
    avatar: "👨‍🍽️"
  },
  {
    name: "Nadia Putri",
    role: "Influencer & Content Creator",
    text: "Merchandise untuk subscriber dari Torven berkualitas! Desain aesthetic, packaging rapi. Subscriber suka banget!",
    avatar: "👩‍🎬"
  },
  {
    name: "Asep Kusuma",
    role: "Owner Coffee Shop",
    text: "Tas tote bag untuk brand coffee shop kami minimalis tapi elegan! Bahan kuat, sablon tahan lama. Mantap!",
    avatar: "👨‍☕"
  },
  {
    name: "Wati Ningsih",
    role: "Guru & организатор",
    text: "Buat tas untuk hadiah guru di sekolah. Desain bagus, harga student-friendly. Rekan guru suka!",
    avatar: "👩‍🏫"
  },
  {
    name: "Dedi Kurniawan",
    role: "Pemilik Distro Clothing",
    text: "Kolaborasi dengan Torven untuk tas distro kami. Quality control ketat, hasil selalu memuaskan. Partner terpercaya!",
    avatar: "👨‍👔"
  },
  {
    name: "Yuni Astuti",
    role: "Perencana Event",
    text: "Sudah 20+ event ditangani bareng Torven. Always deliver on time, kualitas juara. Worth every penny!",
    avatar: "👩‍🎪"
  }
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 glass-card rounded-2xl p-6 mx-3">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-glow-cyan to-glow-blue flex items-center justify-center">
          <span className="text-xl">{testimonial.avatar}</span>
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
      <p className="text-slate-300 italic text-sm">
        "{testimonial.text}"
      </p>
    </div>
  )
}

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimoni" ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-bg-primary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg-primary to-transparent z-10" />
          
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -50 + '%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
