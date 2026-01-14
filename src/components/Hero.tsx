import { motion } from 'framer-motion'
import { Star, ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Bold Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-red-700 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(0,0,0,.3) 35px,
              rgba(0,0,0,.3) 70px
            )`
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* EST Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
          className="inline-block mb-8"
        >
          <div className="bg-white border-8 border-black px-8 py-4 shadow-2xl">
            <span className="text-3xl font-black text-brand-red tracking-[0.3em] uppercase">EST. 2019</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-black leading-none tracking-tighter uppercase mb-0">
            <span className="block text-white" style={{
              textShadow: '8px 8px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000'
            }}>
              INFINITY
            </span>
            <span className="block text-white -mt-8" style={{
              textShadow: '8px 8px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000'
            }}>
              CHEER
            </span>
          </h1>
        </motion.div>

        {/* Allstars Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8, delay: 0.8 }}
          className="inline-block my-8"
        >
          <div className="bg-black border-8 border-white px-16 py-6 shadow-2xl">
            <span className="text-6xl md:text-7xl font-black text-brand-red tracking-wider uppercase">ALLSTARS</span>
          </div>
        </motion.div>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <Star className="text-white fill-white" size={32} />
            <p className="text-5xl md:text-6xl font-black text-white uppercase tracking-wider" style={{
              textShadow: '3px 3px 0 #000'
            }}>
              WE ARE ONE
            </p>
            <Star className="text-white fill-white" size={32} />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-12 py-5 bg-white border-8 border-black text-black font-black text-xl uppercase tracking-wider shadow-2xl hover:bg-black hover:text-white transition-colors"
          >
            Join Our Team
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('teams')}
            className="px-12 py-5 bg-black border-8 border-white text-white font-black text-xl uppercase tracking-wider shadow-2xl hover:bg-white hover:text-black transition-colors"
          >
            Our Teams
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-20 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <ChevronDown className="text-white" size={40} strokeWidth={3} />
              <ChevronDown className="w-8 h-8 text-brand-red" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
