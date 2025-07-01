# 🎲 Dice Game – React + Vite

This is a simple interactive Dice Game built using **React** and **Vite**. The goal is to freeze dice with the same number and keep rolling the rest until all dice show the same value. A great beginner-friendly project to practice **state management**, **component optimization**, and **responsive UI design** in React.

---

## 🚀 Features

- 🎯 Roll 10 dice with random values (1–6)
- 🖱️ Click to "freeze" selected dice
- ✅ Win condition: all dice must show the same number and be frozen
- 🌐 Fully responsive UI (2 rows × 5 columns layout)
- 🎨 Clean design with CSS animations
- ⚡ Powered by Vite for fast development

---

## 📁 Project Structure
```
dice-game/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md

````

---

## 🧰 Tech Stack

- **React 18** with Hooks
- **Vite** (Fast bundler and dev server)
- **JavaScript (ES6)**
- **CSS3** (Custom styles)

---

## 📦 Dependencies

| Package                 | Description                          |
|-------------------------|--------------------------------------|
| react                   | Frontend UI library                  |
| react-dom               | DOM rendering for React             |
| vite                    | Build tool and dev server           |
| @vitejs/plugin-react    | Enables React Fast Refresh          |

Install all dependencies with:

```bash
npm install
````

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dice-game.git
cd dice-game
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ How to Play

1. Click on any die to "freeze" it (toggle pressed state).
2. Click the **Roll** button to roll the unfrozen dice.
3. Win the game by making all dice **show the same number and be frozen**.

---

## 🧪 Future Improvements

* ⏱ Add timer or roll count
* 🔄 Add reset button
* 📱 Improve mobile UX
* 🔊 Add sound effects
* 🌗 Dark/Light theme toggle

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
