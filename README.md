# Watch E-Commerce Client 🕐⌚

> A modern, responsive e-commerce platform for luxury watches built with React, Vite, and Tailwind CSS.

**Live Demo**: [https://watch-e-commerce-client.vercel.app/](https://watch-e-commerce-client.vercel.app/)

![React](https://img.shields.io/badge/React-18.3-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?logo=tailwind-css)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)

---

## 🚀 Features

### 🛍️ **E-Commerce Functionality**
- **Product Catalog**: Browse 100+ luxury watches with detailed information
- **Search & Filter**: Find watches by brand, style, and price
- **Shopping Cart**: Add/remove products, update quantities
- **Checkout System**: Complete order with shipping information
- **Order History**: View past orders and order details

### 🔐 **Authentication & Security**
- **User Registration**: Create account with email and password
- **Secure Login**: JWT-based authentication
- **Protected Routes**: Restricted access to cart, checkout, and orders
- **Admin Dashboard**: Role-based access control (Admin only)
- **Persistent Sessions**: Stay logged in with localStorage tokens
- **Auto Logout**: Automatic logout on token expiration (401 errors)

### 👨‍💼 **Admin Features**
- **Product Management**: View all products and statistics
- **Order Management**: Track and manage customer orders
- **User Management**: Monitor registered users
- **Dashboard Analytics**: View total products, orders, and users

### 🎨 **User Experience**
- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI**: Clean interface with Tailwind CSS
- **Loading States**: Spinner animations during data fetch
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Success/error feedback
- **Smooth Animations**: Hover effects and transitions

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3**: Component-based UI library
- **Vite 6.0**: Fast development build tool
- **React Router DOM**: Client-side routing

### **Styling**
- **Tailwind CSS 4.0**: Utility-first CSS framework
- **PostCSS**: CSS transformations
- **Custom CSS**: Additional styling in `index.css`

### **State Management**
- **Context API**: Global state for authentication and cart
- **React Hooks**: useState, useEffect, useContext

### **HTTP Client**
- **Axios**: Promise-based HTTP requests
- **Interceptors**: Automatic token attachment and error handling

### **Development Tools**
- **ESLint**: Code linting
- **Vite Dev Server**: Hot module replacement
- **Environment Variables**: `.env` configuration

---

## 📁 Project Structure

```
client/
├── public/                  # Static assets
│   └── vite.svg
├── src/
│   ├── assets/             # Images, icons
│   │   └── react.svg
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx     # Navigation bar with cart count
│   │   └── ProtectedRoute.jsx  # Route protection HOC
│   ├── context/           # Global state management
│   │   ├── AuthContext.jsx     # Authentication state
│   │   └── CartContext.jsx     # Shopping cart state
│   ├── pages/             # Page components
│   │   ├── Home.jsx           # Landing page
│   │   ├── Products.jsx       # Product listing
│   │   ├── Cart.jsx           # Shopping cart page
│   │   ├── Checkout.jsx       # Order checkout
│   │   ├── OrderSuccess.jsx   # Order confirmation
│   │   ├── Login.jsx          # User login
│   │   ├── Register.jsx       # User registration
│   │   └── AdminDashboard.jsx # Admin panel
│   ├── services/          # API integration
│   │   └── api.js            # Axios instance with interceptors
│   ├── App.jsx            # Main app component with routes
│   ├── App.css            # App-specific styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables (local)
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── vite.config.js         # Vite configuration
```

---

## 🔧 Installation & Setup

### **Prerequisites**
- Node.js 18+ and npm
- Backend API running (see [server repo](https://github.com/Yadav-Shreyash842/Watch_E-Commerce-server))

### **1. Clone Repository**
```bash
git clone https://github.com/Yadav-Shreyash842/Watch_E-Commerce-client.git
cd Watch_E-Commerce-client
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment**
Create `.env` file in root directory:
```env
VITE_API_URL=http://localhost:3000/api
```

For production:
```env
VITE_API_URL=https://your-backend-url.com/api
```

### **4. Run Development Server**
```bash
npm run dev
```

Visit: `http://localhost:5173`

### **5. Build for Production**
```bash
npm run build
```

### **6. Preview Production Build**
```bash
npm run preview
```

---

## 🔌 API Integration

### **Base URL**
- **Development**: `http://localhost:3000/api`
- **Production**: `https://watch-e-commerce-server.onrender.com/api`

### **API Endpoints Used**

#### **Authentication**
```javascript
POST /auth/register    // Register new user
POST /auth/login       // Login user
```

#### **Products**
```javascript
GET /products          // Get all products
GET /products/:id      // Get single product (if implemented)
```

#### **Orders**
```javascript
POST /orders           // Create new order
GET /orders            // Get user's orders (protected)
GET /orders/all        // Get all orders (admin only)
```

### **Request/Response Format**

**Register Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login Request:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Login Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "123",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Order Request:**
```json
{
  "items": [
    {
      "product": "product_id",
      "name": "Rolex Submariner",
      "price": 8500,
      "quantity": 1
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  },
  "totalAmount": 8500
}
```

---

## 🔐 Authentication Flow

### **1. User Registration**
1. Navigate to `/register`
2. Fill in name, email, password
3. Submit form → API call to `/auth/register`
4. On success → Auto-login with JWT token
5. Redirect to home page

### **2. User Login**
1. Navigate to `/login`
2. Enter email and password
3. Submit form → API call to `/auth/login`
4. Receive JWT token and user info
5. Store in localStorage and AuthContext
6. Redirect to products page

### **3. Token Management**
- **Storage**: JWT stored in `localStorage` as `token`
- **Attachment**: Axios interceptor automatically adds token to all requests
- **Header Format**: `Authorization: Bearer <token>`
- **Expiration**: Auto-logout on 401 response

### **4. Protected Routes**
Routes wrapped with `ProtectedRoute` component:
- `/cart` - Shopping cart
- `/checkout` - Order checkout
- `/order-success` - Order confirmation
- `/admin` - Admin dashboard (role check)

---

## 🛒 Shopping Cart System

### **Cart Context**
Global cart state managed by `CartContext`:

```javascript
// Available methods
addToCart(product, quantity)     // Add item to cart
removeFromCart(productId)         // Remove item from cart
updateQuantity(productId, quantity) // Update item quantity
clearCart()                       // Clear entire cart
getTotalPrice()                   // Calculate total price
getTotalItems()                   // Get total item count
```

### **Cart Persistence**
- Cart stored in `localStorage`
- Persists across page refreshes
- Synced with context on app load

### **Cart Display**
- **Navbar**: Shows cart item count badge
- **Cart Page**: List all items with price, quantity controls
- **Total**: Calculated dynamically from all items

---

## 🎯 User Roles & Permissions

### **Regular User** (`role: "user"`)
- ✅ Browse products
- ✅ Add to cart
- ✅ Checkout and place orders
- ✅ View own orders
- ❌ Access admin dashboard

### **Admin** (`role: "admin"`)
- ✅ All user permissions
- ✅ Access admin dashboard
- ✅ View all orders
- ✅ View all users (if implemented)
- ✅ View statistics

---

## 🎨 UI Components

### **Navbar**
- Logo and navigation links
- Dynamic links based on auth state
- Shopping cart icon with item count badge
- Login/Register or Logout button

### **Product Card**
- Product image (or placeholder emoji)
- Product name and brand
- Price display
- Stock information
- Add to cart button
- Hover animations

### **Cart Item**
- Product details
- Quantity controls (+/-)
- Subtotal calculation
- Remove button

### **Protected Route**
- Checks authentication status
- Redirects to login if not authenticated
- Checks admin role for admin routes

---

## 🌐 Deployment

### **Deployed on Vercel**

**Live URL**: [https://watch-e-commerce-client.vercel.app/](https://watch-e-commerce-client.vercel.app/)

### **Deploy Your Own**

1. **Fork/Clone this repository**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select this repository
   - Framework: Vite (auto-detected)

3. **Set Environment Variables**
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```

4. **Deploy**
   - Vercel will build and deploy automatically
   - Get your live URL

### **Automatic Deployments**
- Every push to `main` branch triggers auto-deployment
- Preview deployments for pull requests

---

## 📦 Dependencies

### **Core Dependencies**
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.1",
  "axios": "^1.7.9"
}
```

### **Development Dependencies**
```json
{
  "@vitejs/plugin-react": "^4.3.4",
  "vite": "^6.0.5",
  "tailwindcss": "^4.0.0",
  "@tailwindcss/vite": "^4.0.0",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2"
}
```

---

## 🔒 Security Features

### **Authentication Security**
- ✅ JWT-based authentication
- ✅ Password hashing (server-side)
- ✅ Secure token storage
- ✅ Protected routes
- ✅ Role-based access control

### **API Security**
- ✅ CORS configured for Vercel deployments
- ✅ Automatic token attachment
- ✅ 401 error handling with auto-logout
- ✅ HTTPS in production

### **Best Practices**
- ✅ Environment variables for sensitive data
- ✅ `.env` files excluded from git
- ✅ Input validation on forms
- ✅ XSS prevention (React auto-escapes)

---

## 🧪 Testing

### **Manual Testing Checklist**

#### Authentication
- [ ] User can register with valid credentials
- [ ] User can login with correct credentials
- [ ] Invalid login shows error message
- [ ] Logout clears token and redirects

#### Products
- [ ] Products load correctly
- [ ] Product images display or show placeholder
- [ ] Add to cart updates cart count

#### Cart
- [ ] Items appear in cart after adding
- [ ] Quantity can be increased/decreased
- [ ] Remove button deletes item
- [ ] Total price calculates correctly

#### Checkout
- [ ] Shipping form validates input
- [ ] Order submits successfully
- [ ] Success page shows order details
- [ ] Cart clears after successful order

#### Admin
- [ ] Admin user can access dashboard
- [ ] Regular user cannot access dashboard
- [ ] Dashboard shows correct statistics

---

## 🐛 Troubleshooting

### **Products Not Showing**
- Check if backend API is running
- Verify `VITE_API_URL` is correct
- Check browser console for CORS errors
- Ensure products are seeded in database

### **CORS Errors**
- Verify backend allows your domain
- Check server CORS configuration
- For Vercel: ensure all `*.vercel.app` domains allowed

### **Login Not Working**
- Check credentials are correct
- Verify backend auth endpoint is working
- Check network tab for API errors
- Clear localStorage and retry

### **Cart Not Persisting**
- Check if localStorage is enabled in browser
- Verify cart context is properly configured
- Clear localStorage and add items again

### **Build Errors**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear Vite cache: `rm -rf .vite`
- Check for syntax errors in code

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Production Build
npm run build        # Build for production (outputs to /dist)

# Preview Production
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🔗 Links

- **Live Demo**: [https://watch-e-commerce-client.vercel.app/](https://watch-e-commerce-client.vercel.app/)
- **Backend Repository**: [https://github.com/Yadav-Shreyash842/Watch_E-Commerce-server](https://github.com/Yadav-Shreyash842/Watch_E-Commerce-server)
- **Main Repository**: [https://github.com/Yadav-Shreyash842/Watch_E-Commerce](https://github.com/Yadav-Shreyash842/Watch_E-Commerce)

---

## 👨‍💻 Author

**Shreyash Yadav**

- GitHub: [@Yadav-Shreyash842](https://github.com/Yadav-Shreyash842)

---

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite for blazing fast build tool
- Tailwind CSS for utility-first styling
- Vercel for seamless deployment
- MongoDB Atlas for database hosting
- Render for backend hosting

---

## 📊 Project Stats

- **Total Components**: 13
- **Total Pages**: 8
- **Lines of Code**: ~2000+
- **Dependencies**: 4 core + 4 dev
- **Build Size**: ~500KB (minified)

---

**Built with ❤️ using React + Vite + Tailwind CSS**

🕐 **Happy Shopping!** ⌚
