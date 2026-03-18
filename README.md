# Bricknova

A lightweight browser-based game hub.

*not maintained

## 📁 Project Structure (simplified)

- `/games/` → individual game HTML files
- `/images/` or `/assets/` → thumbnails/icons
- `games.js` → game list/config

---

## ➕ Adding a New Game

1. **Add your game file**
   - Put your game HTML file inside `/games/`
   - Example:
     ```
     /games/my-game.html
     ```

2. **Add a thumbnail image**
   - Place an image in your images/assets folder
   - Example:
     ```
     /images/my-game.png
     ```

3. **Register the game in `games.js`**

   Find the `GAMES` array and add a new object:

   ```js
   {
     name: "My Game",
     file: "my-game.html",
     image: "images/my-game.png",
     locked: false
   }
   ```

   ### Fields explained:
   - `name` → Display name
   - `file` → File inside `/games/`
   - `image` → Thumbnail path
   - `locked` → Whether the game is locked

---

## 🔒 Locking Games

Set:
```js
locked: true
```

This will trigger the lock system (if still used).

---

## 🚀 Running Locally

Just open:
```
index.html
```

Or use a simple server:

```bash
npx serve
```

---

## 🌐 Deployment

You can host this on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

---

## 🧼 Notes

- No build step required
- Pure HTML/CSS/JS
- Easy to modify

---

## 💡 Tips

- Keep filenames consistent
- Avoid spaces in file names
- Use lowercase for paths

---

Enjoy 🚀
