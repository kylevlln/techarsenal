# 🖥️ Chocified's Space 

> *A curated, premium look into my personal setup, hardware specifications, and the tools I rely on as a daily baller.*

---

## 📌 Overview

**Chocified's Space** is a personal, single-page workspace showcase website built with vanilla HTML, CSS, and JavaScript. It's designed to feel premium and immersive — featuring a cinematic boot sequence, background music, smooth scroll animations, and a fully interactive UI that presents my PC build, peripherals, tech stack, and games.

No frameworks. No dependencies. Just raw web tech done right.

---

## ✨ Features

### 🎬 Boot Sequence
- Full-screen GIF overlay with a glitching **"HONORABLE"** title reveal
- Click-to-enter interaction with ambient background music (BIA - We On Go)
- Cinematic zoom-out transition into the main site
- Music loops and re-triggers the **HONORABLE** flash on each restart

### 🧭 Navigation
- Sticky glassmorphism navbar with smooth scroll to sections
- **Secret easter egg**: Click **"Chocified"** in the top-left to mute/unmute the music — hover to reveal the hint

### 🖥️ Core Hardware (Section 01)
Clickable bento-grid cards linking to Amazon listings for each component:
- CPU: AMD Ryzen 7 5700X
- GPU: AMD Radeon RX 6600
- RAM: 16GB DDR4 3200MHz
- Storage: 4TB NVMe SSD (PCIe Gen 4)
- Motherboard: MSI B550M PRO-VDH WIFI
- Chassis: iONZ KZ-X1 (White)

### 🎮 The Peripherals (Section 02)
Clickable peripheral cards with real product images and store links:
- ⌨️ Razer Huntsman Mini v3 → Razer Store
- 🖱️ Royal Kludge M3 → Shopee PH
- 🖥️ KOORUI 27" 240Hz → Amazon
- 🎧 HyperX Cloud III S Wireless → HyperX Store
- 💻 ASUS TUF Gaming A15 → ASUS Store
- 📱 iPhone 11 → CompAsia PH

### 🛠️ Technical Arsenal (Section 03)
Animated tech stack grid, each icon links to its official site:
`JavaScript` · `TypeScript` · `React` · `Next.js` · `Node.js` · `Python` · `PostgreSQL` · `Git`

### 🎮 Games I Play (Section 04)
Auto-scrolling infinite ticker of game cover art — pauses on hover, each card lifts and glows in gold.

### 🤝 Initiate Handshake (Footer)
Social links styled as interactive pill buttons:
- **Discord**: @bastachoc
- **Roblox**: @LegalizeSlaughter

---

## 🗂️ Project Structure

```
DC/
├── index.html          # Main page structure
├── index.css           # All styles (design system, animations, layout)
├── script.js           # Boot sequence, scroll animations, mute easter egg
├── maki.gif            # Boot screen / hero portrait GIF
├── BIA - WE ON GO (Official Audio).mp3   # Background music
│
├── # Peripheral Images
├── image-removebg-preview.png  # Razer Huntsman Mini v3
├── rkm3.png            # Royal Kludge M3
├── koorui.png          # KOORUI 27" Monitor
├── hyperx.png          # HyperX Cloud III S Wireless
├── asustuf.png         # ASUS TUF Gaming A15
├── ip11.png            # iPhone 11
│
└── # Game Cover Art
    ├── valorant.png · cs.png · eldenring.png · 2077.png
    ├── osu.png · gh.png · dota.png · mlbb.png
    ├── codm.png · warzone.png
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` |
| Elevated BG | `#121212` |
| Foreground | `#f5f5f5` |
| Gold Accent | `#d4af37` |
| Border | `rgba(255,255,255,0.08)` |
| Font (Sans) | Inter |
| Font (Serif) | Playfair Display |

---

## 🚀 Running Locally

No build step required. Just open `index.html` in your browser.

```bash
# Option 1 — Direct open
start index.html

# Option 2 — With a local dev server (recommended for audio autoplay)
npx serve .
# or
python -m http.server 8080
```

> **Note:** Browsers block audio autoplay without user interaction — the boot screen click handles this correctly.

---

## 🐣 Easter Eggs

- **Chocified** (top-left nav) → hover to reveal, click to mute/unmute music
- Music loops and flashes the **HONORABLE** screen on each restart

---

## 📄 License

Personal project — not for redistribution. All hardware/game images and music belong to their respective owners.
