// File: src/components/Elements/Logo.jsx

import React from "react";

// Ubah props menjadi { variant }
function Logo({ variant = "primary" }) { 
// 👆 Menggunakan destructuring langsung dengan default value

  const variantClasses = {
    primary: "text-primary text-4xl",
    secondary: "text-white text-sm sm:text-2xl",
  };

  return (
    <>
      <div
        className={`flex justify-center font-poppins tracking-wide 
          ${variantClasses[variant] || variantClasses.primary}`}
      >
        <span className="font-bold">FINE</span>
        bank
        <span className="font-bold">.IO</span>
      </div>
    </>
  );
}

export default Logo;