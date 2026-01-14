import { motion } from 'framer-motion'
import { Users, Zap, Award, Star } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      {/* Diagonal Stripe Background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-brand-red to-red-700 transform -skew-y-2"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-r from-black to-gray-900 transform skew-y-2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-8 py-3 bg-brand-red border-4 border-black rounded-lg mb-6 shadow-xl">
            <Star className="inline-block text-white mr-2" size={24} />
            <span className="text-2xl font-black text-white tracking-widest uppercase">About Us</span>
            <Star className="inline-block text-white ml-2" size={24} />
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-black mb-4 tracking-tight uppercase" style={{
            textShadow: '4px 4px 0 #DC2626'
          }}>
            Über uns
          </h2>
          <div className="w-32 h-2 bg-black mx-auto"></div>
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-br from-brand-red via-red-700 to-black rounded-none p-12 md:p-16 shadow-2xl border-8 border-black overflow-hidden">
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-bold uppercase text-center" style={{
                textShadow: '2px 2px 0 #000'
              }}>
                Die <span className="font-black text-black bg-white px-3 py-1 inline-block transform -rotate-1">Infinity Cheer Allstars</span> sind mehr als nur ein Team – 
                wir sind eine <span className="font-black underline decoration-4">Familie</span>, die gemeinsam an einem Ziel arbeitet.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-12 text-center font-semibold">
                Mit Leidenschaft, Disziplin und unerschütterlichem Teamgeist trainieren wir für nationale 
                Meisterschaften und entwickeln uns kontinuierlich weiter. Jedes Mitglied bringt seine individuelle 
                Stärke ein – gemeinsam sind wir unaufhaltbar.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <motion.div 
                  className="text-center p-8 bg-white border-8 border-black shadow-2xl transform hover:scale-105 transition-transform"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-24 h-24 bg-black flex items-center justify-center mx-auto mb-6 border-4 border-brand-red">
                    <Users className="w-12 h-12 text-brand-red" />
                  </div>
                  <h3 className="font-black text-2xl text-black mb-3 uppercase tracking-wide">Teamgeist</h3>
                  <p className="text-gray-700 font-bold uppercase text-sm">Zusammen sind wir stärker</p>
                </motion.div>

                <motion.div 
                  className="text-center p-8 bg-white border-8 border-black shadow-2xl transform hover:scale-105 transition-transform"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-24 h-24 bg-black flex items-center justify-center mx-auto mb-6 border-4 border-brand-red">
                    <Zap className="w-12 h-12 text-brand-red" />
                  </div>
                  <h3 className="font-black text-2xl text-black mb-3 uppercase tracking-wide">Energie</h3>
                  <p className="text-gray-700 font-bold uppercase text-sm">Mit voller Kraft voraus</p>
                </motion.div>

                <motion.div 
                  className="text-center p-8 bg-white border-8 border-black shadow-2xl transform hover:scale-105 transition-transform"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-24 h-24 bg-black flex items-center justify-center mx-auto mb-6 border-4 border-brand-red">
                    <Award className="w-12 h-12 text-brand-red" />
                  </div>
                  <h3 className="font-black text-2xl text-black mb-3 uppercase tracking-wide">Exzellenz</h3>
                  <p className="text-gray-700 font-bold uppercase text-sm">Streben nach Perfektion</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
