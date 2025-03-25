# 🎟️ Event Booking System

Welcome! This is a full-stack web application where users can browse upcoming events and book their attendance. I built this as part of a technical challenge to demonstrate my skills in frontend development (Angular), backend (Node.js/Express), and database management using Sequelize ORM with MySQL.

---

## 🌐 Live Demo

- **Frontend** (Angular + Angular Material): https://event-booking-2lkhrtvd9-ahmads-projects-035fb1f5.vercel.app/
- **Backend** (Node.js + Express + Sequelize): https://event-booking-c8jf.onrender.com

> Replace the links above with your actual live URLs before submission ✅

---

## 🚀 Features

- Responsive homepage displaying events (name, date, location)
- Hover-to-view event details (description, location)
- Booking form with name, email, and phone number
- Form validation and confirmation modal
- Sequelize ORM with migrations and model-based DB logic
- Clean, modern UI using Angular Material

---

## ⚙️ Tech Stack

| Layer        | Tech                                  |
| ------------ | ------------------------------------- |
| **Frontend** | Angular, Angular Material, TypeScript |
| **Backend**  | Node.js, Express.js                   |
| **Database** | MySQL with Sequelize ORM              |
| **Hosting**  | Netlify (frontend), Render (backend)  |

---

## 📁 Project Structure

```
event-booking/
│
├── backend/                → Express + Sequelize backend
│   ├── models/             → Sequelize models
│   ├── migrations/         → Database migrations
│   ├── controllers/        → API logic
│   ├── routes/             → API endpoints
│   └── server.js           → Entry point for backend
│
├── src/                    → Angular frontend
│   ├── app/
│   │   ├── components/     → Event display, booking form, etc.
│   │   ├── services/       → API calls to backend
│   │   └── ...
│   └── index.html
```

---

## 🧪 How to Run Locally

### 🔧 Backend Setup

1. Navigate to the backend:

```bash
cd backend
npm install
```

2. Create a `.env` file with your DB config:

```
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=event_booking_db
DB_HOST=localhost
PORT=5000
```

3. Run migrations:

```bash
npx sequelize-cli db:migrate
```

4. (Optional) Seed the database:

```bash
npx sequelize-cli db:seed:all
```

5. Start the server:

```bash
node server.js
```

---

### 💻 Frontend Setup

1. Navigate to the Angular frontend:

```bash
cd frontend
npm install
```

2. Start the Angular dev server:

```bash
ng serve
```

3. Open your browser at:

```
http://localhost:4200
```

---

## 📌 Notes

- The API base URL in the frontend is pointing to the hosted backend. If testing locally, make sure to update the endpoint in your Angular service to `http://localhost:5000/api/...`
- The database must be running for the backend to function properly.

---

## 👨‍💻 Author

Made with effort and enthusiasm by **Ahmed Aldhahi**  
Feel free to reach out via [GitHub](https://github.com/AhmedAldhahi) if you'd like to connect.

---

## 📄 License

This project is licensed under the MIT License.
