# 🏀 Interactive Scoreboard App

A modern and interactive web application designed to track real-time scores for two teams (Home and Guest). Ideal for basketball, futsal, friendly matches, or any two-sided competition.

---

## ✨ Key Features

* **Digital LED/LCD-style Display**
  Utilizes a custom font (*digital-7.ttf*) via `@font-face` to create a classic 7-segment scoreboard effect.

* **Real-Time Interactive Scoring**
  Buttons for **+1**, **+2**, and **+3** points update the score instantly using JavaScript.

* **Visual Leader Highlight**
  The leading team’s score display automatically enlarges and glows through CSS transitions controlled by JavaScript.

* **New Game Function**
  Instantly resets both scores to zero.

* **Clean and Responsive Layout**
  Dark theme, minimalist design, and Flexbox structure for smooth usability on any device.

---

## 🛠️ Technologies Used

* **HTML5** – Semantic structure and layout
* **CSS3** – Styling, Flexbox, transitions, digital font integration
* **Vanilla JavaScript** – Score handling, DOM updates, leader highlighting logic

---

## 🚀 How to Run the Project

Try the live version:
👉 **[https://scoreboard-basketball-scribacourse.netlify.app/](https://scoreboard-basketball-scribacourse.netlify.app/)**

Or run it locally:

1. **Clone the repository**

```bash
git clone [INSERT YOUR REPO URL HERE]
```

2. **Navigate into the project folder**

```bash
cd interactive-scoreboard
```

3. **Check the fonts**
   Ensure the custom font (`digital-7.ttf`) is inside the `font/` directory.

4. **Open the project**
   Open `index.html` directly in your web browser.

---

## 🖼️ Project Structure

| File         | Purpose | Key Content                                                           |
| ------------ | ------- | --------------------------------------------------------------------- |
| `index.html` | Markup  | Structure, scoreboard layout, button `onclick` handlers               |
| `index.css`  | Styling | Dark theme, Flexbox design, `@font-face`, transitions, leader effects |
| `index.js`   | Logic   | Score variables, update functions, `checkLeader()`, reset logic       |

---

## ⚙️ JavaScript Logic Overview

* **DOM References**
  Stores references to the score elements (`scoreHomeEl`, `scoreGuestEl`) and their containers.

* **`checkLeader()` Function**
  Called after every score change. Removes the `.leader` class from both scoreboards, then applies it only to the team with the higher score.

* **`restart()` Function**
  Resets both scores to zero and removes leader highlighting.

---

## 👤 Author

**Indrit**
