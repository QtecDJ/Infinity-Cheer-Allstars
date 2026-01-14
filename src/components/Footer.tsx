const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40\"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16\">
          {/* Logo & Motto */}
          <div>
            <h3 className="text-4xl font-black mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent\">
                Infinity Cheer
              </span>
              <span className="block bg-gradient-to-r from-red-500 via-brand-red to-red-600 bg-clip-text text-transparent mt-1\">Allstars</span>
            </h3>
            <p className="text-gray-300 text-xl font-bold mb-6 tracking-wide\">We are one.</p>
            <p className="text-gray-400 text-sm leading-relaxed\">
              Gemeinsam trainieren, gemeinsam kämpfen, gemeinsam gewinnen. 
              Das ist der Spirit der Infinity Cheer Allstars.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-xl mb-6\">Quick Links</h4>
            <ul className="space-y-3\">
              <li>
                <a href="#about" className="text-gray-400 hover:text-brand-red transition-colors flex items-center gap-2 group\">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full group-hover:w-3 transition-all\"></span>
                  Über uns
                </a>
              </li>
              <li>
                <a href="#teams" className="text-gray-400 hover:text-brand-red transition-colors flex items-center gap-2 group\">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full group-hover:w-3 transition-all\"></span>
                  Unsere Teams
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-red transition-colors flex items-center gap-2 group\">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full group-hover:w-3 transition-all\"></span>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-black text-xl mb-6\">Folge uns</h4>
            <div className="flex gap-4 mb-6\">
              <a 
                href="#" 
                className="w-14 h-14 bg-white/10 hover:bg-gradient-to-br hover:from-brand-red hover:to-red-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 border border-white/20\"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6\" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-14 h-14 bg-white/10 hover:bg-gradient-to-br hover:from-brand-red hover:to-red-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 border border-white/20\"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6\" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-14 h-14 bg-white/10 hover:bg-gradient-to-br hover:from-brand-red hover:to-red-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 border border-white/20\"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6\" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-10\">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4\">
            <p className="text-gray-400 text-sm\">
              © 2026 Infinity Cheer Allstars. Alle Rechte vorbehalten.
            </p>
            
            <div className="flex gap-8 text-sm\">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium\">
                Impressum
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium\">
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-brand-red via-red-600 to-red-700 hover:from-red-700 hover:to-brand-red rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-brand-red/50 transition-all duration-300 hover:scale-110 hover:rotate-6 z-50 border-2 border-white/20\"
          aria-label="Nach oben scrollen"
        >
          <svg className="w-6 h-6 text-white\" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default Footer
