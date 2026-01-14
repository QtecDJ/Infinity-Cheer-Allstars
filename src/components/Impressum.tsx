import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ImpressumProps {
  onClose: () => void
}

const Impressum = ({ onClose }: ImpressumProps) => {
  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-lg md:max-w-xl w-full my-4 md:my-8 relative border-4 border-black max-h-[90vh] overflow-y-auto"
      >
        {/* Sticky Close Button */}
        <div className="sticky top-0 bg-white z-20 border-b-4 border-black p-3 md:p-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-black text-black uppercase tracking-tight">
            Impressum
          </h1>
          <button
            onClick={onClose}
            className="w-12 h-12 md:w-14 md:h-14 bg-brand-red border-4 border-black flex items-center justify-center hover:bg-black hover:border-brand-red transition-colors flex-shrink-0"
            aria-label="Schließen"
          >
            <X className="text-white" size={28} strokeWidth={3} />
          </button>
        </div>

        <div className="p-4 md:p-6">
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="bg-gray-100 p-6 border-4 border-black">
                <p className="font-bold text-lg mb-3 text-brand-red">Infinity Cheer Allstars</p>
                <p className="font-semibold mb-2">Abteilung des Turn- und Sportverein Plattenhardt 1913 e.V.</p>
                <p className="mt-3">
                  <span className="font-bold">Anschrift:</span> Weilhau Plattenhardt
                </p>
                <p className="mt-2">
                  <span className="font-bold">E-Mail:</span> <a href="mailto:info@icacheer.space" className="text-brand-red hover:underline">info@icacheer.space</a>
                </p>
                <p className="mt-2">
                  <span className="font-bold">Website:</span> <a href="https://web.icacheer.space" className="text-brand-red hover:underline">web.icacheer.space</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Vertreten durch den TSV Plattenhardt 1913 e.V.</h2>
              <p className="mb-4">
                Die Infinity Cheer Allstars sind eine Abteilung des Turn- und Sportverein Plattenhardt 1913 e.V. 
                Alle rechtlichen Angaben beziehen sich auf den Hauptverein.
              </p>
              <div className="bg-blue-50 border-4 border-blue-300 p-4">
                <p className="text-sm text-blue-900 font-semibold">
                  ℹ️ Für weitere rechtliche Informationen und offizielle Vereinsdaten kontaktieren Sie bitte den TSV Plattenhardt 1913 e.V.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Haftungsausschluss</h2>
              <h3 className="text-lg font-bold text-black mb-2">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Haftung für Links</h2>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="mb-4">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Urheberrecht</h2>
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="mb-4">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir 
                um einen entsprechenden Hinweis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Streitschlichtung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mb-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="text-sm text-gray-600 mt-8">
              <p>Stand: 14. Januar 2026</p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Impressum
