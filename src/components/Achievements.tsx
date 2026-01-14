import { motion } from 'framer-motion'
import { Trophy, Star, TrendingUp, Heart } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      title: 'Landes-meisterschaften',
      description: 'Regelmäßige Teilnahme an den Landesmeisterschaften mit mehreren Teams in verschiedenen Altersklassen.',
      icon: Trophy
    },
    {
      title: 'Öffentliche Auftritte',
      description: 'Spektakuläre Performances bei lokalen und regionalen Events – wir bringen die Energie auf jede Bühne.',
      icon: Star
    },
    {
      title: 'Kontinuierliche Entwicklung',
      description: 'Professionelles Coaching und strukturiertes Training für stetigen Fortschritt und persönliches Wachstum.',
      icon: TrendingUp
    },
    {
      title: 'Teambuilding Events',
      description: 'Gemeinsame Erlebnisse und Teamevents stärken unseren Zusammenhalt und schweißen uns zusammen.',
      icon: Heart
    }
  ]

  return (
    <section className="relative py-32 bg-white">
      {/* Diagonal Accent */}
      <div className="absolute top-0 right-0 w-full h-24 bg-brand-red transform skew-y-2 origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-black border-4 md:border-8 border-brand-red px-6 py-3 md:px-10 md:py-4 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-brand-red uppercase tracking-widest">Success</h2>
          </div>
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-black text-black uppercase tracking-tight mb-6" style={{
            textShadow: '3px 3px 0 #DC2626'
          }}>
            Erfolge
          </h3>
          <div className="w-32 h-2 bg-black mx-auto"></div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white border-4 md:border-8 border-black p-6 md:p-8 text-center shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black border-4 border-brand-red mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <achievement.icon className="text-brand-red" size={40} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-black mb-4 uppercase tracking-wide">{achievement.title}</h3>
              <div className="w-16 h-1 bg-brand-red mx-auto mb-4"></div>
              <p className="text-gray-700 font-semibold text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-red to-red-800 border-4 md:border-8 border-black shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-16">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border-4 border-white p-4 md:p-8"
              >
                <div className="text-6xl md:text-8xl font-black text-white mb-2 md:mb-4" style={{
                  textShadow: '3px 3px 0 #000'
                }}>4</div>
                <div className="text-xl md:text-3xl font-black text-white uppercase tracking-wider">Teams</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border-4 border-white p-8"
              >
                <div className="text-8xl font-black text-white mb-4" style={{
                  textShadow: '4px 4px 0 #000'
                }}>50+</div>
                <div className="text-3xl font-black text-white uppercase tracking-wider">Athleten</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border-4 border-white p-8"
              >
                <div className="text-8xl font-black text-white mb-4" style={{
                  textShadow: '4px 4px 0 #000'
                }}>1</div>
                <div className="text-3xl font-black text-white uppercase tracking-wider">Ziel</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black transform -skew-y-2 origin-bottom-left"></div>
    </section>
  )
}

export default Achievements
