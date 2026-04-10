import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, MessageCircle, Sparkles, Gift } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-glow-cyan/20 via-glow-blue/20 to-glow-violet/20 animate-gradient" />
        <div className="absolute top-0 left-0 md:left-1/4 w-48 h-48 md:w-96 md:h-96 bg-glow-cyan/30 rounded-full blur-3xl animate-float" style={{ maxWidth: '100%' }} />
        <div className="absolute bottom-0 right-0 md:right-1/4 w-48 h-48 md:w-96 md:h-96 bg-glow-violet/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', maxWidth: '100%' }} />
        
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-glow-cyan/50 to-transparent scanline" />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="hidden md:flex absolute top-8 left-8 w-16 h-16 rounded-2xl glass items-center justify-center"
      >
        <Gift className="w-8 h-8 text-glow-cyan" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="hidden md:flex absolute bottom-8 right-8 w-16 h-16 rounded-2xl glass items-center justify-center"
      >
        <Sparkles className="w-8 h-8 text-glow-violet" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <MessageCircle className="w-4 h-4 text-glow-cyan" />
            <span className="text-sm text-slate-300">
              Siap Membantu Anda
            </span>
            </motion.div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Butuh Tas Custom untuk
              <br />
              <span className="gradient-text text-glow">Branding Anda?</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Konsultasi gratis sekarang! Tim kami siap membantu design dan penawaran terbaik untuk kebutuhan Anda.
          </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
            <a
              href="https://wa.me/6281212441652?text=Halo%20Torven%2C%20saya%20tertarik%20pesan%20tas%20custom"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-glow-cyan to-glow-blue text-bg-primary font-bold text-lg rounded-full btn-glow inline-flex items-center justify-center gap-3 animate-pulse-glow"
            >
              Chat WhatsApp Sekarang
              <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#portofolio" className="w-full sm:w-auto px-10 py-4 border-2 border-slate-600 text-white font-semibold rounded-full hover:border-glow-cyan hover:bg-glow-cyan/10 transition-all duration-300">
              Lihat Portofolio
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-8 text-sm text-slate-500"
          >
            <span className="text-glow-cyan">✨</span> 
            {' '}Free Consultation • No Minimum Order
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </section>
  )
}
