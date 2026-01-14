import { motion, AnimatePresence } from 'framer-motion'
import { Settings, X, Eye, Type, Contrast, Zap, Focus } from 'lucide-react'
import { useState, useEffect } from 'react'

interface AccessibilitySettings {
  reduceMotion: boolean
  increaseFontSize: boolean
  highContrast: boolean
  removeAnimations: boolean
  enhanceFocus: boolean
}

const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('accessibilitySettings')
    return saved ? JSON.parse(saved) : {
      reduceMotion: false,
      increaseFontSize: false,
      highContrast: false,
      removeAnimations: false,
      enhanceFocus: false
    }
  })

  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings))
    
    // Apply settings to document
    if (settings.reduceMotion) {
      document.documentElement.classList.add('reduce-motion')
    } else {
      document.documentElement.classList.remove('reduce-motion')
    }

    if (settings.increaseFontSize) {
      document.documentElement.classList.add('large-text')
    } else {
      document.documentElement.classList.remove('large-text')
    }

    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }

    if (settings.removeAnimations) {
      document.documentElement.classList.add('no-animations')
    } else {
      document.documentElement.classList.remove('no-animations')
    }

    if (settings.enhanceFocus) {
      document.documentElement.classList.add('enhanced-focus')
    } else {
      document.documentElement.classList.remove('enhanced-focus')
    }
  }, [settings])

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const resetSettings = () => {
    const defaultSettings = {
      reduceMotion: false,
      increaseFontSize: false,
      highContrast: false,
      removeAnimations: false,
      enhanceFocus: false
    }
    setSettings(defaultSettings)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-4 md:bottom-32 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-black border-4 border-brand-red flex items-center justify-center shadow-2xl z-40 hover:bg-brand-red transition-colors"
        aria-label="Barrierefreiheits-Einstellungen öffnen"
        title="Barrierefreiheits-Einstellungen"
      >
        <Settings className="text-white" size={24} strokeWidth={2.5} />
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="sticky top-0 bg-brand-red border-b-8 border-black p-6 z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    Barrierefreiheit
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-black hover:border-white transition-colors"
                    aria-label="Schließen"
                  >
                    <X className="text-brand-red" size={24} strokeWidth={3} />
                  </button>
                </div>
                <p className="text-white font-bold mt-2 text-sm">
                  Passen Sie die Website an Ihre Bedürfnisse an
                </p>
              </div>

              <div className="p-6 space-y-6">
                {/* Reduce Motion */}
                <div className="border-4 border-black p-4 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black border-2 border-brand-red flex items-center justify-center flex-shrink-0">
                      <Zap className="text-brand-red" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-black uppercase mb-2">
                        Bewegungen reduzieren
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Reduziert Scroll-basierte Animationen
                      </p>
                      <button
                        onClick={() => toggleSetting('reduceMotion')}
                        className={`px-6 py-2 font-black uppercase text-sm tracking-wider transition-colors border-4 ${
                          settings.reduceMotion
                            ? 'bg-brand-red text-white border-black'
                            : 'bg-white text-black border-black hover:bg-gray-100'
                        }`}
                      >
                        {settings.reduceMotion ? 'Aktiviert' : 'Deaktiviert'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove Animations */}
                <div className="border-4 border-black p-4 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black border-2 border-brand-red flex items-center justify-center flex-shrink-0">
                      <Eye className="text-brand-red" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-black uppercase mb-2">
                        Alle Animationen entfernen
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Deaktiviert alle Bewegungseffekte komplett
                      </p>
                      <button
                        onClick={() => toggleSetting('removeAnimations')}
                        className={`px-6 py-2 font-black uppercase text-sm tracking-wider transition-colors border-4 ${
                          settings.removeAnimations
                            ? 'bg-brand-red text-white border-black'
                            : 'bg-white text-black border-black hover:bg-gray-100'
                        }`}
                      >
                        {settings.removeAnimations ? 'Aktiviert' : 'Deaktiviert'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Font Size */}
                <div className="border-4 border-black p-4 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black border-2 border-brand-red flex items-center justify-center flex-shrink-0">
                      <Type className="text-brand-red" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-black uppercase mb-2">
                        Große Schrift
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Erhöht die Schriftgröße um 20%
                      </p>
                      <button
                        onClick={() => toggleSetting('increaseFontSize')}
                        className={`px-6 py-2 font-black uppercase text-sm tracking-wider transition-colors border-4 ${
                          settings.increaseFontSize
                            ? 'bg-brand-red text-white border-black'
                            : 'bg-white text-black border-black hover:bg-gray-100'
                        }`}
                      >
                        {settings.increaseFontSize ? 'Aktiviert' : 'Deaktiviert'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* High Contrast */}
                <div className="border-4 border-black p-4 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black border-2 border-brand-red flex items-center justify-center flex-shrink-0">
                      <Contrast className="text-brand-red" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-black uppercase mb-2">
                        Hoher Kontrast
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Verstärkt Farbkontraste für bessere Lesbarkeit
                      </p>
                      <button
                        onClick={() => toggleSetting('highContrast')}
                        className={`px-6 py-2 font-black uppercase text-sm tracking-wider transition-colors border-4 ${
                          settings.highContrast
                            ? 'bg-brand-red text-white border-black'
                            : 'bg-white text-black border-black hover:bg-gray-100'
                        }`}
                      >
                        {settings.highContrast ? 'Aktiviert' : 'Deaktiviert'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Focus */}
                <div className="border-4 border-black p-4 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black border-2 border-brand-red flex items-center justify-center flex-shrink-0">
                      <Focus className="text-brand-red" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-black uppercase mb-2">
                        Fokus-Hervorhebung
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Deutlichere Markierung bei Tastaturnavigation
                      </p>
                      <button
                        onClick={() => toggleSetting('enhanceFocus')}
                        className={`px-6 py-2 font-black uppercase text-sm tracking-wider transition-colors border-4 ${
                          settings.enhanceFocus
                            ? 'bg-brand-red text-white border-black'
                            : 'bg-white text-black border-black hover:bg-gray-100'
                        }`}
                      >
                        {settings.enhanceFocus ? 'Aktiviert' : 'Deaktiviert'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <div className="pt-6 border-t-4 border-gray-300">
                  <button
                    onClick={resetSettings}
                    className="w-full px-6 py-4 bg-gray-900 text-white font-black uppercase text-sm tracking-wider border-4 border-black hover:bg-black transition-colors"
                  >
                    Alle Einstellungen zurücksetzen
                  </button>
                </div>

                {/* Info */}
                <div className="bg-blue-50 border-4 border-blue-300 p-4">
                  <p className="text-sm text-blue-900 font-semibold">
                    💡 Diese Einstellungen werden in Ihrem Browser gespeichert und bleiben auch nach dem Schließen der Seite erhalten.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default AccessibilityPanel
