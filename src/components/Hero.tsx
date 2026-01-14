import { motion } from 'framer-motion'
import { Star, ChevronDown, Megaphone } from 'lucide-react'
import Button from './Button'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Diagonal Stripes Background - USA Style */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-red-700 to-black opacity-95"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stripes" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect x="0" y="0" width="50" height="100" fill="rgba(0,0,0,0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stripes)" />
        </svg>
      </div>
      {/* Animierte Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-brand-red rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>

      {/* Floating Stars - USA Cheerleader Style */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="text-white fill-white" size={20 + Math.random() * 20} />
          </motion.div>
        ))}
      </div>
      
      {/* Megaphone Decorations */}
      <motion.div 
        className="absolute top-20 left-10 opacity-20"
        animate={{ rotate: [0, 10, 0], y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Megaphone className="text-white" size={80} />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 opacity-20"
        animate={{ rotate: [0, -10, 0], y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        <Megaphone className="text-white" size={80} />
      </motion.div>

      {/* Content - Varsity Style */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Varsity Letter Style */}
          <motion.div
            className="inline-block mb-8 px-8 py-3 bg-white rounded-lg shadow-2xl border-4 border-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.3 }}
          >
            <span className="text-2xl md:text-3xl font-black text-brand-red tracking-widest">EST. 2019</span>
          </motion.div>
          
          <motion.h1 
            className="text-8xl md:text-[10rem] font-black mb-4 tracking-tighter leading-none"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.span 
              className="block text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] uppercase"
              style={{
                textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
              }}
            >
              INFINITY
            </motion.span>
            <motion.span 
              className="block text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] uppercase -mt-4"
              style={{
                textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              CHEER
            </motion.span>
          </motion.h1>
          
          <motion.div
            className="inline-block px-12 py-4 bg-black border-4 border-white rounded-full shadow-2xl mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.8 }}
          >
            <span className="text-4xl md:text-5xl font-black text-brand-red tracking-wider uppercase">Allstars</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.p 
            className="text-4xl md:text-5xl text-white mb-12 font-black tracking-widest uppercase"
            style={{
              textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
            }}
            animate={{ 
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐ WE ARE ONE ⭐
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
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
