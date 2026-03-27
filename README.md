# 🎬 TikTok Player — Harshith

> A TikTok-style vertical video player built with **React 18 + Vite** for the **Kamao.ai React Intern Technical Assessment (March 2026).**

This app replicates the core TikTok experience — full-screen vertical video feed, smooth scroll snapping, interactive overlays, and polished animations — all built **from scratch** without any external video libraries.

---
## 📦 Large File Handling (Git LFS)

This project includes video assets (`.mp4`) that are managed using **Git LFS (Large File Storage)** to maintain repository performance and avoid GitHub file size limitations.

### 🔧 Why Git LFS?

* Standard Git is not optimized for large binary files
* GitHub has a 100MB file size limit for regular Git tracking
* Git LFS replaces large files with lightweight pointers and stores actual files separately

### 🚀 How it works

* All `.mp4` files are tracked via Git LFS
* When you clone the repository, Git LFS automatically downloads the actual video files

### 📥 Setup Instructions (Important)

Make sure Git LFS is installed before cloning:

```id="9rj2oe"
git lfs install
git clone <repo-url>
```

If videos do not load, run:

```id="d6g4xn"
git lfs pull
```

### ⚠️ Note

* Without Git LFS installed, only pointer files will be downloaded instead of actual videos
* Ensure proper setup to experience full functionality of the application

## 🎥 Video Demo

👉 **[Watch Demo on Loom](https://www.loom.com/share/c8709bcd46194444893faaa74fbced90)**

---
<img width="1918" height="1116" alt="Screenshot 2026-03-27 164546" src="https://github.com/user-attachments/assets/685a271e-2c4c-421e-ba27-76ca6c821ee5" />
<img width="1919" height="1129" alt="Screenshot 2026-03-27 164559" src="https://github.com/user-attachments/assets/0e35bba2-3dea-4e72-b452-969ed0306719" />
<img width="1919" height="1130" alt="Screenshot 2026-03-27 164620" src="https://github.com/user-attachments/assets/1680f584-f8a4-46fe-9112-e828bf6926d9" />
<img width="1918" height="1102" alt="Screenshot 2026-03-27 164634" src="https://github.com/user-attachments/assets/31c7e4ed-8529-4df8-a45e-143dd3aed163" />

## ⚡ Quick Start
```bash
npm install && npm run dev
```

Open → **http://localhost:5173**



## ✅ Features Implemented

### Core Features — All Required ✅

| Feature | Status |
|--------|--------|
| Full-screen vertical layout (one video per viewport) | ✅ |
| Smooth scroll-snap navigation (up = next, down = previous) | ✅ |
| 5 sample videos (travel, sports, cinematic) | ✅ |
| Infinite loop — after last video loops back to first | ✅ |
| Auto-play when video scrolls into view | ✅ |
| Auto-pause when video scrolls away | ✅ |
| Tap to play/pause with fade-out icon overlay (~1 second) | ✅ |
| Progress bar showing elapsed time at bottom | ✅ |
| Like ❤️ with count + tap animation | ✅ |
| Comment 💬 with count | ✅ |
| Share ↗️ with count | ✅ |
| Bookmark 🔖 | ✅ |
| Username + description overlay at bottom-left | ✅ |
| Description truncated to 2 lines with 'more' expand | ✅ |
| Spinning music disc at bottom-right | ✅ |
| Mute / Unmute sound toggle | ✅ |

### Bonus Features — All Optional ✅

| Feature | Status |
|--------|--------|
| Double-tap to like — large heart animation in center | ✅ |
| Follow / Following toggle on user avatar | ✅ |
| Long-press to pause, release to resume | ✅ |
| Video loading skeleton (shimmer effect while buffering) | ✅ |
| Keyboard navigation — Arrow Up/Down + Space | ✅ |
| Dark mode / Light mode toggle | ✅ |
| Responsive design — mobile (375×812) + desktop | ✅ |

---

## 🏗️ Project Structure
```
tiktok-player-harshith/
├── public/
│   └── videos/              → Sample video files
├── src/
│   ├── components/
│   │   ├── VideoCard.jsx    → Main video + all overlays
│   │   ├── ActionBar.jsx    → Like, Comment, Share, Bookmark
│   │   ├── UserInfo.jsx     → Username + description
│   │   └── MusicDisc.jsx   → Spinning music disc
│   ├── data/
│   │   └── videos.js       → Sample video data array
│   ├── App.jsx             → Main feed + keyboard navigation
│   ├── index.css           → All global styles
│   └── main.jsx            → React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI — functional components + hooks only |
| **Vite** | Build tool — fast HMR and dev server |
| **Plain CSS** | Styling — full control, no UI libraries |
| **HTML5 `<video>`** | Native video — no react-player or video.js |
| **IntersectionObserver** | Detect which video is visible |
| **useState + useRef + useEffect** | State and lifecycle management |

---

## 🔧 Tech Choices & Rationale

**Why Vite?**
Faster startup and HMR compared to CRA — critical for tight deadlines.

**Why Plain CSS over Tailwind?**
Full control over custom animations (spinning disc, heart pop, shimmer skeleton) without needing a compiler setup.

**Why IntersectionObserver?**
Most performant way to detect viewport visibility — runs off main thread, no scroll event jank.

**Why scroll-snap-type: y mandatory?**
Native CSS snapping is hardware-accelerated and gives buttery smooth transitions without JavaScript animation logic.

**Why useRef for video elements?**
Direct DOM access avoids unnecessary re-renders when calling `.play()` and `.pause()`.

---

## ⚙️ How Key Features Work

**Auto-play / Auto-pause**
Each VideoCard uses IntersectionObserver with `threshold: 0.7` — video plays only when 70% visible, pauses when it leaves view.

**Double-tap to Like**
A tap counter with 250ms timer distinguishes single tap (play/pause) from double tap (like animation).

**Long-press to Pause**
`onMouseDown` starts a 500ms timer — if held longer, video pauses. `onMouseUp` resumes playback.

**Infinite Loop**
Modulo arithmetic on currentIndex:
- Next: `(currentIndex + 1) % videos.length`
- Previous: `(currentIndex - 1 + videos.length) % videos.length`

**Keyboard Navigation**
Global `keydown` listener:
- `ArrowDown` → next video
- `ArrowUp` → previous video
- `Space` → play/pause

---

## ⚠️ Known Limitations

- Stock videos may not include audio — mute/unmute button works correctly
- On desktop, app is centered with max-width for mobile-first experience
- Comment and Share buttons show counts but don't open modals (out of scope)

---

## 👨‍💻 Author

**Harshith**
React Developer Intern Candidate — Kamao.ai Assessment — March 2026
