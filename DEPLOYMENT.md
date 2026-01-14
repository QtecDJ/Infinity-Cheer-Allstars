# GitHub Pages Deployment

Dieses Projekt wird automatisch auf GitHub Pages deployed.

## Deployment Setup

### 1. Repository erstellen
```bash
git init
git add .
git commit -m "Initial commit: Infinity Cheer Allstars Website"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/infinity-cheer-allstars.git
git push -u origin main
```

### 2. GitHub Pages aktivieren
1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Einstellungen)
3. Klicke im linken Menü auf **Pages**
4. Bei **Source** wähle: **GitHub Actions**

### 3. Automatisches Deployment
- Jeder Push zum `main` Branch triggert automatisch ein Deployment
- Die Seite ist nach ca. 1-2 Minuten unter `https://DEIN-USERNAME.github.io/infinity-cheer-allstars/` verfügbar

## Lokales Testen

```bash
# Development Server
npm run dev

# Production Build lokal testen
npm run build
npm run preview
```

## Custom Domain (Optional)

1. Erstelle eine Datei `public/CNAME` mit deiner Domain:
```
www.infinity-cheer-allstars.de
```

2. Konfiguriere DNS bei deinem Domain-Provider:
- **A Record**: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **CNAME Record**: `DEIN-USERNAME.github.io`

3. Aktiviere in GitHub Settings > Pages > Custom domain

## Wichtige Dateien

- `.github/workflows/deploy.yml` - GitHub Actions Workflow
- `vite.config.ts` - Build-Konfiguration
- `.nojekyll` - Verhindert Jekyll-Processing

## Troubleshooting

**404 Fehler nach Deployment:**
- Stelle sicher, dass in `vite.config.ts` die richtige `base` gesetzt ist
- Überprüfe in GitHub Settings > Pages ob die Quelle auf "GitHub Actions" steht

**Workflow schlägt fehl:**
- Überprüfe Permissions in Settings > Actions > General > Workflow permissions
- Stelle sicher, dass "Read and write permissions" aktiviert ist
