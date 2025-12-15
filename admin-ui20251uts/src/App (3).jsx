import "./App.css";

function App() {
  const courses = [
    {
      title: "System Administration and IT Infrastructure Services",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Operating Systems Becoming a Power User",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Technical Support Fundamentals",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "How to Succeed at: Writing Applications",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Medicine Administration for Carers",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6f188b95?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <>
      <div className="p-6 font-sans bg-gray-50 min-h-screen">
        {/* =========================
            LATIHAN 1 - NAVBAR (Flex)
           ========================= */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            LATIHAN 1 — Navbar dengan Flexbox
          </h2>
          <nav className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-4 rounded-lg">
            <div className="flex items-center gap-3 text-lg font-semibold text-red-700 mb-3 md:mb-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="Logo"
                className="w-8 h-8"
              />
              MyLogo
            </div>
            <ul className="flex flex-col md:flex-row gap-6 text-gray-700">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </section>

        {/* =========================
            LATIHAN 2 - GRID GALERI (Card Pink dengan Foto dan Nama)
           ========================= */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            LATIHAN 2 — Grid Galeri Gambar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="shadow rounded-lg overflow-hidden flex flex-col hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {/* FOTO */}
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-44 object-cover"
                />

                {/* KONTEN */}
                <div className="p-4 bg-red-100 flex flex-col justify-between h-full">
                  {/* Judul */}
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    {course.title}
                  </h3>

                  {/* Box kecil */}
                  <div className="bg-red-50 p-2 rounded-lg mb-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>👥 123 users</span>
                      <span>⏱ 60 min</span>
                    </div>

                    {/* Author */}
                    <div className="mt-3 flex items-center gap-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Syahratu Andhara S"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Syahratu Andhara S
                        </p>
                        <p className="text-xs text-gray-500">Student / Designer</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="bg-white py-2 px-4 rounded shadow text-gray-700 font-semibold">
                      $123
                    </div>
                    <button className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 rounded text-sm">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            LATIHAN 3 - PRICING TABLE
           ========================= */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            LATIHAN 3 — Pricing Table
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Basic</h3>
              <p className="text-3xl font-bold text-red-700 mb-3">Rp 50rb</p>
              <p className="text-sm text-gray-600 mb-4">Untuk pemula.</p>
              <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded">
                Pilih Paket
              </button>
            </div>

            <div className="bg-red-200 p-6 rounded-lg shadow-lg transform scale-105 border border-red-300">
              <h3 className="text-lg font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold text-red-800 mb-3">Rp 100rb</p>
              <p className="text-sm text-gray-600 mb-4">Fitur lebih lengkap.</p>
              <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded">
                Pilih Paket
              </button>
            </div>

            <div className="bg-red-50 p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Premium</h3>
              <p className="text-3xl font-bold text-red-700 mb-3">Rp 200rb</p>
              <p className="text-sm text-gray-600 mb-4">Untuk profesional.</p>
              <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded">
                Pilih Paket
              </button>
            </div>
          </div>
        </section>

        {/* =========================
            LATIHAN 4 - DASHBOARD
           ========================= */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            LATIHAN 4 — Dashboard Layout
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <header className="col-span-12 bg-red-700 text-white p-4 rounded shadow">
              Dashboard Header
            </header>

            <aside className="col-span-12 md:col-span-3 bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-gray-700 mb-2">Sidebar</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>📊 Statistik</li>
                <li>👥 Pengguna</li>
                <li>⚙️ Pengaturan</li>
                <li>📦 Produk</li>
              </ul>
            </aside>

            <main className="col-span-12 md:col-span-9 bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-gray-700 mb-2">Konten Utama</h3>
              <p className="text-sm text-gray-600">
                Area menampilkan data, grafik, atau laporan utama.
              </p>
            </main>

            <footer className="col-span-12 bg-red-700 text-white p-4 rounded shadow">
              Footer © 2025 - MyDashboard
            </footer>
          </div>
        </section>

        {/* =========================
            LATIHAN 5 - CARD PRODUCT
           ========================= */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            LATIHAN 5 — Card Product dengan Flexbox
          </h2>
          <div className="bg-white border rounded-lg p-5 flex flex-col md:flex-row items-center gap-6 shadow">
            <img
              src="https://images.unsplash.com/photo-1606813909355-546b86eeb23f?auto=format&fit=crop&w=600&q=60"
              alt="Produk"
              className="w-full md:w-1/3 rounded object-cover"
            />
            <div className="flex flex-col justify-between text-left">
              <h3 className="font-semibold text-lg mb-2">Laptop Ultrabook 14”</h3>
              <p className="text-sm text-gray-600 mb-3">
                Laptop ringan dengan performa tinggi dan desain elegan.
              </p>
              <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded self-start">
                Beli Sekarang
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
