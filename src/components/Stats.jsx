import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ShoppingBag, Smile, Gift, Star } from 'lucide-react'

const stats = [
  {
    icon: ShoppingBag,
    value: 72429,
    suffix: '',
    label: 'Tas Terjual',
    color: 'from-glow-cyan to-glow-blue',
  },
  {
    icon: Smile,
    value: 1000,
    suffix: '+',
    label: 'Klien di Layani',
    color: 'from-glow-blue to-glow-violet',
  },
  {
    icon: Gift,
    value: 50,
    suffix: '+',
    label: 'Project Selesai',
    color: 'from-glow-violet to-pink-500',
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '',
    label: 'Rating Rata-rata',
    color: 'from-glow-cyan to-glow-violet',
    decimal: true,
  },
]

function AnimatedNumber({ value, suffix, decimal, inView }) {
  const [displayValue, setDisplayValue] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      })
      
      const duration = 2000
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const current = value * easeOut
        
        setDisplayValue(decimal ? Math.round(current * 10) / 10 : Math.floor(current))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [inView, value, decimal, controls])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {decimal ? displayValue.toFixed(1) : displayValue.toLocaleString()}{suffix}
    </motion.span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portofolio" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-glow-cyan/5 to-transparent" />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-cyan/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-cyan/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Telah Melayani Berbagai
            <span className="gradient-text"> Kebutuhan Branding</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Angka-angka ini adalah bukti kepercayaan Anda terhadap layanan kami.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 rounded-3xl blur-xl`} />
              
              {/* Card */}
              <div className="relative glass-card rounded-3xl p-6 md:p-8 text-center">
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedNumber 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    decimal={stat.decimal}
                    inView={isInView}
                  />
                </div>

                {/* Label */}
                <p className="text-slate-400">{stat.label}</p>

                {/* Progress Bar */}
                <div className="mt-4 h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mockup Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-center text-white font-bold text-2xl mb-8">
            Contoh Mockup Desain Custom
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden border border-slate-700 hover:border-glow-cyan/50 transition-all duration-300"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1XuNYbOf3SufS-C-p4ftA2R-z4EB3e8x7" 
                alt="Mockup Desain Custom 1" 
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">Desain Custom</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden border border-slate-700 hover:border-glow-cyan/50 transition-all duration-300"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/18jcRkRPiTqFEpXiqILSZCOIK2HdedQcR" 
                alt="Mockup Desain Custom 2" 
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">Desain Custom</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden border border-slate-700 hover:border-glow-cyan/50 transition-all duration-300"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1SufYA2k-x9YCtrHnQALTYbob7bIFuebZ" 
                alt="Mockup Desain Custom 3" 
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">Desain Custom</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden border border-slate-700 hover:border-glow-cyan/50 transition-all duration-300"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1TqgpTfZFWcBBb605aKZjndv_TNy5yP3w" 
                alt="Mockup Desain Custom 4" 
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">Desain Custom</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden border border-slate-700 hover:border-glow-cyan/50 transition-all duration-300"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/18CPZlENiz-9WRwo4M3gu0ppJphEqVwWN" 
                alt="Mockup Desain Custom 5" 
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">Desain Custom</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden border border-slate-700 hover:border-glow-cyan/50 transition-all duration-300"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1JbzB1vS-ofiFdUu881A3CIIdwcdnVHzw" 
                alt="Mockup Desain Custom 6" 
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">Desain Custom</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-center text-white font-bold text-2xl mb-8">
            ⭐ Dipercaya oleh 100+ UMKM & Brand di Indonesia
          </h3>
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-3 md:gap-8 pb-4 md:pb-0 md:flex-wrap md:justify-center md:items-center max-w-full min-w-0">
              <img 
                src="https://lh3.googleusercontent.com/d/1fINTQmAuWDJdHosZ_bMXjOXXGqbtmsja" 
                alt="Client Logo 1" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
                loading="lazy"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1IUZngmSUwY3mharsGNQfTMW0oLzfV1-f" 
                alt="Client Logo 2" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1GIrDKewqrz_RwNLOKbZ6pMdPQTlHTVTv" 
                alt="Client Logo 3" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1nohZOoy_ptNl8XL3jat8_Ip1VpaPadSw" 
                alt="Client Logo 4" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1Kfp_ZWiFOZIp0ZSBAsCufukWxBvIsPkz" 
                alt="Client Logo 5" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1Qc0nAiTDWfNdQGhBcKh34tTTQJuIN1vh" 
                alt="Client Logo 6" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1C_b0UXid4UC2CBr5kUoe-ZMaAjwEJG_H" 
                alt="Client Logo 7" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1s8e3VSBEXgJ_UItqIVsrvzXp-0GF6o18" 
                alt="Client Logo 8" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1oYUd3j5xg1inJhk9APy8YtUfk7iqPkij" 
                alt="Client Logo 9" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1nFfEg4ZKV5Dk_boqr2CKHTMCviDO26Tl" 
                alt="Client Logo 10" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1usVRBEvPvdsidD4dI6eZRKPftX1K_sE2" 
                alt="Client Logo 11" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1rB0tXv-NVgm8-WOepy41J5JctES_ueLX" 
                alt="Client Logo 12" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1Dlu3bCP_9hCN3nMVJGUHq2qDHriusc8j" 
                alt="Client Logo 13" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1l2qdIqMmxm-fAfHxVf4pwKuO68vmQqdt" 
                alt="Client Logo 14" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/12_i_evAuK9XxayotZrQl9A0o8bigXBdH" 
                alt="Client Logo 15" 
                className="h-8 w-12 md:h-12 md:w-auto object-contain flex-shrink-0"
              />
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-center text-white font-bold text-2xl mb-8">
            Video Torven Industries
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-glow-cyan/20 border border-slate-700">
              <div className="aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/t20Av5awpJ4" 
                  title="Torven Industries Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
