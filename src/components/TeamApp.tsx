import { motion } from 'framer-motion'
import { Smartphone, MessageSquare, Calendar, Users, Bell, FileText, CheckCircle, Zap } from 'lucide-react'

const TeamApp = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Trainingsplanung',
      description: 'Alle Trainingszeiten, Stunts und Choreografien immer griffbereit – direkt auf deinem Smartphone'
    },
    {
      icon: MessageSquare,
      title: 'Zentrale Kommunikation',
      description: 'Schluss mit WhatsApp-Chaos! Alle Team-Infos an einem Ort – übersichtlich und strukturiert'
    },
    {
      icon: Bell,
      title: 'Push-Benachrichtigungen',
      description: 'Nie wieder wichtige Updates verpassen. Instant-Nachrichten für Terminänderungen und Ankündigungen'
    },
    {
      icon: FileText,
      title: 'Dokumente & Medien',
      description: 'Musik-Tracks, Videos, Formulare und wichtige Dokumente zentral verfügbar für alle Mitglieder'
    },
    {
      icon: Users,
      title: 'Team-Management',
      description: 'Anwesenheitslisten, Mitgliederverwaltung und Kontaktdaten – alles digital und DSGVO-konform'
    },
    {
      icon: CheckCircle,
      title: 'Event-Organisation',
      description: 'Wettkämpfe, Auftritte und Events perfekt koordiniert. Wer kommt mit? Wer braucht Transport?'
    }
  ]

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Diagonal Background Stripes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-brand-red to-black transform -skew-y-3"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-brand-red to-black transform skew-y-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-black border-4 md:border-8 border-brand-red flex items-center justify-center mx-auto mb-4">
              <Smartphone className="text-brand-red" size={40} strokeWidth={2.5} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black uppercase mb-4 tracking-tight">
            <span className="block">Unsere</span>
            <span className="text-brand-red">Team-App</span>
          </h2>
          
          <div className="w-24 h-2 bg-brand-red mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-700 font-bold max-w-3xl mx-auto leading-relaxed">
            Wir arbeiten mit einer <span className="text-brand-red font-black">eigens für unser Team entwickelten App</span>, 
            die den Trainings- und Vereinsalltag revolutioniert
          </p>
        </motion.div>

        {/* Main Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-brand-red to-red-700 border-4 md:border-8 border-black p-6 md:p-10 mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-black flex items-center justify-center flex-shrink-0">
              <Zap className="text-brand-red" size={48} strokeWidth={3} />
            </div>
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-3 tracking-wide">
                Kommunikation neu gedacht
              </h3>
              <p className="text-lg md:text-xl font-bold leading-relaxed">
                Schluss mit endlosen WhatsApp-Gruppen, verpassten Nachrichten und Informationschaos! 
                Unsere App minimiert die Kommunikationswege <span className="underline">drastisch</span> und sorgt dafür, 
                dass jedes Teammitglied immer auf dem neuesten Stand ist – <span className="font-black">automatisch, 
                übersichtlich, professionell.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white border-4 md:border-8 border-black p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-black border-4 border-brand-red flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:border-black transition-colors">
                <feature.icon className="text-brand-red group-hover:text-white transition-colors" size={28} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-3 tracking-wide">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 font-semibold leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-black border-4 md:border-8 border-brand-red p-6 md:p-8 inline-block">
            <p className="text-white font-black text-lg md:text-2xl uppercase tracking-wider mb-4">
              Digitale Excellence für maximale Performance
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-brand-red text-white px-4 py-2 font-bold border-2 border-white">📱 MOBIL</span>
              <span className="bg-brand-red text-white px-4 py-2 font-bold border-2 border-white">🔒 SICHER</span>
              <span className="bg-brand-red text-white px-4 py-2 font-bold border-2 border-white">⚡ SCHNELL</span>
              <span className="bg-brand-red text-white px-4 py-2 font-bold border-2 border-white">🎯 EFFIZIENT</span>
            </div>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 border-4 border-gray-300 p-6 text-center"
        >
          <p className="text-gray-700 font-semibold">
            💡 <span className="font-black text-black">Als Mitglied erhältst du automatisch Zugang zur App</span> – 
            dort findest du alle wichtigen Informationen, Trainingspläne und kannst dich direkt mit deinem Team vernetzen.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamApp
