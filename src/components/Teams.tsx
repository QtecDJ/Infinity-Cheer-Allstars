import { motion } from 'framer-motion'
import { Trophy, Crown, Flame, Star } from 'lucide-react'

interface TeamCardProps {
  name: string;
  category: string;
  ageGroup: string;
  description: string;
  focus: string;
  icon: React.ReactNode;
  colorAccent: string;
}

const TeamCard = ({ name, category, ageGroup, description, focus, icon, colorAccent }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white border-8 border-black shadow-2xl overflow-hidden group"
    >
      {/* Team Color Stripe */}
      <div className={`h-6 ${colorAccent}`}></div>
      
      <div className="p-10">
        {/* Icon */}
        <div className="w-24 h-24 bg-black border-4 border-brand-red mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
          {icon}
        </div>
        
        {/* Team Name */}
        <h3 className="text-4xl md:text-5xl font-black text-black mb-2 uppercase tracking-tight text-center" style={{
          textShadow: '3px 3px 0 #DC2626'
        }}>{name}</h3>
        
        {/* Category Badge */}
        <div className="inline-block bg-black border-4 border-brand-red px-6 py-2 mx-auto mb-6">
          <span className="text-xl font-black text-brand-red uppercase tracking-wider">{category}</span>
        </div>
        
        {/* Age Group */}
        <div className="mb-6 text-center">
          <span className="inline-block bg-gray-900 text-white px-5 py-2 font-bold uppercase tracking-wide text-sm border-4 border-black">
            {ageGroup}
          </span>
        </div>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>
        
        {/* Description */}
        <p className="text-gray-800 font-semibold leading-relaxed text-center mb-6">
          {description}
        </p>
        
        {/* Focus */}
        <div className="pt-6 border-t-4 border-black">
          <div className="flex items-center justify-center gap-3">
            <Trophy className="text-brand-red" size={20} strokeWidth={3} />
            <p className="text-base font-black text-brand-red uppercase tracking-wider">
              {focus}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
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
      colorAccent: 'bg-yellow-400',
      icon: <Star className="text-brand-red" size={48} strokeWidth={2.5} />
    },
    {
      name: 'Princesses',
      category: 'Primary',
      ageGroup: '9-11 Jahre',
      description: 'Mit wachsender Erfahrung und gesteigertem Ehrgeiz arbeiten die Princesses an komplexeren Routinen. Hier werden aus Talenten echte Athletinnen, die auf Meisterschaften glänzen.',
      focus: 'Meisterschaftsvorbereitung',
      colorAccent: 'bg-pink-400',
      icon: <Crown className="text-brand-red" size={48} strokeWidth={2.5} />
    },
    {
      name: 'Divas',
      category: 'Youth',
      ageGroup: '12-15 Jahre',
      description: 'Power, Präzision und Performance – die Divas zeigen, was sie drauf haben. Mit professionellem Training und starkem Teamzusammenhalt gehen sie selbstbewusst in jeden Wettkampf.',
      focus: 'Meisterschaftsteilnahme',
      colorAccent: 'bg-purple-500',
      icon: <Flame className="text-brand-red" size={48} strokeWidth={2.5} />
    },
    {
      name: 'Kings & Queens',
      category: 'Senior',
      ageGroup: 'ab 16 Jahre',
      description: 'Unser Elite-Team vereint Erfahrung, Athletik und Showmanship auf höchstem Niveau. Die Kings & Queens sind bereit für nationale Meisterschaften und verkörpern, was Infinity bedeutet.',
      focus: 'Nationale Meisterschaften',
      colorAccent: 'bg-brand-red',
      icon: <Trophy className="text-brand-red" size={48} strokeWidth={2.5} fill="currentColor" />
    }
  ]

  return (
    <section id="teams" className="relative py-32 bg-gray-100">
      {/* Diagonal Accent */}
      <div className="absolute top-0 left-0 w-full h-24 bg-black transform -skew-y-2 origin-top-left"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-brand-red border-8 border-black px-10 py-4 mb-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-widest">Our Teams</h2>
          </div>
          <h3 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tight mb-6" style={{
            textShadow: '4px 4px 0 #DC2626'
          }}>
            Unsere Teams
          </h3>
          <div className="w-32 h-2 bg-black mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto font-bold uppercase leading-relaxed">
            Von den jüngsten Talenten bis zu unseren Elite-Athleten
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {teams.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams
