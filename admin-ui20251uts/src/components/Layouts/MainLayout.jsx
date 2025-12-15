import React from "react"; 
import Logo from "../Elements/Logo"; 
import Input from "../Elements/Input"; // <-- 1. IMPORT KOMPONEN INPUT

function MainLayout(props) {
  const { children } = props;

  return (
    <div className="flex min-h-screen">
      
      {/* BAGIAN KIRI (SIDEBAR) - ASIDE */}
      <aside className="bg-gray-800 w-28 sm:w-64 text-gray-300 flex flex-col justify-between px-7 py-12">
        
        {/* Kontainer Atas */}
        <div>
          {/* LOGO */}
          <div className="mb-10">
            <Logo variant="secondary" /> 
          </div>
          
          {/* Navigasi Utama */}
          <nav className="Nav/Nav">
            
            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
              <div className="mx-auto sm:mx-0">O</div>
              <div className="ms-3 hidden sm:block">Overview</div>
            </div>

            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
              <div className="mx-auto sm:mx-0">B</div>
              <div className="ms-3 hidden sm:block">Balances</div>
            </div>

            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
              <div className="mx-auto sm:mx-0">T</div>
              <div className="ms-3 hidden sm:block">Transactions</div>
            </div>
            
          </nav>
        </div>
        
        {/* Kontainer Bawah */}
        <div>
          {/* LOGOUT */}
          <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md">
            <div className="mx-auto sm:mx-0">L</div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>
          
          {/* Garis Pembatas */}
          <div className="border border-my-10 border-b-gray-600/40 mt-4 mb-4"></div>
          
          {/* INFO USER */}
          <div className="User mt-4">
            <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                Username
                <br />
                View Profile
              </div>
              <div className="hidden sm:block">icon</div>
            </div>
          </div>
        </div>
      </aside>
      
      {/* BAGIAN KANAN (KONTEN UTAMA) */}
      <div className="bg-blue-50 flex-1 flex flex-col">
        
        {/* HEADER */}
        <header className="border border-b border-gray-300 p-4">
          <div className="flex justify-between items-center">
            
            {/* Bagian Kiri: Username & Datetime */}
            <div className="flex items-center space-x-3 text-sm mr-4">
              <div className="font-semibold text-gray-700">Syahratu</div> 
              <div className="text-gray-500">» May 19, 2023</div> 
            </div>
            
            {/* Bagian Kanan: Icon & Search Box */}
            <div className="flex items-center space-x-6 ml-4">
              <div className="text-xl text-gray-600"> Icon</div> 
              
              {/* 2. GANTI DENGAN KOMPONEN INPUT */}
              <div className="flex items-center">
                <Input 
                  placeholder="Search here" 
                  className="bg-white border border-white rounded-lg px-4 py-2 w-56 shadow-sm"
                />
              </div>
            </div>
          </div>
        </header>
        
        {/* MAIN CONTENT */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;