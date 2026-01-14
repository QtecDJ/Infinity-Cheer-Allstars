const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-brand-black mb-6">
            Über uns
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-200 overflow-hidden">
            {/* Dezenter Hintergrund-Effekt */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8 font-medium">
                Die <span className="font-black text-brand-red bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Infinity Cheer Allstars</span> sind mehr als nur ein Team – 
                wir sind eine <span className="font-bold text-brand-black">Familie</span>, die gemeinsam an einem Ziel arbeitet.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                Mit Leidenschaft, Disziplin und unerschütterlichem Teamgeist trainieren wir für nationale 
                Meisterschaften und entwickeln uns kontinuierlich weiter. Jedes Mitglied bringt seine individuelle 
                Stärke ein – gemeinsam sind wir unaufhaltbar.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-brand-red transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-xl text-brand-black mb-2">Teamgeist</h3>
                  <p className="text-gray-600 font-medium">Zusammen sind wir stärker</p>
                </div>

                <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-brand-red transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-xl text-brand-black mb-2">Energie</h3>
                  <p className="text-gray-600 font-medium">Mit voller Kraft voraus</p>
                </div>

                <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-brand-red transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-xl text-brand-black mb-2">Exzellenz</h3>
                  <p className="text-gray-600 font-medium">Streben nach Perfektion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
