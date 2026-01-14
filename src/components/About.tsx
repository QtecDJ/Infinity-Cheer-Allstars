import { motion } from 'framer-motion'
import { Users, Zap, Trophy } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-white">
      {/* Diagonal Accent */}
      <div className="absolute top-0 left-0 w-full h-24 bg-brand-red transform -skew-y-2 origin-top-left"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-black border-8 border-brand-red px-10 py-4 mb-8">
            <h2 className="text-4xl font-black text-brand-red uppercase tracking-widest">About Us</h2>
          </div>
          <h3 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tight mb-6" style={{
            textShadow: '4px 4px 0 #DC2626'
          }}>
            Über Uns
          </h3>
          <div className="w-32 h-2 bg-black mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-brand-red to-red-800 border-8 border-black p-12 md:p-16 shadow-2xl">
            <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed mb-6 text-center uppercase">
              Die Infinity Cheer Allstars sind mehr als ein Team – wir sind eine Familie mit einem gemeinsamen Ziel.
            </p>
            <div className="h-1 w-24 bg-white mx-auto my-8"></div>
            <p className="text-xl text-gray-100 font-semibold leading-relaxed text-center">
              Mit Leidenschaft, Disziplin und unerschütterlichem Teamgeist trainieren wir für nationale Meisterschaften. 
              Jedes Mitglied bringt seine Stärke ein – gemeinsam sind wir unaufhaltbar.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Users, title: 'TEAMGEIST', desc: 'Zusammen Stark' },
            { icon: Zap, title: 'ENERGIE', desc: 'Volle Kraft' },
            { icon: Trophy, title: 'EXZELLENZ', desc: 'Höchstes Niveau' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white border-8 border-black p-10 text-center shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="w-24 h-24 bg-black border-4 border-brand-red mx-auto mb-6 flex items-center justify-center">
                <item.icon className="text-brand-red" size={48} strokeWidth={2.5} />
              </div>
              <h4 className="text-2xl font-black text-black mb-3 uppercase tracking-wide">{item.title}</h4>
              <div className="w-16 h-1 bg-brand-red mx-auto mb-3"></div>
              <p className="text-gray-700 font-bold uppercase text-sm tracking-wider">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 right-0 w-full h-24 bg-black transform skew-y-2 origin-bottom-right"></div>
    </section>
  )
}

export default About
