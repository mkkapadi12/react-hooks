# ⚛️ React Hooks Playground

A hands-on collection of small, focused demos for the most important **React hooks**. Each hook has its own folder with short examples, so you can run one at a time and see exactly how it behaves.

Built while learning React, and handy as a quick reference or revision sheet.

<!-- Add a screenshot after saving it as screenshot.png -->
<!-- ![React Hooks preview](screenshot.png) -->

## 📚 Hooks Covered

| Hook | Folder | What the demo shows |
| ---- | ------ | ------------------- |
| `useState` | `UseState/` | Counter with +/- buttons (styled-components + react-icons); updating an **object** state with the spread operator |
| `useEffect` | `UseEffect/` | Timer with cleanup (`clearTimeout`); effect that runs when a dependency (`count`) changes |
| `useContext` | `UseContext/` | Sharing a `user` value from `File1` down to `File5` without prop drilling |
| `useRef` | `UseRef/` | Counting renders without re-rendering; focusing an input via a DOM ref |
| `useMemo` | `UseMemo/` | Heavy calculation **without** vs **with** `useMemo` (see the performance difference) |
| `useCallback` | `UseCallback/` | Memoised function passed to a `React.memo` child to avoid extra renders |

## 🛠️ Tech Stack

- [React 18](https://react.dev/) (Create React App, `react-scripts` 5)
- [styled-components 6](https://styled-components.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- Jest + React Testing Library (default CRA test setup)

## 📁 Project Structure

```
react-hooks/
├── public/
└── src/
    ├── Components/
    │   ├── UseState/       # useState.jsx, useStateObject.jsx
    │   ├── UseEffect/      # UseEffect.jsx, UseEffect1.jsx
    │   ├── UseContext/     # File1.jsx … File5.jsx
    │   ├── UseRef/         # UseRef1.jsx, UseRef2.jsx
    │   ├── UseMemo/        # UseMemo1.jsx, UseMemo2.jsx
    │   └── UseCallback/    # UseCallback.jsx, Todos.jsx
    ├── App.js              # Choose which demo to render
    └── index.js
```

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) 16 or higher and npm.

```bash
# 1. Clone the repository
git clone https://github.com/mkkapadi12/react-hooks.git

# 2. Go to the project folder
cd react-hooks

# 3. Install dependencies
npm install

# 4. Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ▶️ Running a Specific Demo

`src/App.js` renders **one demo at a time**. Uncomment the import you want, then render it:

```jsx
// src/App.js
import UseMemo2 from "./Components/UseMemo/UseMemo2";

const App = () => {
  return (
    <>
      <UseMemo2 />
    </>
  );
};

export default App;
```

Available components:

`UseState`, `UseStateObject`, `UseEffect`, `UseEffect1`, `File1` (useContext), `UseRef1`, `UseRef2`, `UseMemo1`, `UseMemo2`, `UseCallback`

## 💡 Quick Notes

- **useState with objects:** always copy the old state (`{ ...prev, color: "blue" }`) so other fields are not lost.
- **useEffect cleanup:** return a function to clear timers and listeners.
- **useRef:** changing `ref.current` does **not** trigger a re-render.
- **useMemo:** `UseMemo1` vs `UseMemo2` runs a deliberately slow loop. Click the second button in both to feel the lag only the non-memoised one has.
- **useCallback + memo:** open the console and watch the `Child rendering...!` log to see when `Todos` re-renders.

## 📜 Available Scripts

| Command | Description |
| ------- | ----------- |
| `npm start` | Run the app in development mode |
| `npm run build` | Create an optimised production build |
| `npm test` | Run tests in watch mode |

## 🔮 Future Improvements

- [ ] Add `useReducer`, `useLayoutEffect` and `useId` demos
- [ ] Custom hooks (`useFetch`, `useLocalStorage`, `useDebounce`)
- [ ] Sidebar or tabs to switch between demos without editing `App.js`
- [ ] Short explanation text on each demo page
- [ ] Deploy live demo with GitHub Pages or Vercel

## 👤 Author

**Mayur Kapadi**

- GitHub: [@mkkapadi12](https://github.com/mkkapadi12)
- Email: mayurkapadi12@gmail.com

---

⭐ If this helped you learn React hooks, consider giving it a star!
