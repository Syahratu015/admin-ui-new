import Logo from "../Elements/Logo";
import { Link } from "react-router-dom";

export default function FormSignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">

        <Logo />

        <h2 className="text-center text-lg font-semibold mb-6">
          Sign In to Your Account
        </h2>

        {/* FORM */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button className="w-full bg-teal-600 text-white py-2 rounded">
            Login
          </button>
        </form>

        {/* LINK KE REGISTER */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary font-bold">
            Create an Account
          </Link>
        </p>

      </div>
    </div>
  );
}
