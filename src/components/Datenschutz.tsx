import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface DatenschutzProps {
  onClose: () => void
}

const Datenschutz = ({ onClose }: DatenschutzProps) => {
  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-4xl w-full my-8 relative border-8 border-black"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 bg-brand-red border-4 border-black flex items-center justify-center hover:bg-black hover:border-brand-red transition-colors"
        >
          <X className="text-white" size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-black text-black uppercase mb-8 border-b-4 border-brand-red pb-4">
            Datenschutzerklärung
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-bold text-black mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">2. Verantwortliche Stelle</h2>
              <p className="mb-4">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-gray-100 p-4 border-4 border-black mb-4">
                <p className="font-bold">Infinity Cheer Allstars</p>
                <p>Weilhau Plattenhardt</p>
                <p className="mt-2">E-Mail: info@icacheer.space</p>
              </div>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-bold text-black mb-2">Hosting</h3>
              <p className="mb-4">
                Diese Website wird bei GitHub Pages gehostet. Der Anbieter ist:
              </p>
              <div className="bg-gray-100 p-4 border-4 border-black mb-4">
                <p className="font-bold">GitHub Inc.</p>
                <p>88 Colin P Kelly Jr St</p>
                <p>San Francisco, CA 94107, USA</p>
              </div>
              <p className="mb-4">
                GitHub erhebt in sog. Logfiles folgende Daten: IP-Adresse, Browsertyp, Betriebssystem, Referrer URL, 
                Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar.
              </p>

              <h3 className="text-xl font-bold text-black mb-2 mt-6">Kontaktformular / E-Mail-Kontakt</h3>
              <p className="mb-4">
                Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen 
                Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. 
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit 
                der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. 
                In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">4. Ihre Rechte</h2>
              <p className="mb-4">Sie haben folgende Rechte:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
                <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger Daten zu verlangen.</li>
                <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen.</li>
                <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen.</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten Format zu erhalten.</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung zu widersprechen.</li>
                <li><strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">5. Speicherdauer</h2>
              <p className="mb-4">
                Personenbezogene Daten werden nur so lange gespeichert, wie es für die Erfüllung des Zwecks erforderlich ist. 
                Nach Beendigung des Zwecks werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">6. Externe Links</h2>
              <p className="mb-4">
                Diese Website enthält Links zu externen Websites. Auf den Inhalt dieser externen Seiten haben wir keinen Einfluss. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black uppercase mb-4">7. Änderungen der Datenschutzerklärung</h2>
              <p className="mb-4">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
                Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
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

export default Datenschutz
