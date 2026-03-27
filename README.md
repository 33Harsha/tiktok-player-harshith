🎬 TikTok Player - Harshith
A TikTok-style vertical video player built with React 18 + Vite as part of the Kamao.ai React Intern Technical Assessment (March 2026).

This app replicates the core TikTok experience — full-screen vertical video feed, smooth scroll snapping, interactive overlays, and polished animations — all built from scratch without any external video libraries.

Video Demo: https://www.loom.com/share/c8709bcd46194444893faaa74fbced90

🚀 Quick Start
Run the entire app with a single command:

npm install && npm run dev
Then open your browser at:

http://localhost:5173

🎥 Demo & Screenshots
Video Demo: https://www.loom.com/share/c8709bcd46194444893faaa74fbced90

Mobile View (375x812):

Test on Chrome DevTools → Press Ctrl + Shift + M → Select iPhone 12 Pro

✅ Features Implemented
Core Features (All Required Features ✅)
Feature	Status
Full-screen vertical layout (one video per viewport)	✅ Done
Smooth scroll-snap navigation (up = next, down = previous)	✅ Done
5 sample videos (travel, sports, cinematic)	✅ Done
Infinite loop — after last video loops back to first	✅ Done
Auto-play when video scrolls into view	✅ Done
Auto-pause when video scrolls away	✅ Done
Tap to play/pause with fade-out icon overlay	✅ Done
Progress bar showing elapsed time at bottom	✅ Done
Like ❤️ button with count + tap animation	✅ Done
Comment 💬 button with count	✅ Done
Share ↗️ button with count	✅ Done
Bookmark 🔖 button	✅ Done
Username + description overlay at bottom-left	✅ Done
Description truncated to 2 lines with 'more' expand	✅ Done
Spinning music disc at bottom-right	✅ Done
Mute / Unmute sound toggle button	✅ Done
Bonus Features (All Optional Features ✅)
Feature	Status
Double-tap to like — large heart animation in center	✅ Done
Follow / Following toggle button on user avatar	✅ Done
Long-press to pause, release to resume	✅ Done
Video loading skeleton (shimmer effect while buffering)	✅ Done
Keyboard navigation — Arrow Up/Down to scroll, Space to play/pause	✅ Done
Dark mode / Light mode toggle	✅ Done
Responsive design — works on mobile (375x812) and desktop	✅ Done
🏗️ Project Structure

**Video Demo:** https://www.loom.com/share/c8709bcd46194444893faaa74fbced90

**Mobile View (375x812):**
> Test on Chrome DevTools → Press `Ctrl + Shift + M` → Select iPhone 12 Pro
<img width="1918" height="1116" alt="Screenshot 2026-03-27 164546" src="https://github.com/user-attachments/assets/685a271e-2c4c-421e-ba27-76ca6c821ee5" />
<img width="1919" height="1129" alt="Screenshot 2026-03-27 164559" src="https://github.com/user-attachments/assets/0e35bba2-3dea-4e72-b452-969ed0306719" />
<img width="1919" height="1130" alt="Screenshot 2026-03-27 164620" src="https://github.com/user-attachments/assets/1680f584-f8a4-46fe-9112-e828bf6926d9" />
<img width="1918" height="1102" alt="Screenshot 2026-03-27 164634" src="https://github.com/user-attachments/assets/31c7e4ed-8529-4df8-a45e-143dd3aed163" />



## ✅ Features Implemented

### Core Features (All Required Features ✅)

| Feature | Status |
|--------|--------|
| Full-screen vertical layout (one video per viewport) | ✅ Done |
| Smooth scroll-snap navigation (up = next, down = previous) | ✅ Done |
| 5 sample videos (travel, sports, cinematic) | ✅ Done |
| Infinite loop — after last video loops back to first | ✅ Done |
| Auto-play when video scrolls into view | ✅ Done |
| Auto-pause when video scrolls away | ✅ Done |
| Tap to play/pause with fade-out icon overlay | ✅ Done |
| Progress bar showing elapsed time at bottom | ✅ Done |
| Like ❤️ button with count + tap animation | ✅ Done |
| Comment 💬 button with count | ✅ Done |
| Share ↗️ button with count | ✅ Done |
| Bookmark 🔖 button | ✅ Done |
| Username + description overlay at bottom-left | ✅ Done |
| Description truncated to 2 lines with 'more' expand | ✅ Done |
| Spinning music disc at bottom-right | ✅ Done |
| Mute / Unmute sound toggle button | ✅ Done |

### Bonus Features (All Optional Features ✅)

