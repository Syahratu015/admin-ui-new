import React, { useState } from "react";

function UserCard({ name, email, street, city }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

      <button
        onClick={handleClick}
        className={
          clicked
            ? "bg-emerald-500 text-white p-2 rounded-md mt-3 hover:bg-emerald-600 transition"
            : "bg-gray-300 text-black p-2 rounded-md mt-3 hover:bg-gray-400 transition"
        }
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;
