# Assignment 4 - React Profile Card

A reusable user profile card component built with React and Vite, showcasing modular component architecture and prop passing.

## 🚀 Live Demo
- **Live URL:** [https://Avdgq2577.github.io/Assignment-4-ProfileCard/](https://Avdgq2577.github.io/Assignment-4-ProfileCard/)
- **Repository:** [https://github.com/Avdgq2577/Assignment-4-ProfileCard](https://github.com/Avdgq2577/Assignment-4-ProfileCard)

---

## 📌 Features
- **Component-Based Architecture:** Modular, reusable `ProfileCard` child component.
- **Props Passing:** Receives and displays dynamic `name`, `image`, and `description` props.
- **Responsive Styling:** Centered card interface featuring circular avatar styling, drop-shadow, and responsive typography.
- **Optimized Assets:** Asset bundling configured with Vite for seamless GitHub Pages asset resolution.

---

## 🛠️ Tech Stack
- **React (v19):** Functional components and props.
- **Vite:** High-performance frontend build tool and dev server.
- **CSS3:** Custom styles, card hover elevation, and flexbox centering.

---

## 📂 Project Structure
```text
Assignment-4-ProfileCard/
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow for GitHub Pages
├── src/
│   ├── assets/           # Profile avatar image
│   ├── App.css           # Profile card and layout styling
│   ├── App.jsx           # Main App and ProfileCard component
│   └── main.jsx          # React DOM root entry point
├── index.html            # Vite HTML template
├── vite.config.js        # Vite build configuration (base: './')
├── package.json          # Project dependencies & scripts
└── README.md             # Project documentation
```

---

## 💻 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Avdgq2577/Assignment-4-ProfileCard.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd Assignment-4-ProfileCard
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment
Automated via **GitHub Actions** (`.github/workflows/deploy.yml`) on every push to `main`.
