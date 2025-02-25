# ai-gesture-ui

An AI-powered Gesture-Controlled UI that allows users to interact using hand gestures, leveraging Angular, StencilJS, WebAssembly, and AI-powered motion detection.

## 🚀 Features
- **AI-powered Gesture-Controlled UI** using **Angular & StencilJS**.
- **Hand gesture recognition for hands-free interaction** powered by **WebAssembly AI processing**.
- **Supports swipe, zoom, wave, and other intuitive gestures**.

## 📂 Project Structure
```
ai-gesture-ui/
│── stencil-gesture-ui/  # Stencil-powered Gesture UI components
│   ├── src/components/gesture-control/  # AI-powered hand gesture controls
│   ├── stencil.config.ts  # Stencil configuration
│── angular-gesture-dashboard/  # Angular host for AI-powered Gesture UI
│   ├── src/app/  # Angular app with Gesture UI interactions
│   ├── package.json  # Angular dependencies
│── wasm-motion-detection/  # WebAssembly AI-powered gesture detection (Rust-based)
│   ├── src/main.rs  # AI-driven gesture recognition system
│   ├── Cargo.toml  # Rust package file
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/ai-gesture-ui.git
   cd ai-gesture-ui
   ```

2. Install dependencies and build Stencil Gesture UI:
   ```bash
   cd stencil-gesture-ui
   npm install
   npm run build
   ```

3. Link Stencil components to Angular:
   ```bash
   cd ../angular-gesture-dashboard
   npm install
   npm start
   ```

4. Compile the WebAssembly AI Gesture Recognition module:
   ```bash
   cd ../wasm-motion-detection
   cargo build --target wasm32-unknown-unknown --release
   ```

5. Open **http://localhost:4200** to experience AI-powered Gesture-Controlled UI.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | AI & Gesture UI Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve AI-powered Gesture-Controlled UI.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
