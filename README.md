# 🔗 Unique Sorted Union

> A simple, lightweight JavaScript utility to merge multiple arrays into one, keeping only unique values in order of first appearance — no dependencies required.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-None-blue?style=for-the-badge)

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)

---

## 🧾 About

**Unique Sorted Union** is a clean, minimal JavaScript utility that merges two or more arrays into a single flat array. Duplicates are eliminated and the order of first appearance is preserved — all with zero external dependencies.

---

## ✨ Features

- 🔗 **Multi-array merging** — Accepts two or more arrays in a single call
- 🚫 **Duplicate removal** — Only the first occurrence of each value is kept
- 📐 **Order preserved** — Values appear in the order they are first encountered
- ♾️ **Variadic input** — Pass as many arrays as you need via rest parameters
- 🚫 **Zero dependencies** — Pure vanilla JavaScript, no installs needed

---

## 🚀 Getting Started

### Prerequisites

All you need is a JavaScript runtime:
- [Node.js](https://nodejs.org/) (v14+) for running locally, **or**
- Any modern browser console

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lorddrago12/Unique-Sorted-Union.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd Unique-Sorted-Union
   ```

3. **Run the program**
   ```bash
   node main.js
   ```

That's it — no `npm install` needed! 🎉

---

## 💻 Usage

```js
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// → [1, 3, 2, 5, 4]

uniteUnique([1, 2, 3], [4, 5, 6]);
// → [1, 2, 3, 4, 5, 6]

uniteUnique([1, 1, 1], [1, 2, 1]);
// → [1, 2]
```

---

## 📖 API Reference

### `uniteUnique(firstArray, secondArray, ...remainingArrays)`

Merges all provided arrays and returns a new array containing only unique values, in order of first appearance.

| Parameter | Type | Description |
|-----------|------|-------------|
| `firstArray` | `Array` | The first input array |
| `secondArray` | `Array` | The second input array |
| `...remainingArrays` | `Array` | Any number of additional arrays |

**Returns:** `Array` — a new flat array of unique values

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help:

1. **Fork** the repository
2. **Create** a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make** your changes and commit them
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open** a Pull Request 🚀

### 💡 Ideas for Contributions

- [ ] Add support for deep equality comparison (objects/arrays as values)
- [ ] Add a `uniteUniqueSorted()` variant that also sorts the result
- [ ] Add input validation (e.g. non-array arguments)
- [ ] Write unit tests (Jest / Vitest)

### 🐛 Reporting Bugs

Found a bug? Please [open an issue](https://github.com/your-username/unique-sorted-union/issues) with:
- A clear description of the problem
- Steps to reproduce it
- Expected vs actual behavior

---

<p align="center">Made with ❤️ — feel free to ⭐ this repo if you found it useful!</p>
