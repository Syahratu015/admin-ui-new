// File: src/components/Elements/Card.jsx

import React from "react";

function Card(props) {
  // Destructuring props
  const { title, link = false, desc } = props;

  return (
    // 1. TAMBAHKAN flex flex-col dan h-full
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"> 
        
      {/* Header Card */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold text-gray-800">{title}</div>
        
        {/* Link: Tampil jika props 'link' true */}
        {link && (
          <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
            View All
          </div>
        )}
      </div>
      
      {/* Content Card: Deskripsi/Isi Utama */}
      {/* 2. TAMBAHKAN flex-1 agar konten merentang sisa ruang vertikal */}
      <div className="text-gray-600 flex-1">
        {desc}
      </div>
      
    </div>
  );
}

export default Card;