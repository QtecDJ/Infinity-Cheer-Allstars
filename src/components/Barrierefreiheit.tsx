import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface BarrierefreiheitProps {
  onClose: () => void
}

const Barrierefreiheit = ({ onClose }: BarrierefreiheitProps) => {
  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-2xl w-full my-8 relative border-4 md:border-8 border-black"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-brand-red border-2 md:border-4 border-black flex items-center justify-center hover:bg-black hover:border-brand-red transition-colors z-10"
          aria-label="Schließen"
        >
          <X className="text-white" size={20} />
        </button>

        <div className="p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-black text-black uppercase mb-4 md:mb-6 border-b-4 border-brand-red pb-2 md:pb-4 pr-12">
            Barrierefreiheit
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Erklärung zur digitalen Barrierefreiheit</h2>
              <p className="mb-4">
                Die Infinity Cheer Allstars sind bemüht, ihre Website im Einklang mit den Bestimmungen des 
                Barrierefreiheitsstärkungsgesetzes (BFSG) sowie der EU-Richtlinie 2016/2102 über den barrierefreien 
                Zugang zu den Websites und mobilen Anwendungen öffentlicher Stellen zugänglich zu machen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Stand der Vereinbarkeit</h2>
              <p className="mb-4">
                Diese Website ist mit den folgenden Standards teilweise vereinbar:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                <li>Barrierefreiheitsstärkungsgesetz (BFSG)</li>
                <li>EU-Richtlinie 2016/2102</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Nicht barrierefreie Inhalte</h2>
              <p className="mb-4">
                Die nachstehend aufgeführten Inhalte sind aus folgenden Gründen noch nicht vollständig barrierefrei:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Einige Animationen können für Nutzer mit vestibulären Störungen problematisch sein</li>
                <li>Nicht alle Bilder verfügen über aussagekräftige Alternativtexte</li>
                <li>Einige PDF-Dokumente sind möglicherweise nicht vollständig barrierefrei</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Barrierefreiheitsmerkmale</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Semantisch korrekte HTML-Struktur</li>
                <li>Tastaturnavigation möglich</li>
                <li>Responsive Design für verschiedene Bildschirmgrößen</li>
                <li>Ausreichende Farbkontraste (WCAG AA Standard)</li>
                <li>Lesbare Schriftgrößen und anpassbare Textdarstellung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Feedback und Kontakt</h2>
              <p className="mb-4">
                Wir arbeiten kontinuierlich an der Verbesserung der Barrierefreiheit unserer Website. 
                Sollten Sie auf Barrieren stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:
              </p>
              <div className="bg-gray-100 p-4 border-4 border-black">
                <p className="font-bold">E-Mail: <a href="mailto:info@icacheer.space" className="text-brand-red hover:underline">info@icacheer.space</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Durchsetzungsverfahren</h2>
              <p className="mb-4">
                Bei nicht zufriedenstellenden Antworten können Sie sich an die zuständige Durchsetzungsstelle wenden:
              </p>
              <div className="bg-gray-100 p-4 border-4 border-black">
                <p className="font-bold mb-2">Landesbeauftragte für Menschen mit Behinderungen Baden-Württemberg</p>
                <p>Else-Josenhans-Str. 6</p>
                <p>70173 Stuttgart</p>
                <p className="mt-2">E-Mail: poststelle@bfbmb.bwl.de</p>
              </div>
            </section>

            <section className="text-sm text-gray-600">
              <p>Diese Erklärung wurde am 14. Januar 2026 erstellt und zuletzt aktualisiert.</p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Barrierefreiheit
