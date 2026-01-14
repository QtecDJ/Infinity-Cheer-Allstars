import Hero from './components/Hero'
import About from './components/About'
import TeamApp from './components/TeamApp'
import Teams from './components/Teams'
import Achievements from './components/Achievements'
import Documents from './components/Documents'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import AccessibilityPanel from './components/AccessibilityPanel'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <TeamApp />
      <Teams />
      <Achievements />
      <Documents />
      <CallToAction />
      <Footer />
      <AccessibilityPanel />
    </div>
  )
}

export default App
