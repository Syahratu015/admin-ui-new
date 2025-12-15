// File: src/pages/dashboard.jsx

import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card"; // Component Card

function DashboardPage() { 
  return (
    <MainLayout>
        
      {/* Grid Container Utama: 12 kolom, 3 baris, jarak 6, dan tinggi penuh */}
      <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">
        
        {/* ROW 1 (3 Cards - Masing-masing 4 kolom) */}
        
        {/* Card 1: Total Balance */}
        <div className="sm:col-span-4 h-full"> 
          <Card
            title="Total Balance"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        
        {/* Card 2: Goals */}
        <div className="sm:col-span-4 h-full"> 
          <Card
            title="Goals"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        
        {/* Card 3: Upcoming Bill */}
        <div className="sm:col-span-4 h-full"> 
          <Card
            title="Upcoming Bill"
            link="/bill"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        
        {/* ROW 2 & 3 (2 Cards - 1 Card merentang 2 baris, 1 Card merentang 8 kolom) */}
        
        {/* Card 4: Recent Transactions (Merentang 4 kolom dan 2 baris) */}
        <div className="sm:col-span-4 sm:row-span-2 h-full">
          <Card
            title="Recent Transactions"
            link="/transactions"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        
        {/* Card 5: Statistics (Merentang 8 kolom di baris kedua) */}
        <div className="sm:col-span-8 h-full">
          <Card
            title="Statistics"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        
        {/* Card 6: Expenses Breakdown (Merentang 8 kolom di baris ketiga) */}
        <div className="sm:col-span-8 h-full">
          <Card
            title="Expenses Breakdown"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        
      </div>
        
    </MainLayout>
  );
}

export default DashboardPage;