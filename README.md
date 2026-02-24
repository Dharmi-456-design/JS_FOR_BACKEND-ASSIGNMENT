
# 🔥 Assignment 1 - Student CGPA API (Odoo School of Tech)

## 🎓 Student CGPA API

### 📌 Objective

This project is a **REST API built using Express.js** that manages student academic performance records using an **in-memory JSON database**.

The API allows users to:

* Fetch all students
* Find the topper
* Calculate average CGPA
* Count total students
* Fetch student by ID
* Filter students by branch

---

## 🚀 Features

* RESTful API design
* In-memory JSON data (No database used)
* Static and Dynamic routes
* Proper HTTP status codes
* Clean JSON responses
* Deployed on Render

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* CORS
* Postman (API Testing & Documentation)

---

## 📂 Project Structure

```
student-cgpa-api/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 📊 Student Data Structure

Each student object contains:

```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

---

## 🔗 API Routes

### 🔹 1. Get All Students

GET `/students`

✔ Status: 200
✔ Returns: Array of all students

---

### 🔹 2. Get Topper

GET `/students/topper`

✔ Status: 200
✔ Returns: Student with highest CGPA
✔ If no students → 404

---

### 🔹 3. Get Average CGPA

GET `/students/average`

✔ Status: 200

Response:

```json
{
  "averageCGPA": 8.12
}
```

---

### 🔹 4. Get Total Students

GET `/students/count`

✔ Status: 200

Response:

```json
{
  "totalStudents": 10
}
```

---

### 🔹 5. Get Student by ID

GET `/students/:id`

Example:

```
/students/3
```

✔ If found → return student
✔ If not → 404 with message

---

### 🔹 6. Get Students by Branch

GET `/students/branch/:branchName`

Example:

```
/students/branch/CSE
```

✔ Returns students of that branch
✔ If none → empty array or 404 (handled in code)

---

## ⚙️ How to Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/TajaparaDhruva/node.js_assignment.git
```

### 2️⃣ Go to Project Folder

```bash
cd 01
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Server

```bash
node index.js
```

Server will run on:

```
http://localhost:5000
```

---

## 🌍 Live API (Render)

👉https://student-cgpa-kh2r.onrender.com/students

---

## 📮 Postman Documentation

👉https://documenter.getpostman.com/view/50839318/2sBXcEmgat

---

## 💻 GitHub Repository

👉https://github.com/Dharmi-456-design/JS_FOR_BACKEND-ASSIGNMENT

---

## 📌 HTTP Status Codes Used

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

## 📚 Learning Outcomes

* Built RESTful APIs using Express.js
* Implemented dynamic routing using params
* Performed aggregation (average, max, count)
* Deployed backend on Render
* Documented APIs using Postman
