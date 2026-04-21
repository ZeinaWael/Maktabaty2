# مكتبتي — Maktabaty 📚

Digital library system for **Amna Bint Al-Arqam Al-Makhzumiya Secondary School for Girls**  
وزارة التربية والتعليم والتعليم العالي · State of Qatar

---

## 🚀 Step 1 — Set up Supabase

1. Go to [https://supabase.com](https://supabase.com) and create a **free account**.
2. Click **"New Project"** and fill in a name (e.g. `maktabaty`) and a database password.
3. Once created, open **SQL Editor** and paste the contents of `supabase_schema.sql`, then click **Run**.
4. Go to **Project Settings → API** and copy:
   - **Project URL** (looks like `https://xxxx.supabase.co`)
   - **anon / public** key
5. Open `supabase-config.js` and replace the placeholders:

```js
const SUPABASE_URL  = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON = 'YOUR_ANON_PUBLIC_KEY';
```

---

## 🐙 Step 2 — Publish on GitHub

### Option A — GitHub Website (no terminal needed)

1. Go to [https://github.com](https://github.com) and sign in (or create a free account).
2. Click the **+** icon → **New repository**.
3. Name it `maktabaty`, set it to **Public**, click **Create repository**.
4. On the next page click **"uploading an existing file"**.
5. Drag and drop all project files:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `supabase-config.js`
   - `school_logo.png`
6. Click **Commit changes**.

### Option B — Git CLI (terminal)

```bash
git init
git add .
git commit -m "Initial commit — Maktabaty library"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/maktabaty.git
git push -u origin main
```

---

## 🌐 Step 3 — Enable GitHub Pages (free hosting)

1. In your GitHub repository go to **Settings → Pages**.
2. Under **Source** choose **Deploy from a branch → main → / (root)**.
3. Click **Save**.
4. After ~1 minute your site is live at:  
   `https://YOUR_USERNAME.github.io/maktabaty/`

---

## 📁 Project Structure

```
maktabaty/
├── index.html            ← Main HTML (navbar has centered logo)
├── styles.css            ← All styles
├── app.js                ← App logic (books, admin, PDF reader)
├── supabase-config.js    ← Supabase helpers (fill in credentials)
├── supabase_schema.sql   ← Run once in Supabase SQL Editor
└── school_logo.png       ← School logo (displayed centered in navbar)
```

---

## 🔐 Admin Credentials

Default credentials are set inside `app.js`.  
Search for `loginUsername` / `loginPassword` logic to update them,  
or connect Supabase Auth for a proper login system.

---

© 2026 Zeina Wael · Maktabaty
