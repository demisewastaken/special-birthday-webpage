# 🎂 Sweet 19 | Interactive Birthday Experience 🎈

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://special-birthday-webpage.vercel.app/)
[![Vercel](https://img.shields.io/badge/hosted-on-black)](https://special-birthday-webpage.vercel.app/)

A high-energy, interactive web experience built to celebrate a 19th birthday. This project combines smooth CSS animations, interactive JavaScript mini-games, and a customized memory gallery designed specifically for both desktop and mobile viewing.

---

## 🚀 Experience It Now
Check out the live site here: **[special-birthday-webpage.vercel.app](https://special-birthday-webpage.vercel.app/)**

---

## ✨ Key Features

### 🎮 Interactive "Balloon Pop" Game
- Users must find and pop **19 balloons** scattered across the screen to "unlock" the final birthday surprise.
- Features real-time confetti feedback and game-state tracking via Vanilla JS.

### 📸 Dynamic Memory Gallery
- **Custom 3-Row Layout:** - Top & Bottom: Horizontal cinematic cards.
  - Middle: Vertical/Portrait cards for mobile-style memories.
- **Hover Reveal:** Every photo features a hidden caption that fades in with a pink overlay when hovered.

### 🎂 Virtual Cake Cutting
- A realistic "split-cake" animation triggered by the user.
- Integrated with the `canvas-confetti` library for a celebratory finish.

### ⏳ Live Age Counter
- A real-time clock that calculates the total seconds lived over 19 years, updating every second to create a sense of scale and celebration.

---

## 🛠️ Technical Breakdown

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure and SEO-friendly headers. |
| **CSS3** | Grid layouts, Keyframe animations (Floating Hearts), and Overlay effects. |
| **JavaScript** | DOM manipulation, game logic, and Typewriter effects. |
| **Canvas-Confetti** | High-performance particle physics for celebrations. |
| **Google Fonts** | 'Dancing Script' (Cursive) & 'Poppins' (Modern Sans-Serif). |

---

## 📂 Project Structure
```text
├── index.html      # Main landing page
├── style.css       # Layout, animations, and hover effects
├── script.js      # Game logic, counter, and interaction
└── images/         # (Optional) Local storage for birthday photos
