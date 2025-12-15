// File: src/App.jsx

import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";

// Hapus duplikasi, hanya impor yang diperlukan
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; 

function App() {
  const myRouter = createBrowserRouter([
    // 1. RUTE ROOT / INDEX: Mengarahkan pengguna ke halaman Login secara default
    {
      path: "/",
      element: <Navigate to="/login" replace />, // Mengarahkan '/' ke '/login'
    },
    
    // Rute Dashboard
    {
      path: "/dashboard",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    
    // Rute Login
    {
      path: "/login",
      element: <SignInPage />,
    },
    
    // Rute Register
    {
      path: "/register",
      element: <SignUpPage />,
    },
    
    // 2. RUTE 404 (CATCH-ALL): Jika path tidak cocok
    {
      path: "*",
      element: <ErrorPage />, // Menggunakan ErrorPage untuk menangani 404
    },
  ]);

  return (
    // Hapus duplikasi <RouterProvider>
    <RouterProvider router={myRouter} />
  );
}

export default App;
// Hapus export default yang duplikat