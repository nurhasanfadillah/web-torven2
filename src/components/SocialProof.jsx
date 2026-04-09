import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, ShoppingBag, Users, Award, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

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
    role: "Ketua Komunitas",
    text: "Konsultasi design-nya sangat membantu. Hasil sablon rapi dan warna tajam. Pasti repeat order!",
    avatar: "👨‍🎨"
  },
  {
    name: "Dewi Lestari",
    role: "Owner Boutik",
    text: "Tas goodie bag untuk pernikahan hasilnya memuaskan! Bahannya tebal dan sablonan rapi.",
    avatar: "👩‍🦱"
  },
  {
    name: "Hendra Wijaya",
    role: "Direksi PT Berkah",
    text: "Sudah 3 kali repeat order untuk tas seminar. Kualitas konsisten dan selalu tepat waktu!",
    avatar: "👨‍💻"
  },
  {
    name: "Rina Amelia",
    role: "Event Organizer",
    text: "Pesan 150 pcs tas untuk workshop. Hasilnya exceed expectation! Worth it banget!",
    avatar: "👩‍🏫"
  }
]

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  }

  const testimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-glow-cyan to-glow-blue flex items-center justify-center">
                <span className="text-3xl">{testimonial.avatar}</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg">{testimonial.name}</p>
                <p className="text-slate-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-glow-cyan text-glow-cyan" />
              ))}
            </div>
            <p className="text-slate-300 text-lg leading-relaxed italic">
              "{testimonial.text}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-glow-cyan transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-glow-cyan transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-glow-cyan w-6' 
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

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

        <TestimonialCarousel />
      </div>
    </section>
  )
}
