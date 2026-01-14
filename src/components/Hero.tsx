import Button from './Button'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animierte Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-brand-red rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Infinity Cheer
            </span>
            <span className="block bg-gradient-to-r from-red-500 via-brand-red to-red-700 bg-clip-text text-transparent mt-2 drop-shadow-2xl">
              Allstars
            </span>
          </h1>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          <p className="text-3xl md:text-4xl text-gray-200 mb-12 font-bold tracking-wider uppercase">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              We are one.
            </span>
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.5s' }}>
          <Button 
            variant="primary" 
            onClick={() => scrollToSection('contact')}
          >
            Probetraining anfragen
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => scrollToSection('teams')}
          >
            Unser Team
          </Button>
        </div>

        {/* Scroll Indikator */}
        <div className="animate-fade-in-up opacity-0 mt-20" style={{ animationDelay: '0.7s' }}>
          <div className="inline-flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll für mehr</span>
            <svg 
              className="w-6 h-6 text-brand-red animate-bounce" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
