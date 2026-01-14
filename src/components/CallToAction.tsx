import Button from './Button'

const CallToAction = () => {
  const handleContact = () => {
    window.location.href = 'mailto:info@infinity-cheer-allstars.de?subject=Probetraining Anfrage'
  }

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animierte Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-red rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Werde Teil der
          </span>
          <span className="block bg-gradient-to-r from-red-500 via-brand-red to-red-600 bg-clip-text text-transparent mt-3">
            Infinity Cheer Allstars
          </span>
        </h2>
        
        <p className="text-2xl md:text-3xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
          Bist du bereit, deine Grenzen zu überschreiten und Teil von etwas Größerem zu werden?
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed">
          Komm zu einem unverbindlichen Probetraining und erlebe den Spirit der Infinity Cheer Allstars. 
          Wir freuen uns auf dich!
        </p>

        <Button 
          variant="primary" 
          onClick={handleContact}
          className="text-xl shadow-2xl"
        >
          Jetzt Kontakt aufnehmen
        </Button>

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-white">
          <div className="relative group bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-brand-red transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-black text-xl mb-3">E-Mail</h3>
            <p className="text-gray-300 text-sm font-medium">info@infinity-cheer-allstars.de</p>
          </div>

          <div className="relative group bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-brand-red transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-black text-xl mb-3">Training</h3>
            <p className="text-gray-300 text-sm font-medium">Sporthalle Musterstadt</p>
          </div>

          <div className="relative group bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-brand-red transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-black text-xl mb-3">Trainingszeiten</h3>
            <p className="text-gray-300 text-sm font-medium">Di & Do 17:00 - 19:00 Uhr</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
