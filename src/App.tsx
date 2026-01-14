import Hero from './components/Hero'
import About from './components/About'
import Teams from './components/Teams'
import Achievements from './components/Achievements'
import Documents from './components/Documents'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Teams />
      <Achievements />
      <Documents />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
