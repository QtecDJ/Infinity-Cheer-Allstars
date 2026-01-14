# Infinity Cheer Allstars - Website

Eine moderne, professionelle Frontend-Webseite für das Cheerleading-Team "Infinity Cheer Allstars".

## 🚀 Tech-Stack

- **React 18** mit TypeScript
- **Vite** als Build-Tool
- **Tailwind CSS** für Styling
- Keine externen APIs oder Backend
- Static Hosting ready (z.B. GitHub Pages)

## 🎨 Design

- **Farben**: Rot (#DC2626), Schwarz (#0A0A0A), Weiß
- **Stil**: Modern, kraftvoll, sportlich
- **UI**: Abgerundete Cards, sanfte Schatten, dezente Animationen
- **Mobile First** Responsive Design

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Build preview
npm run preview
```

## 🏗️ Projektstruktur

```
src/
├── components/
│   ├── Hero.tsx              # Hero Section mit CTA
│   ├── About.tsx             # Über uns Section
│   ├── Teams.tsx             # Team Cards (4 Teams)
│   ├── Achievements.tsx      # Erfolge & Statistiken
│   ├── Documents.tsx         # PDF Dokumente Section
│   ├── CallToAction.tsx      # Kontakt CTA
│   ├── Footer.tsx            # Footer mit Social Links
│   └── Button.tsx            # Wiederverwendbare Button-Komponente
├── App.tsx                   # Haupt-App-Komponente
├── main.tsx                  # Entry Point
└── index.css                 # Globale Styles & Tailwind
```

## 🎯 Features

### Sections
1. **Hero Section** - Große Headline mit Call-to-Action
2. **Über uns** - Emotionaler Text über Teamgeist
3. **Teams** - 4 Team-Cards (Sparkles, Princesses, Divas, Kings & Queens)
4. **Erfolge** - Wettbewerbe, Events, Statistiken
5. **Dokumente** - PDF-Links (Regelwerke, Formulare)
6. **Call to Action** - Kontaktmöglichkeiten
7. **Footer** - Social Media, Impressum, Scroll-to-Top

### Technische Features
- ✅ TypeScript für Type Safety
- ✅ Wiederverwendbare Komponenten
- ✅ Smooth Scroll Navigation
- ✅ Hover Animationen
- ✅ Mobile Responsive
- ✅ Accessibility Features
- ✅ SEO-optimiert (Meta Tags)

## 🎨 Tailwind Konfiguration

Benutzerdefinierte Brand-Farben:
```js
colors: {
  brand: {
    red: '#DC2626',
    black: '#0A0A0A',
    gray: '#1A1A1A',
  }
}
```

## 📱 Responsive Design

- Mobile First Approach
- Breakpoints: sm, md, lg
- Flexible Grid Layouts
- Optimierte Touch Targets

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# dist/ Ordner deployen
```

### Netlify / Vercel
- Einfach Repository verbinden
- Build Command: `npm run build`
- Output Directory: `dist`

## 📝 Anpassungen

### Teams anpassen
Bearbeite `src/components/Teams.tsx` und passe das `teams` Array an.

### Dokumente hinzufügen
Bearbeite `src/components/Documents.tsx` und füge neue Einträge zum `documents` Array hinzu.

### Farben ändern
Bearbeite `tailwind.config.js` für Brand-Farben.

## 🤝 Contributing

Diese Webseite ist production-ready und kann direkt eingesetzt werden.

## 📄 Lizenz

© 2026 Infinity Cheer Allstars. Alle Rechte vorbehalten.
