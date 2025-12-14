import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorPage from "./pages/error"; // Ini juga bisa berfungsi sebagai 404
import DashboardPage from "./pages/dashboard";
import { createBrowserRouter, Link, RouterProvider, Navigate } from "react-router-dom"; // Import Navigate

function App() {
  const myRouter = createBrowserRouter([
    // 1. RUTE ROOT / INDEX: Meneruskan pengguna ke halaman Login secara default
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
    
    // 2. RUTE 404 (CATCH-ALL): Jika path tidak cocok di atas
    {
      path: "*",
      element: <ErrorPage />, // Menggunakan ErrorPage untuk menangani 404
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;