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
    <section className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-brand-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-brand-black via-gray-800 to-brand-black bg-clip-text text-transparent">
              Dokumente & Infos
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-red to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Alle wichtigen Informationen, Regelwerke und Formulare auf einen Blick.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <div 
              key={index}
              onClick={() => openDocument(doc.url)}
              className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-brand-red transition-all duration-300 hover:shadow-2xl cursor-pointer group overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-red via-red-600 to-red-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-black text-brand-black group-hover:text-brand-red transition-colors">
                      {doc.title}
                    </h3>
                    <span className="text-xs font-black text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                      {doc.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {doc.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-red font-black group-hover:gap-4 transition-all">
                    <span>Öffnen</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="font-bold text-blue-900 mb-1">Hinweis</h4>
            <p className="text-blue-800 text-sm">
              Die PDFs öffnen sich in einem neuen Tab. Stelle sicher, dass dein Browser Pop-ups für diese Seite erlaubt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documents
