import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Palette, Truck } from 'lucide-react'
import { MessageCircle, FolderOpen } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
}

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-glow-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-glow-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-glow-cyan" />
              <span className="text-sm text-slate-300">Solusi Branding Usaha</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Tas Custom untuk</span>
              <br />
              <span className="gradient-text text-glow">Branding Berkesan</span>
              <br />
              <span className="text-white">yang Tak Terlupakan</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Custom logo, free design, produksi cepat. Solusi tas branded untuk UMKM, perusahaan & event Anda.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://wa.me/6281212441652?text=Halo%20Torven%2C%20saya%20tertarik%20pesan%20tas%20custom"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-glow-cyan to-glow-blue text-bg-primary font-bold rounded-full btn-glow flex items-center justify-center gap-2 animate-pulse-glow"
              >
                Pesan via WhatsApp
                <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <a href="#portofolio" className="w-full sm:w-auto px-8 py-4 border border-slate-600 text-white font-semibold rounded-full hover:border-glow-cyan hover:bg-glow-cyan/10 transition-all duration-300 flex items-center justify-center gap-2">
                <FolderOpen className="w-5 h-5" />
                Lihat Portofolio
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10"
            >
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-glow-cyan" />
                <span className="text-sm text-slate-400">Free Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-glow-cyan" />
                <span className="text-sm text-slate-400">Kirim Seluruh Indonesia</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-glow-cyan via-glow-blue to-glow-violet rounded-3xl blur-2xl opacity-30 animate-pulse" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden border border-glow-cyan/30 glass-card"
            >
              <img
                src="https://lh3.googleusercontent.com/d/1lLdQTvkNkm70TB4UMJgOcY7j-gecYgi3"
                alt="Torven Custom Bags"
                className="w-full h-auto"
              />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-4 px-4 py-2 rounded-full glass text-sm font-semibold"
              >
                <span className="text-glow-cyan">⭐</span> 10,000+ Terjual
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 px-4 py-3 rounded-xl glass-card"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-glow-cyan/20 flex items-center justify-center">
                  <span className="text-xl">🎉</span>
                </div>
                <div>
                  <p className="text-white font-semibold">500+</p>
                  <p className="text-xs text-slate-400">Klien Puas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
