import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import Stats from './components/Stats'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tentang" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-violet/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-glow-cyan text-sm font-semibold mb-4">
              Tentang Kami
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Torven Industries
            </h2>
            <p className="text-slate-300 mb-4 text-lg">
              Torven adalah penyedia tas custom yang fokus membantu UMKM dan perusahaan dalam kebutuhan branding, souvenir, dan merchandise.
            </p>
            <p className="text-slate-400 mb-4">
              Kami menyediakan layanan custom logo & desain sesuai request dengan kualitas bahan premium dan proses produksi yang cepat.
            </p>
            <p className="text-slate-400 mb-6">
              Cocok untuk kebutuhan event, hampers, hingga branding usaha Anda.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full glass text-sm text-slate-300">✓ Custom Logo</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-slate-300">✓ Free Design</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-slate-300">✓ Fast Production</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-glow-cyan via-glow-blue to-glow-violet rounded-3xl blur-2xl opacity-30" />
            <div className="aspect-square rounded-3xl overflow-hidden glass-card relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1b5cbc6YA8sPV4ERGdmLmJK8VojpAsl3z" 
                alt="Torven Industries" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="fixed inset-0 bg-mesh pointer-events-none" />
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-50" />
      
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SocialProof />
        <Features />
        <Stats />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
