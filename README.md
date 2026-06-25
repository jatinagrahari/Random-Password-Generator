# 🔐 Password Generator

> **A React-based Password Generator with real-time customization — control length, include numbers and special characters, and copy instantly to clipboard**

[![React](https://img.shields.io/badge/Library-React-%2361DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-%23F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Build-Vite-%23646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🔗 **[Live Demo](#)** • 🐛 **[Report Bug](https://github.com/jatinagrahari/Random-Password-Generator/issues)** • ⭐ **[GitHub](https://github.com/jatinagrahari/Random-Password-Generator)**

---

## ✨ Features

- 🔑 **Custom Password Length** — Generate passwords up to 100 characters using a range slider
- 🔢 **Include Numbers** — Toggle numbers in generated password via checkbox
- 🔣 **Include Special Characters** — Toggle special characters for stronger passwords
- 📋 **One-Click Copy** — Copy generated password to clipboard instantly
- ⚡ **Real-time Generation** — Password updates live as you change settings

---

## 🛠️ Tech Stack

| Layer          | Technology     |
| -------------- | -------------- |
| **UI Library** | React          |
| **Language**   | JavaScript     |
| **Build Tool** | Vite           |
| **Styling**    | CSS / Tailwind |
| **Deployment** | Netlify        |

---

## ⚙️ React Concepts Used

- `useState` — Managing password, length, and checkbox state
- `useEffect` — Regenerating password on setting change
- `useCallback` — Optimizing password generation function
- `useRef` — Accessing input field for clipboard copy

---

## 🚀 Quick Start

### Prerequisites

- Node.js installed
- VS Code (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/jatinagrahari/password-generator.git

# Navigate to project directory
cd password-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📁 Project Structure

```bash
password-generator/
├── src/
│   ├── App.jsx        # Main component with logic
│   ├── App.css        # Styling
│   └── main.jsx       # Entry point
├── public/
├── index.html
└── README.md
```

---

## 🎯 How It Works

1. **Adjust the slider** — Set password length from 6 to 100 characters
2. **Toggle Numbers** — Check to include digits in the password
3. **Toggle Special Characters** — Check to include symbols like `!@#$%^&*`
4. **Click Copy** — Password copies to clipboard instantly

---

## 🧠 Key Implementation

### Password Generation Logic

```javascript
const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*{}[]";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }
  setPassword(pass);
}, [length, numberAllowed, charAllowed]);
```

---

## 📸 Screenshots

<details>
<summary><b>Click to expand screenshots</b></summary>

### Password Generator UI

![Screenshot](https://raw.githubusercontent.com/jatinagrahari/Random-Password-Generator/refs/heads/main/src/assets/SS_1.png)

</details>

---

## 🚧 Current Status

Actively improving:

- UI styling enhancement
- Password strength indicator
- Dark / Light mode toggle

---

## 📝 Future Improvements

- 💪 Password strength meter
- 🌙 Dark mode support
- 📱 Better mobile UI
- 🔁 Password history

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Built with ❤️ using React + Vite
- Inspired by Hitesh Choudhary's Chai aur Code series

---

## ⭐ Show your support

Give a ⭐️ if this helped you understand React Hooks!

**Built to master useCallback, useEffect, useRef and useState 🔐**