| Feature | Status |
|--------|--------|
| Double-tap to like — large heart animation in center | ✅ Done |
| Follow / Following toggle button on user avatar | ✅ Done |
| Long-press to pause, release to resume | ✅ Done |
| Video loading skeleton (shimmer effect while buffering) | ✅ Done |
| Keyboard navigation — Arrow Up/Down to scroll, Space to play/pause | ✅ Done |
| Dark mode / Light mode toggle | ✅ Done |
| Responsive design — works on mobile (375x812) and desktop | ✅ Done |


## 🏗️ Project Structure

tiktok-player-harshith/
├── public/
│   └── videos/
│       ├── places.mp4.mp4       → Switzerland travel video 1
│       ├── places1.mp4.mp4      → Switzerland travel video 2
│       ├── boxing.mp4.mp4       → Sports video 1
│       ├── coding.mp4.mp4       → Sports video 2
│       └── movie.mp4.mp4        → Cinematic movie scene
├── src/
│   ├── components/
│   │   ├── VideoCard.jsx        → Main video card with all overlays
│   │   ├── ActionBar.jsx        → Like, Comment, Share, Bookmark buttons
│   │   ├── UserInfo.jsx         → Username, avatar, description overlay
│   │   └── MusicDisc.jsx        → Spinning music disc animation
│   ├── data/
│   │   └── videos.js            → Sample video data array
│   ├── App.jsx                  → Main feed + keyboard navigation
│   ├── index.css                → All global styles
│   └── main.jsx                 → React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
🛠️ Tech Stack & Tooling
Technology	Purpose
React 18	UI framework — functional components + hooks only
Vite 8	Build tool — fast HMR and dev server
Plain CSS	Styling — no external UI libraries
HTML5 <video>	Native video element — no react-player or video.js
IntersectionObserver API	Detect which video is currently visible
useState, useRef, useEffect	State and lifecycle management
🔧 Tech Choices & Rationale
Why Vite over Create React App?
Vite offers significantly faster startup and hot module replacement compared to CRA. For a prototype under a tight deadline, fast feedback loops matter.

Why Plain CSS over Tailwind?
Plain CSS gives full control over animations (spinning disc, heart pop, shimmer skeleton) without needing to configure a Tailwind compiler. It also keeps the bundle lightweight.

Why IntersectionObserver?
IntersectionObserver is the most performant way to detect which video is in the viewport. It runs off the main thread and doesn't cause layout thrashing unlike scroll event listeners.

Why scroll-snap-type: y mandatory?
Native CSS scroll snapping gives buttery smooth transitions without any JavaScript animation logic. It's hardware-accelerated and works perfectly on both mobile and desktop.

Why useRef for video elements?
Direct DOM access via useRef avoids unnecessary re-renders when controlling video playback. Calling .play() and .pause() on the video element directly is the correct React pattern for imperative DOM APIs.

⚙️ How Key Features Work
Auto-play / Auto-pause
Each VideoCard uses an IntersectionObserver with a threshold: 0.7 — meaning the video only plays when 70% of it is visible. When it goes out of view, it pauses automatically.

Double-tap to Like
A tap counter with a 250ms timer distinguishes between single tap (play/pause) and double tap (like animation). Double tap triggers a large heart animation using CSS @keyframes.

Long-press to Pause
onMouseDown / onTouchStart starts a 500ms timer. If held longer than 500ms, video pauses. On onMouseUp / onTouchEnd, video resumes.

Infinite Loop
The currentIndex uses modulo arithmetic:

Next: (currentIndex + 1) % videos.length
Previous: (currentIndex - 1 + videos.length) % videos.length
Keyboard Navigation
A global keydown event listener handles:


ArrowDown → next video
ArrowUp → previous video
Space → play/pause
⚠️ Known Limitations & Trade-offs
Stock videos from Pexels don't include audio — mute/unmute button works correctly but audio depends on the video source
On desktop the app is centered with max-width for the best mobile-first experience
Comments and Share buttons show counts but don't open a modal (out of scope for this assessment)
👨‍💻 Author
Harshith React Developer Intern Candidate — Kamao.ai Assessment

### Infinite Loop
The `currentIndex` uses modulo arithmetic:
- Next: `(currentIndex + 1) % videos.length`
- Previous: `(currentIndex - 1 + videos.length) % videos.length`

### Keyboard Navigation
A global `keydown` event listener handles:
- `ArrowDown` → next video
- `ArrowUp` → previous video
- `Space` → play/pause



⚠️ Known Limitations & Trade-offs

- Stock videos from Pexels don't include audio — mute/unmute button works correctly but audio depends on the video source
- On desktop the app is centered with `max-width` for the best mobile-first experience
- Comments and Share buttons show counts but don't open a modal (out of scope for this assessment)



👨‍💻 Author

Harshith
React Developer Intern Candidate — Kamao.ai Assessment
