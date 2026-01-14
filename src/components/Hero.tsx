import { motion } from 'framer-motion'
import { Sparkles, ChevronDown } from 'lucide-react'
import Button from './Button'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animierte Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-brand-red rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="text-brand-red" size={16 + Math.random() * 16} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-black mb-6 tracking-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Infinity Cheer
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-red-500 via-brand-red to-red-700 bg-clip-text text-transparent mt-2 drop-shadow-2xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Allstars
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.p 
            className="text-3xl md:text-4xl text-gray-200 mb-12 font-bold tracking-wider uppercase"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              We are one.
            </span>
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="primary" 
              onClick={() => scrollToSection('contact')}
            >
              Probetraining anfragen
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="secondary" 
              onClick={() => scrollToSection('teams')}
            >
              Unser Team
            </Button>
          </motion.div>
        </motion.div>

        {/* Animierter Scroll Indikator */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className="inline-flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-gray-400 text-sm mb-2">Scroll für mehr</span>
            <motion.div
              animate={{ 
                y: [0, 5, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-brand-red" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
