import Image from "next/image";

// Dummy data
const categories = [
  { name: "Rings", icon: "💍", count: 245 },
  { name: "Necklaces", icon: "📿", count: 189 },
  { name: "Earrings", icon: "👂", count: 312 },
  { name: "Bracelets", icon: "⌚", count: 156 },
];

const featuredJewels = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: "$2,450",
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Gold Chain Necklace",
    price: "$890",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    price: "$1,200",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Emerald Tennis Bracelet",
    price: "$3,100",
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    rating: 4.7,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💎</span>
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                JewelsGlory
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-amber-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 transition">Collections</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 transition">About</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-amber-600">🔍</button>
              <button className="text-gray-700 hover:text-amber-600">❤️</button>
              <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition text-sm font-medium">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
                ✨ New Collection 2025
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Discover Timeless
                <span className="block bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                  Jewelry Treasures
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Explore our curated collection of fine jewelry. From classic diamonds
                to modern designs, find the perfect piece for every moment.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition font-medium shadow-lg shadow-amber-200">
                  Shop Now
                </button>
                <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-50 transition font-medium">
                  Explore Collections
                </button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <p className="text-3xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-500">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">5K+</p>
                  <p className="text-sm text-gray-500">Unique Pieces</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">4.9★</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-yellow-100 rounded-3xl blur-3xl opacity-40" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
                  alt="Jewelry Hero"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600">Find your perfect piece from our collections</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group cursor-pointer bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Jewels
              </h2>
              <p className="text-gray-600">Handpicked pieces just for you</p>
            </div>
            <a href="#" className="text-amber-600 font-medium hover:text-amber-700 hidden md:block">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJewels.map((jewel) => (
              <div
                key={jewel.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={jewel.image}
                    alt={jewel.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition">
                    ❤️
                  </button>
                  <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs px-3 py-1 rounded-full">
                    {jewel.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1 truncate">
                    {jewel.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-sm text-gray-600">{jewel.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-600">{jewel.price}</span>
                    <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-amber-600 transition">
                      🛒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get 15% Off Your First Order
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Subscribe to our newsletter and discover exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💎</span>
                <h3 className="text-xl font-bold text-white">JewelsGlory</h3>
              </div>
              <p className="text-sm text-gray-400">
                Discover timeless jewelry treasures crafted with love and precision.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400">Rings</a></li>
                <li><a href="#" className="hover:text-amber-400">Necklaces</a></li>
                <li><a href="#" className="hover:text-amber-400">Earrings</a></li>
                <li><a href="#" className="hover:text-amber-400">Bracelets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-amber-400">Shipping</a></li>
                <li><a href="#" className="hover:text-amber-400">Returns</a></li>
                <li><a href="#" className="hover:text-amber-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">📘</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">📸</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2025 JewelsGlory. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}