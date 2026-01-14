# Rock Paper Scissors Game 🎮

This is an advanced version of the classic **Rock Paper Scissors** game built using **HTML, CSS, and JavaScript**.

Instead of keeping it minimal, I extended the game with multiple features like user setup, round limits, dynamic UI switching, and a separate end-game screen.

---

## 🔥 Key Features

### 🎯 Game Features
- Rock Paper Scissors gameplay with proper game logic
- User vs Computer scoring system
- Live result message after every move
- Automatic game end after completing selected rounds
- Manual game finish option
- Reset game without reloading the page
- Play again option with same setup

---

### 👤 User Setup System
- User enters:
  - Name
  - Number of rounds to play
- A **random nickname/tag** is generated and attached to the username
- Random profile image is assigned to:
  - User
  - Computer

This makes every game session feel different.

---

### 🔄 Round Control Logic
- Each click counts as one turn
- Game automatically ends when round limit is exceeded
- Final winner is decided based on total score
- Draw, win, and lose conditions are handled separately

---

### 🧠 Game Logic (JavaScript)

The game logic is fully handled using JavaScript:
- Computer choice is generated randomly
- User and computer choices are compared
- Score is updated dynamically
- UI feedback changes based on result (color + message)
- Draw cases are handled independently

---

### 🖥️ Multi-Screen UI System
- Separate screens for:
  - User setup
  - Main game
  - End-game results
- Containers are shown/hidden dynamically using JavaScript
- No page reload required during gameplay

---

### 📱 Responsive Design System
- Desktop and mobile layouts use **separate CSS files**
- JavaScript detects screen size and applies the correct CSS:
  - `style.css` → Desktop
  - `mobile.css` → Mobile
- CSS switching happens internally without user interaction

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)

No external libraries or frameworks used.

---

## 📂 Project Structure

├── index.html
├── style.css // Desktop design
├── mobile.css // Mobile redesigned layout
├── script.js // Complete game logic
├── images/
│ ├── rock.png
│ ├── paper.png
│ ├── scissors.png
│ ├── user & computer avatars
└── bg-background.mp4

---

## 🚀 How to Run

1. Clone or download the repository
2. Open `index.html` in a browser
3. Enter your name and number of rounds
4. Play the game 🎮

---

## 🎯 Why This Project

This project helped me practice:
- DOM manipulation
- Event handling
- Game logic implementation
- State management (scores, turns, UI)
- Responsive design without frameworks

---

## 📌 Possible Improvements
- Sound effects
- Mobile vibration feedback
- Better animations
- Online multiplayer mode

---

## 👤 Author

**Harsh Jha**

If you like the project, feel free to ⭐ star the repository.
