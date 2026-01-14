import { motion } from 'framer-motion'
import { Mail, MapPin, Clock } from 'lucide-react'

const CallToAction = () => {
  const handleContact = () => {
    window.location.href = 'mailto:info@infinity-cheer-allstars.de?subject=Probetraining Anfrage'
  }

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-brand-red via-red-700 to-black overflow-hidden">
      {/* Diagonal Pattern */}
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white border-8 border-black px-10 py-4 mb-8 shadow-2xl">
            <h2 className="text-4xl font-black text-brand-red uppercase tracking-widest">Join Us</h2>
          </div>
          
          <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight mb-6" style={{
            textShadow: '6px 6px 0 #000'
          }}>
            Werde Teil
          </h3>
          <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8" style={{
            textShadow: '6px 6px 0 #000'
          }}>
            Des Teams
          </h3>
          
          <p className="text-2xl md:text-3xl text-white font-bold mb-12 max-w-3xl mx-auto uppercase leading-relaxed">
            Bist du bereit für die Herausforderung?
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContact}
            className="px-12 py-6 bg-white border-8 border-black text-black font-black text-2xl uppercase tracking-wider shadow-2xl hover:bg-black hover:text-white transition-colors"
          >
            Kontakt Aufnehmen
          </motion.button>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            { icon: Mail, title: 'E-MAIL', info: 'info@infinity-cheer-allstars.de' },
            { icon: MapPin, title: 'TRAINING', info: 'Sporthalle Musterstadt' },
            { icon: Clock, title: 'ZEITEN', info: 'Di & Do 17:00 - 19:00' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white border-8 border-black p-8 text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-black border-4 border-brand-red mx-auto mb-6 flex items-center justify-center">
                <item.icon className="text-brand-red" size={40} strokeWidth={2.5} />
              </div>
              <h4 className="text-2xl font-black text-black mb-4 uppercase tracking-wider">{item.title}</h4>
              <div className="w-16 h-1 bg-brand-red mx-auto mb-4"></div>
              <p className="text-gray-700 font-bold uppercase text-sm tracking-wide">{item.info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CallToAction
