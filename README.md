# Marque Brands — React Website

A single-page React website for Marque Brands — A Digital Transformation Fleet.

---

## 📁 Project Structure

```
marque-brands/
├── public/
│   └── index.html
├── src/
│   ├── index.js              ← Entry point
│   ├── App.js                ← Root component (imports all sections)
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Ticker.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── TrackRecord.js
│   │   ├── Technologies.js
│   │   ├── Clients.js
│   │   ├── RevenueModel.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   └── styles/
│       ├── global.css        ← Shared variables, animations, base styles
│       ├── Navbar.css
│       ├── Hero.css
│       ├── Ticker.css
│       ├── About.css
│       ├── Services.css
│       ├── TrackRecord.css
│       ├── Technologies.css
│       ├── Clients.css
│       ├── RevenueModel.css
│       ├── Contact.css
│       └── Footer.css
└── package.json
```

---

## 🚀 Run Locally

```bash
npm install
npm start
```
Opens at http://localhost:3000

---

## 🏗️ Build for Production

```bash
npm run build
```
Creates a `build/` folder — ready to deploy.

---

## ☁️ Deploy — Netlify (FREE, Recommended)

**Option A — Drag & Drop:**
1. Run `npm run build`
2. Go to https://app.netlify.com
3. Drag the `build/` folder onto the dashboard
4. Done! Live in 30 seconds.

**Option B — GitHub + Netlify:**
1. Push this repo to GitHub
2. Connect repo on Netlify
3. Build command: `npm run build`
4. Publish directory: `build`
5. Deploy!

---

## ☁️ Deploy — Vercel

```bash
npm install -g vercel
vercel
```
Follow the prompts. Done!

---

## ✏️ Edit Content

Each section has its own file:
- Change services → `src/components/Services.js`
- Change client brands → `src/components/Clients.js`
- Change contact info → `src/components/Contact.js`
- Change colors → `src/styles/global.css` (`:root` variables)
