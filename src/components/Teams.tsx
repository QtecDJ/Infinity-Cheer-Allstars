interface TeamCardProps {
  name: string;
  category: string;
  ageGroup: string;
  description: string;
  focus: string;
  icon: React.ReactNode;
}

const TeamCard = ({ name, category, ageGroup, description, focus, icon }: TeamCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden group relative">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-red-600 to-red-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-brand-red via-red-600 to-red-700 p-10 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl">
            {icon}
          </div>
          <h3 className="text-4xl font-black mb-2 tracking-tight">{name}</h3>
          <p className="text-red-100 text-sm font-bold uppercase tracking-wider">{category}</p>
        </div>
      </div>
      
      <div className="p-8 relative">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-50 text-brand-black px-5 py-2.5 rounded-full text-sm font-black uppercase tracking-wide shadow-sm border border-gray-200">
            {ageGroup}
          </span>
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          {description}
        </p>
        
        <div className="pt-6 border-t-2 border-gray-100 flex items-center gap-2">
          <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
          <p className="text-sm font-black text-brand-red uppercase tracking-wide">
            {focus}
          </p>
        </div>
      </div>
    </div>
  )
}

const Teams = () => {
  const teams = [
    {
      name: 'Sparkles',
      category: 'Minis',
      ageGroup: 'bis 8 Jahre',
      description: 'Unsere jüngsten Stars lernen spielerisch die Grundlagen des Cheerleadings. Mit viel Freude und Energie bauen wir hier die Basis für eine erfolgreiche Cheerleading-Karriere auf.',
      focus: 'Aufbau & Grundtechnik',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'Princesses',
      category: 'Primary',
      ageGroup: '9-11 Jahre',
      description: 'Mit wachsender Erfahrung und gesteigertem Ehrgeiz arbeiten die Princesses an komplexeren Routinen. Hier werden aus Talenten echte Athletinnen, die auf Meisterschaften glänzen.',
      focus: 'Meisterschaftsvorbereitung',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      name: 'Divas',
      category: 'Youth',
      ageGroup: '12-15 Jahre',
      description: 'Power, Präzision und Performance – die Divas zeigen, was sie drauf haben. Mit professionellem Training und starkem Teamzusammenhalt gehen sie selbstbewusst in jeden Wettkampf.',
      focus: 'Meisterschaftsteilnahme',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'Kings & Queens',
      category: 'Senior',
      ageGroup: 'ab 16 Jahre',
      description: 'Unser Elite-Team vereint Erfahrung, Athletik und Showmanship auf höchstem Niveau. Die Kings & Queens sind bereit für nationale Meisterschaften und verkörpern, was Infinity bedeutet.',
      focus: 'Nationale Meisterschaften',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ]

  return (
    <section id="teams" className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-brand-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-brand-black via-gray-800 to-brand-black bg-clip-text text-transparent">
              Unsere Teams
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-red to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Von den jüngsten Talenten bis zu unseren Elite-Athleten – jedes Team hat seine eigene Stärke 
            und trägt zum Erfolg der Infinity Cheer Allstars bei.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams
