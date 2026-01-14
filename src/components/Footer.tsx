import { motion } from 'framer-motion'
import { Instagram, Facebook, Music, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black text-white py-16 border-t-8 border-brand-red">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tight uppercase">
              <span className="text-white" style={{
                textShadow: '3px 3px 0 #DC2626'
              }}>
                Infinity
              </span>
            </h3>
            <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight uppercase">
              <span className="text-brand-red">Cheer Allstars</span>
            </h3>
            <div className="w-24 h-1 bg-brand-red mb-4"></div>
            <p className="text-white text-xl font-black uppercase tracking-wider mb-4">We Are One</p>
            <p className="text-gray-400 font-semibold leading-relaxed">
              Gemeinsam trainieren, gemeinsam kämpfen, gemeinsam gewinnen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-2xl mb-6 text-white uppercase tracking-wider border-b-4 border-brand-red inline-block pb-2">Links</h4>
            <ul className="space-y-3">
              {['Über uns', 'Unsere Teams', 'Kontakt'].map((link, i) => (
                <li key={i}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-300 hover:text-brand-red transition-colors font-bold uppercase tracking-wide text-sm flex items-center gap-3"
                  >
                    <span className="w-3 h-3 bg-brand-red"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-black text-2xl mb-6 text-white uppercase tracking-wider border-b-4 border-brand-red inline-block pb-2">Social</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Music, label: 'TikTok' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center hover:bg-brand-red hover:border-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-black hover:text-white transition-colors" size={28} strokeWidth={2.5} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-bold uppercase text-sm tracking-wider">
              © 2026 Infinity Cheer Allstars
            </p>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider">
                Impressum
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider">
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-black flex items-center justify-center hover:bg-brand-red hover:border-white shadow-2xl z-50 transition-colors"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="text-black hover:text-white transition-colors" size={24} strokeWidth={3} />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
