const Achievements = () => {
  const achievements = [
    {
      title: 'Landesmeisterschaften',
      description: 'Regelmäßige Teilnahme an den Landesmeisterschaften mit mehreren Teams in verschiedenen Altersklassen.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Öffentliche Auftritte',
      description: 'Spektakuläre Performances bei lokalen und regionalen Events – wir bringen die Energie auf jede Bühne.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      title: 'Kontinuierliche Entwicklung',
      description: 'Professionelles Coaching und strukturiertes Training für stetigen Fortschritt und persönliches Wachstum.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Teambuilding Events',
      description: 'Gemeinsame Erlebnisse und Teamevents stärken unseren Zusammenhalt und schweißen uns zusammen.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Subtiler Hintergrund */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-brand-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-brand-black via-gray-800 to-brand-black bg-clip-text text-transparent">
              Erfolge & Wettbewerbe
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-red to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Unsere Erfolge sind das Ergebnis von harter Arbeit, Disziplin und unerschütterlichem Teamgeist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="relative group bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-brand-red transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 via-brand-red/0 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-red via-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black text-brand-black mb-4 group-hover:text-brand-red transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistiken */}
        <div className="mt-24 relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          <div className="relative z-10 p-16 text-white">
            <div className="grid md:grid-cols-3 gap-16 text-center">
              <div className="group">
                <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-red-500 via-brand-red to-red-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">4</div>
                <div className="text-2xl font-bold text-gray-300 tracking-wide">Teams</div>
              </div>
              <div className="group">
                <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-red-500 via-brand-red to-red-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-2xl font-bold text-gray-300 tracking-wide">Athleten</div>
              </div>
              <div className="group">
                <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-red-500 via-brand-red to-red-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">1</div>
                <div className="text-2xl font-bold text-gray-300 tracking-wide">Gemeinsames Ziel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
