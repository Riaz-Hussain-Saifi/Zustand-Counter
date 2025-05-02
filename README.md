# 🧠 Zustand Counter + Auth App

A modern and responsive authentication + counter demo built with **Next.js 15**, **Zustand**, **TailwindCSS**, and **Sanity.io**.

🔗 Live Repo: [Zustand-Counter](https://github.com/Riaz-Hussain-Saifi/Zustand-Counter.git)

---

## ✨ Features

- ✅ Zustand counter with **state persistence** using localStorage
- ✅ **Authentication system** (signup, login) powered by Sanity
- ✅ **Forgot Password** flow with graceful fallback
- ✅ **Protected dashboard** route
- ✅ **Custom 404 error page**
- ✅ Clean, **responsive UI** built with TailwindCSS
- ✅ Fully modular file structure for easy understanding

---

## 📁 Folder Structure

```

app/
├── api/
│   ├── create-user/         
│   │   └── route.ts        # Signup route
│   └── login/   
│       └── route.ts        # Login route
│
├── login/
│   ├── page.tsx             # Login page
│   └── forgot-password/
│       └── page.tsx         # Forgot password message
│
├── signup/
│   └── page.tsx             # Sign up page
│
├── dashboard/
│   └── page.tsx             # Protected counter/dashboard
│
├── not-found.tsx            # Custom 404 page
│
│
├── components/
│   └── stores/
│       └── CountStore.ts            # Zustand counter store
│
└── components/
    └── ZustandCounter.tsx           # zustand counter component

````

---

## 🚀 Getting Started

1. **Clone this repo**:

```bash
git clone https://github.com/Riaz-Hussain-Saifi/Zustand-Counter.git
cd Zustand-Counter
````

2. **Install dependencies**:

```bash
npm install
```

3. **Run the dev server**:

```bash
npm run dev
```

4. **Connect your Sanity backend**:

   * Add `/api/create-user` and `/api/login` routes
   * Use `@sanity/client` to handle user storage and retrieval

---

## 🔐 Auth Flow

| Route                    | Purpose                     |
| ------------------------ | --------------------------- |
| `/signup`                | Create a new user in Sanity |
| `/login`                 | Authenticate existing user  |
| `/login/forgot-password` | Guide user to re-register   |
| `/dashboard`             | Protected page with counter |
| `/404` or unknown paths  | Custom 404 page             |

---

## 🛠 Technologies

* **Next.js 15** (App Router)
* **Zustand** (state management)
* **TailwindCSS** (styling)
* **Sanity** (headless CMS & user DB)
* **TypeScript** (type safety)

---

## 🙌 Author

Made with ❤️ by [Riaz Hussain Saifi](https://github.com/Riaz-Hussain-Saifi)
