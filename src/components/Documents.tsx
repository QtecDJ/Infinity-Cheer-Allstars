import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

const Documents = () => {
  const documents = [
    {
      title: 'Cheerleading Regelwerk',
      description: 'Offizielle Regeln und Richtlinien für Cheerleading-Wettbewerbe',
      url: 'https://example.com/regelwerk.pdf',
      type: 'PDF'
    },
    {
      title: 'Trainingsplan 2026',
      description: 'Aktueller Trainingsplan für alle Teams',
      url: 'https://example.com/trainingsplan.pdf',
      type: 'PDF'
    },
    {
      title: 'Anmeldeformular',
      description: 'Formular für neue Mitglieder und Probetraining',
      url: 'https://example.com/anmeldung.pdf',
      type: 'PDF'
    },
    {
      title: 'Wettkampftermine',
      description: 'Übersicht aller Wettbewerbe und Events 2026',
      url: 'https://example.com/termine.pdf',
      type: 'PDF'
    }
  ]

  const openDocument = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <section className="relative py-32 bg-gray-100">
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
            <h2 className="text-2xl md:text-4xl font-black text-brand-red uppercase tracking-widest">Documents</h2>
          </div>
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-black text-black uppercase tracking-tight mb-6" style={{
            textShadow: '3px 3px 0 #DC2626'
          }}>
            Dokumente
          </h3>
          <div className="w-32 h-2 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => openDocument(doc.url)}
              className="bg-white border-4 md:border-8 border-black p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black border-4 border-brand-red mb-4 md:mb-6 flex items-center justify-center">
                <FileText className="text-brand-red" size={40} strokeWidth={2.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-wide">{doc.title}</h3>
              
              {/* Type Badge */}
              <div className="inline-block bg-gray-900 text-white px-4 py-1 font-bold uppercase text-sm mb-4 border-4 border-black">
                {doc.type}
              </div>
              
              {/* Divider */}
              <div className="w-16 h-1 bg-brand-red mb-4"></div>
              
              {/* Description */}
              <p className="text-gray-700 font-semibold mb-6 leading-relaxed">
                {doc.description}
              </p>
              
              {/* Open Link */}
              <div className="pt-6 border-t-4 border-black flex items-center gap-3">
                <span className="text-brand-red font-black uppercase tracking-wider">Öffnen</span>
                <ExternalLink className="text-brand-red" size={20} strokeWidth={3} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black transform -skew-y-2 origin-bottom-left"></div>
    </section>
  )
}

export default Documents
