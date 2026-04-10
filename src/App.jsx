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
    <section id="tentang" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[800px] h-[600px] bg-glow-violet/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 mb-4 text-lg">
              Torven Industries adalah penyedia tas custom yang membantu UMKM & brand tampil lebih profesional melalui produk berkualitas tinggi.
            </p>
            <p className="text-slate-400 mb-4">
              Kami melayani pembuatan tas custom logo & desain sesuai kebutuhan Anda — mulai dari konsep hingga produksi, semua kami tangani dengan cepat, rapi, dan terpercaya.
            </p>
            <p className="text-slate-400 mb-6">
              Cocok untuk kebutuhan souvenir, merchandise, event, hingga branding usaha agar terlihat lebih premium dan berkesan.
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
            <div className="rounded-3xl overflow-hidden glass-card relative">
              <img 
                src="/images/production_image.jpg" 
                alt="Torven Industries" 
                className="w-full h-auto" 
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
    <div className="min-h-screen bg-bg-primary overflow-x-hidden">
      <div className="fixed inset-0 bg-mesh pointer-events-none" style={{ maxWidth: '100vw', overflow: 'hidden' }} />
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-50" style={{ maxWidth: '100vw', overflow: 'hidden' }} />
      
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
