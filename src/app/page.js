"use client";

import { useState } from "react";

// Dummy data
const categories = [
  { name: "Rings", icon: "💍", count: 245 },
  { name: "Necklaces", icon: "📿", count: 189 },
  { name: "Earrings", icon: "👂", count: 312 },
  { name: "Bracelets", icon: "⌚", count: 156 },
  { name: "Nose Rings", icon: "👃", count: 98 },
];

const materials = [
  { value: "all", label: "All Materials", icon: "✨" },
  { value: "gold", label: "Gold", icon: "🥇" },
  { value: "silver", label: "Silver", icon: "🥈" },
  { value: "diamond", label: "Diamond", icon: "💎" },
  { value: "platinum", label: "Platinum", icon: "⚪" },
  { value: "rose-gold", label: "Rose Gold", icon: "🌹" },
  { value: "pearl", label: "Pearl", icon: "🦪" },
  { value: "emerald", label: "Emerald", icon: "💚" },
  { value: "nose-pin", label: "Nose Pin", icon: "👃" },
];

const featuredJewels = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: "$2,450",
    category: "Rings",
    material: "diamond",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Gold Chain Necklace",
    price: "$890",
    category: "Necklaces",
    material: "gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    price: "$1,200",
    category: "Earrings",
    material: "pearl",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Silver Tennis Bracelet",
    price: "$3,100",
    category: "Bracelets",
    material: "silver",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Platinum Wedding Band",
    price: "$1,850",
    category: "Rings",
    material: "platinum",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=400",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Rose Gold Pendant",
    price: "$640",
    category: "Necklaces",
    material: "rose-gold",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Emerald Cut Earrings",
    price: "$2,200",
    category: "Earrings",
    material: "emerald",
    image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?w=400",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Diamond Pave Bracelet",
    price: "$4,500",
    category: "Bracelets",
    material: "diamond",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
    rating: 5.0,
  },
  // 🆕 Nose Rings
  {
    id: 9,
    name: "Gold Nose Hoop",
    price: "$320",
    category: "Nose Rings",
    material: "gold",
    image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=400",
    rating: 4.7,
  },
  {
    id: 10,
    name: "Diamond Nose Stud",
    price: "$780",
    category: "Nose Rings",
    material: "diamond",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400",
    rating: 4.9,
  },
  {
    id: 11,
    name: "Silver Nose Pin",
    price: "$180",
    category: "Nose Rings",
    material: "silver",
    image: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=400",
    rating: 4.6,
  },
  {
    id: 12,
    name: "Rose Gold Nose Ring",
    price: "$450",
    category: "Nose Rings",
    material: "rose-gold",
    image: "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?w=400",
    rating: 4.8,
  },
];

export default function Home() {
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [heroMaterial, setHeroMaterial] = useState("gold");

  const filteredJewels =
    selectedMaterial === "all"
      ? featuredJewels
      : featuredJewels.filter((j) => j.material === selectedMaterial);

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

              {/* Hero Material Dropdown */}
              <div className="mb-6 max-w-md">
                <label htmlFor="hero-material" className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Material
                </label>
                <div className="relative">
                  <select
                    id="hero-material"
                    value={heroMaterial}
                    onChange={(e) => setHeroMaterial(e.target.value)}
                    className="w-full appearance-none bg-white border-2 border-amber-200 hover:border-amber-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 rounded-xl px-5 py-3 pr-12 text-gray-800 font-medium cursor-pointer transition-all outline-none"
                  >
                    {materials.map((m) => (
                      <option key={m.value} value={m.value}>
                        {m.icon} {m.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-amber-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Showing: <span className="text-amber-600 font-medium capitalize">{heroMaterial.replace("-", " ")}</span>
                </p>
              </div>

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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

      {/* Featured Products with Material Filter */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Jewels
              </h2>
              <p className="text-gray-600">Handpicked pieces just for you</p>
            </div>

            {/* Material Filter Dropdown */}
            <div className="w-full md:w-72">
              <label htmlFor="filter-material" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Material
              </label>
              <div className="relative">
                <select
                  id="filter-material"
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full appearance-none bg-white border-2 border-amber-200 hover:border-amber-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 rounded-xl px-5 py-3 pr-12 text-gray-800 font-medium cursor-pointer transition-all outline-none"
                >
                  {materials.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.icon} {m.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Active filter chips */}
          {selectedMaterial !== "all" && (
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm text-gray-600">Active filter:</span>
              <button
                onClick={() => setSelectedMaterial("all")}
                className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-amber-200 transition"
              >
                {materials.find((m) => m.value === selectedMaterial)?.icon}
                {materials.find((m) => m.value === selectedMaterial)?.label}
                <span className="text-amber-500">✕</span>
              </button>
              <span className="text-sm text-gray-400">
                {filteredJewels.length} result{filteredJewels.length !== 1 ? "s" : ""}
              </span>
            </div>
          )}

          {/* Products grid */}
          {filteredJewels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredJewels.map((jewel) => (
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
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-yellow-500 text-sm">★</span>
                      <span className="text-sm text-gray-600">{jewel.rating}</span>
                    </div>
                    <p className="text-xs text-amber-600 font-medium capitalize mb-3">
                      {materials.find((m) => m.value === jewel.material)?.icon}{" "}
                      {jewel.material.replace("-", " ")}
                    </p>
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
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-amber-200">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-gray-600">No items found for this material</p>
              <button
                onClick={() => setSelectedMaterial("all")}
                className="mt-4 text-amber-600 font-medium hover:text-amber-700"
              >
                Clear filter
              </button>
            </div>
          )}
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
                <li><a href="#" className="hover:text-amber-400">Nose Rings</a></li>
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