# Product Management System

## Overview
This is a **MERN Stack** application for managing products with **Cloudinary image upload** using **Multer**. Users can:
- Add new products
- Upload product images to Cloudinary
- Update product details 
- Delete products

## 🚀 Tech Stack
- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **File Upload**: Multer, Cloudinary

---

## 📂 Folder Structure
```
📦 backend
├── 📂 public             # Static files (if any)
├── 📂 src                # Source code
    │   └── product.controller.js  # Controller for product-related operations
    ├── 📂 db             # Database configuration
    │   └── db.js         # Database connection file
    ├── 📂 middleware     # Middleware functions
    │   └── multer.middleware.js  # Multer configuration for file uploads
    ├── 📂 models         # Mongoose models/schema
    │   └── products.models.js  # Product schema/model
    ├── 📂 routes         # API route handlers
    │   └── product.routes.js  # Product-related routes
    ├── 📂 utils          # Utility functions/helpers
    │   └── cloudinary.js  # Cloudinary configuration for image uploads
    ├── 📂 controllers    # Handles request logic
    └── server.js         # Main server file

 📦 frontend
├── 📂 public             # Static files (favicon, images, etc.)
├── 📂 src                # Source code
    ├── 📂 api            # API calls and services
    │   └── API.js        # Handles API requests
    ├── 📂 assets         # Static assets (images, icons, etc.)
    ├── 📂 components     # Reusable UI components
    │   └── Navbar.jsx    # Navigation bar component
    ├── 📂 context        # Context API for state management
    │   └── productContext.js  # Product-related global state
    ├── 📂 pages          # Page components
    │   ├── AddProduct.jsx  # Page to add new products
    │   ├── ProductCard.jsx  # Component to display product cards
    ├── App.jsx           # Main App component
    ├── index.css         # Global styles
    ├── main.jsx          # Entry point for React app

```

---

## 🛠️ Setup & Installation

### **1️⃣ Backend Setup**
```sh
cd backend
npm install
```

### **2️⃣ Set Up Environment Variables**
Create a `.env` file in the `backend` folder:
```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### **3️⃣ Start the Backend Server**
```sh
npm run start
```

---

### **4️⃣ Frontend Setup**
```sh
cd frontend
npm install
```

### **5️⃣ Start the Frontend**
```sh
npm run dev
```

---

## 🚀 Features
- **Add Products**: Upload product details with an image
- **Update Products**: Modify product details 
- **Delete Products**: Remove products instantly
- **Cloudinary Integration**: Upload and manage images

---

## ⚡ API Endpoints
### **Product Routes**
| Method | Endpoint | Description |
|--------|------------|--------------|
| `POST` | `/addProduct` | Add new product |
| `POST` | `/updateProduct/:product_id` | Update product details |
| `POST` | `/deleteProduct/:product_id` | Remove product |
| `GET` | `/allProducts` | Get all products |

---

## 🎨 UI Components
- **Product Form**: Form to add/update products
- **Product List**: Display all products
- **Edit & Delete Buttons**: Manage products

---

## 🎯 Improvements & Future Enhancements
✅ Drag & Drop Image Upload  
✅ Search & Filter Products  
✅ Pagination for large datasets  
✅ User Authentication & Role-Based Access  

---

## 🔗 Connect with Me
If you like this project connect with me:

---

**Happy Coding!**

