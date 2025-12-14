import Logo from "../Elements/Logo";
import { Link } from "react-router-dom";

export default function FormSignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">

        <Logo />

        <h2 className="text-center text-lg font-semibold mb-6">
          Create an Account
        </h2>

        {/* FORM */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

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

          <p className="text-xs text-gray-400">
            By continuing, you agree to our{" "}
            <span className="text-primary">terms of service</span>.
          </p>

          <button className="w-full bg-teal-600 text-white py-2 rounded">
            Sign Up
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-3 text-xs text-gray-400">or sign up with</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* GOOGLE BUTTON */}
        <button className="w-full flex items-center justify-center gap-3 bg-gray-100 py-2 rounded">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google"
          />
          Continue with Google
        </button>

        {/* LINK SIGN IN */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold">
            Sign In Here
          </Link>
        </p>

      </div>
    </div>
  );
}
