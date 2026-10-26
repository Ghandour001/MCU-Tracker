# 🎬 MCU Universe Tracker

<p align="center">
  <img src="public/assets/icons8-avengers.svg" alt="MCU Universe Tracker Logo" width="90" height="90" />
</p>

<p align="center">
  <strong>A modern, zero-build Marvel Cinematic Universe and Legacy Marvel movie checklist.</strong><br>
  Track every film across the Multiverse with live stats, runtime calculations, and seamless Google Cloud synchronization.
</p>

<p align="center">
  <a href="https://mcu-tracker-4cfc3.web.app/"><img src="https://img.shields.io/badge/Live%20Demo-Firebase%20Hosting-e23636?style=for-the-badge&logo=firebase&logoColor=white" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/Vanilla%20JS-Zero%20Build-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-Dark_Mode-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Cloud%20Firestore-Synced-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firestore" />
</p>

---

## 🌟 Highlights & Features

- **🎞️ Complete 65-Film Universe Catalogue:**
  - **The Infinity Saga** (Phases 1–3: 23 movies from *Iron Man* to *Spider-Man: Far From Home*)
  - **The Legacy Era — Foundations of the Multiverse** (20 films across the Raimi/Webb *Spider-Man* series, classic *Fantastic Four*, and the Fox *X-Men* universe)
  - **The Multiverse Saga** (Phases 4–6: 17 movies from *Black Widow* through *Avengers: Secret Wars*)
  - **Future Releases** (5 announced future titles including *Black Panther 3*, *Armor Wars*, *Blade*, and upcoming mutant films)
- **📊 Real-Time Watch Progress & Runtime Calculator:**
  - Interactive visual cards with custom checkmark overlays and Marvel-red active borders.
  - Overall progress bar with percentage tracking.
  - Phase-by-phase / group-by-group counters (`X / Y Watched`).
  - Total watch-time calculator (`Xh Ym watched of Zh Zm`) automatically excluding unreleased ("TBD") titles.
- **☁️ Cloud Sync with Non-Destructive Guest Merge:**
  - Works immediately offline or as a guest using `localStorage`.
  - 1-Click **Google Sign-In** via Firebase Authentication (`signInWithPopup`).
  - **Smart Merge Algorithm:** Signing in merges your local guest progress with existing cloud data (movies marked in either source remain checked; your progress is never wiped).
- **🚀 Zero-Build & Maximum Speed:**
  - Single-page application requiring **zero npm build steps, compilers, or bundlers**.
  - Local, high-performance WebP posters (<80KB each) with `loading="lazy"`, explicit dimensions to prevent Cumulative Layout Shift (CLS), and immutable HTTP caching headers.
  - **100% Ad-Blocker Resilient:** Zero third-party placeholder dependencies. Built-in, self-contained SVG fallback handles unreleased films or offline states without getting blocked by Brave Shields or uBlock Origin.
- **🛡️ Hardened Security & Resilience:**
  - Production-ready Firestore Security Rules restricting read/write strictly to authenticated document owners (`users/{userId}`).
  - Dark-themed, non-blocking toast notifications for network/sync disruptions while keeping local state responsive.
- **🔍 SEO & Modern Web Standards:**
  - Semantic HTML with a static intro that renders instantly before JavaScript execution.
  - Structured JSON-LD `WebApplication` schema, Open Graph, and Twitter Cards.
  - Full `robots.txt`, `sitemap.xml`, and a themed 404 page (*"Lost in the Multiverse"*).

---

## 🧱 Project Architecture & File Tree

```text
MCU-Tracker/
├── .firebase/                      # Firebase CLI runtime cache
├── .firebaserc                     # Active Firebase project alias (mcu-tracker-4cfc3)
├── .gitignore                      # Git ignore file for logs, cache, and secrets
├── firebase.json                   # Hosting headers, rewrites, and Firestore rules configuration
├── firestore.rules                 # Cloud Firestore security rules
├── public/                         # Production assets deployed to Firebase Hosting
│   ├── 404.html                    # Dark-themed Marvel 404 page ("Lost in the Multiverse")
│   ├── index.html                  # Single-Page Application (HTML + Tailwind + Dataset + Firebase)
│   ├── robots.txt                  # Search engine crawler instructions pointing to sitemap
│   ├── sitemap.xml                 # XML sitemap with canonical domain and lastmod timestamps
│   ├── assets/
│   │   └── icons8-avengers.svg     # Avengers SVG favicon
│   └── images/
│       ├── *.webp                  # 59 optimized local WebP movie posters (<80KB each)
│       └── placeholder.svg         # Self-contained offline SVG placeholder
└── _backup/                        # Safe historical archive (preserves old datasets & original images)
    ├── index.root.old.html
    ├── mcuData.old.js
    └── images-original/
```

---

## 🗺️ Movie Catalog Breakdown

```
THE INFINITY SAGA (23 films)
  ├── Phase 1 — Avengers Assembled (6 films)
  ├── Phase 2 — Age of Miracles (6 films)
  └── Phase 3 — The Infinity War (11 films)

THE LEGACY ERA — FOUNDATIONS OF THE MULTIVERSE (20 films)
  ├── Spider-Man Series (5 films: Raimi Trilogy + The Amazing Spider-Man 1 & 2)
  ├── Fantastic Four (2 films: Story duology)
  └── X-Men Universe (13 films: X-Men, Wolverine Trilogy, Prequels, Deadpool 1 & 2, Logan, New Mutants)

THE MULTIVERSE SAGA (17 films)
  ├── Phase 4 — A New Universe (7 films)
  ├── Phase 5 — The Multiverse Saga Begins (6 films)
  └── Phase 6 — Climax of the Multiverse (4 films)

FUTURE FILMS — BEYOND THE MULTIVERSE (5 films)
  └── Upcoming Projects (Black Panther 3, Armor Wars, Blade, Shang-Chi 2, X-Men)
```

---

## ⚡ Tech Stack & Tools

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Frontend Core** | Vanilla JavaScript | ES6+ and ES Modules, zero compilation |
| **Styling** | Tailwind CSS | Tailwind Play CDN with custom Marvel theme extensions |
| **Typography** | Google Fonts | [Inter](https://fonts.google.com/specimen/Inter) (`wght@400;500;700;900`) |
| **Icons** | Font Awesome Free 6.4.0 | SVG/Webfont CDN |
| **Auth & Database** | Google Firebase v10.12.2 | Modular SDK (`firebase-auth`, `firebase-firestore`) |
| **Hosting & CDN** | Firebase Hosting | HTTP/2, global SSL, immutable asset caching |
| **Assets** | WebP & SVG | Pillow-compressed posters and zero-dependency SVG fallbacks |

---

## 🔒 Security & Data Model

### Cloud Firestore Schema
All user progress is stored under the `users` collection keyed by the authenticated user's Firebase Auth `UID`:

```json
// Collection: users/{userId}
{
  "progress": {
    "im1": true,
    "ih": false,
    "sm02": true,
    "logan": true
  }
}
```

### Security Rules (`firestore.rules`)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## 🛠️ How to Run Locally

Because this project is zero-build, no `npm install` or compilation step is required.

### Option 1: Python Static Server (Quickest)
```powershell
python -m http.server 5000 --directory public
```
Visit `http://localhost:5000` in your browser.

### Option 2: Node.js Serve
```powershell
npx serve public
```

### Option 3: Firebase Local Emulator
To test both Firebase Hosting and Firestore security rules locally:
```powershell
firebase emulators:start
```

---

## 🚀 Deployment

To deploy updates to Firebase Hosting and update Firestore rules:

```powershell
firebase deploy --only hosting,firestore:rules
```

Or deploy hosting only:
```powershell
firebase deploy --only hosting
```

---

## 💡 Configuration Guide

- **Live Canonical Domain:** Defined in [`public/index.html`](public/index.html) under the `SITE_DOMAIN` meta and script constant (`https://mcu-tracker-4cfc3.web.app/`). If you attach a custom domain in Firebase Hosting, simply update this URL in `public/index.html`, `public/robots.txt`, and `public/sitemap.xml`.
- **Firebase Credentials:** Configured directly in the ES module script in [`public/index.html`](public/index.html). Remember to authorize any custom domains in the **Firebase Console > Authentication > Settings > Authorized domains**.

---

## 📄 License

This project is open-source and intended for educational and personal entertainment purposes. All movie titles, character names, and poster artworks are trademarks and copyright of Marvel Studios, Sony Pictures, 20th Century Studios, and their respective owners.
