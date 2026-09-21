// src/app/discover/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DiscoverPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTrend, setSelectedTrend] = useState(null);
  const [likedItems, setLikedItems] = useState({});

  const categories = [
    { id: "all", name: "All", icon: "✨", color: "from-pink-400 to-amber-400" },
    { id: "trending", name: "Trending", icon: "🔥", color: "from-red-400 to-orange-400" },
    { id: "new", name: "New Arrivals", icon: "🆕", color: "from-green-400 to-emerald-400" },
    { id: "traditional", name: "Traditional", icon: "🕌", color: "from-amber-400 to-yellow-400" },
    { id: "modern", name: "Modern", icon: "💫", color: "from-blue-400 to-purple-400" },
    { id: "bridal", name: "Bridal", icon: "👰", color: "from-pink-400 to-rose-400" }
  ];

  const trendingItems = [
    {
      id: 1,
      name: "Temple Jewelry Set",
      category: "traditional",
      image: "🛕",
      price: "$899",
      description: "Traditional temple jewelry set perfect for festivals and special occasions",
      popularity: 98,
      trending: true,
      new: false
    },
    {
      id: 2,
      name: "Minimalist Diamond Choker",
      category: "modern",
      image: "💎",
      price: "$599",
      description: "Elegant diamond choker for daily wear and parties",
      popularity: 95,
      trending: true,
      new: true
    },
    {
      id: 3,
      name: "Pearl Nath Set",
      category: "bridal",
      image: "🦪",
      price: "$449",
      description: "Beautiful pearl nath with chain for bridal look",
      popularity: 96,
      trending: true,
      new: false
    },
    {
      id: 4,
      name: "Rose Gold Bracelet",
      category: "modern",
      image: "📿",
      price: "$299",
      description: "Stylish rose gold bracelet with cubic zirconia stones",
      popularity: 92,
      trending: true,
      new: true
    }
  ];

  const collections = [
    {
      id: 1,
      name: "Royal Heritage",
      description: "Inspired by ancient Indian royalty",
      image: "👑",
      items: 48,
      gradient: "from-amber-700 to-red-700",
      bgImage: "url('/heritage-bg.jpg')"
    },
    {
      id: 2,
      name: "Modern Elegance",
      description: "Contemporary designs for modern women",
      image: "💫",
      items: 56,
      gradient: "from-pink-600 to-purple-600",
      bgImage: "url('/modern-bg.jpg')"
    },
    {
      id: 3,
      name: "Nature's Touch",
      description: "Floral and leaf inspired jewelry",
      image: "🌿",
      items: 42,
      gradient: "from-green-600 to-teal-600",
      bgImage: "url('/nature-bg.jpg')"
    },
    {
      id: 4,
      name: "Celestial Dreams",
      description: "Moon, stars, and cosmic designs",
      image: "🌙",
      items: 35,
      gradient: "from-indigo-600 to-purple-600",
      bgImage: "url('/celestial-bg.jpg')"
    }
  ];

  const trendingStyles = [
    {
      id: 1,
      name: "Layered Necklaces",
      icon: "💎",
      trend: "+245% this month",
      popularity: 98,
      description: "Stack multiple necklaces for a chic look"
    },
    {
      id: 2,
      name: "Pearl Everything",
      icon: "🦪",
      trend: "+189% this month",
      popularity: 95,
      description: "Pearls are making a strong comeback"
    },
    {
      id: 3,
      name: "Chunky Gold",
      icon: "🏅",
      trend: "+167% this month",
      popularity: 92,
      description: "Bold and statement gold pieces"
    },
    {
      id: 4,
      name: "Minimalist Rings",
      icon: "💍",
      trend: "+156% this month",
      popularity: 89,
      description: "Stackable and delicate rings"
    },
    {
      id: 5,
      name: "Nath Revival",
      icon: "✨",
      trend: "+234% this month",
      popularity: 96,
      description: "Traditional nose rings trending"
    },
    {
      id: 6,
      name: "Colored Gemstones",
      icon: "💠",
      trend: "+178% this month",
      popularity: 91,
      description: "Ruby, emerald, and sapphire"
    }
  ];

  const inspirations = [
    {
      id: 1,
      title: "Wedding Season Guide",
      description: "Complete jewelry guide for brides and wedding guests",
      image: "👰",
      category: "Wedding",
      readTime: "5 min read",
      author: "Jewelry Expert"
    },
    {
      id: 2,
      title: "Festival Jewelry Trends 2024",
      description: "What's hot this festive season",
      image: "🎉",
      category: "Trends",
      readTime: "4 min read",
      author: "Style Editor"
    },
    {
      id: 3,
      title: "How to Style Nath",
      description: "Tips to rock the traditional nose ring",
      image: "✨",
      category: "Style Guide",
      readTime: "3 min read",
      author: "Fashion Stylist"
    },
    {
      id: 4,
      title: "Jewelry Care Tips",
      description: "Keep your precious jewelry shining forever",
      image: "🧼",
      category: "Care Guide",
      readTime: "6 min read",
      author: "Expert"
    }
  ];

  const occasions = [
    { name: "Wedding", icon: "💒", color: "from-pink-400 to-rose-400" },
    { name: "Festival", icon: "🎊", color: "from-amber-400 to-orange-400" },
    { name: "Daily Wear", icon: "👗", color: "from-green-400 to-emerald-400" },
    { name: "Party", icon: "🎉", color: "from-purple-400 to-pink-400" },
    { name: "Office", icon: "💼", color: "from-blue-400 to-cyan-400" },
    { name: "Traditional", icon: "🕌", color: "from-yellow-400 to-amber-400" }
  ];

  const toggleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderPopularityBar = (popularity) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
        <div 
          className="bg-gradient-to-r from-pink-500 to-amber-500 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${popularity}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-pink-600 to-amber-600 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-pulse">💎</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-bounce">✨</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">👑</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-4 animate-pulse">
            <span>🔍</span>
            <span>Discover Your Style</span>
            <span>✨</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Discover the World of
            <span className="block bg-gradient-to-r from-amber-200 to-pink-200 bg-clip-text text-transparent">
              Exquisite Jewelry
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            Explore trending styles, curated collections, and find inspiration 
            for every occasion. Your journey to timeless elegance begins here.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-2 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : "text-gray-600 hover:bg-pink-50"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Now Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-4xl animate-pulse">🔥</span>
              Trending Now
            </h2>
            <p className="text-gray-600">Most popular pieces right now</p>
          </div>
          <button className="text-pink-500 hover:text-pink-600 font-semibold flex items-center gap-2 group">
            View All <span className="group-hover:translate-x-1 transition">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-amber-100 via-pink-100 to-yellow-100 flex items-center justify-center">
                <span className="text-6xl transform group-hover:scale-110 transition duration-300">
                  {item.image}
                </span>
                {item.trending && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <span>🔥</span> Trending
                  </div>
                )}
                {item.new && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    New
                  </div>
                )}
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition"
                >
                  <span className={`text-xl ${likedItems[item.id] ? 'text-red-500' : 'text-gray-400'}`}>
                    {likedItems[item.id] ? '❤️' : '🤍'}
                  </span>
                </button>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span className="text-yellow-500">★</span>
                    <span>{item.popularity}% popularity</span>
                  </div>
                  {renderPopularityBar(item.popularity)}
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-amber-400 to-pink-400 text-white py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Curated Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked collections curated by our jewelry experts for every taste and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className={`relative overflow-hidden rounded-2xl h-80 group cursor-pointer bg-gradient-to-br ${collection.gradient}`}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition"></div>
              <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                <div>
                  <span className="text-5xl mb-3 block">{collection.image}</span>
                  <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-sm opacity-90">{collection.description}</p>
                </div>
                <div>
                  <p className="text-sm mb-2">{collection.items} pieces</p>
                  <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition">
                    Explore Collection →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Styles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-pink-50 to-amber-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Trending Styles ✨
            </h2>
            <p className="text-gray-600">What's hot in the jewelry world right now</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingStyles.map((style) => (
              <div
                key={style.id}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => setSelectedTrend(style.id)}
                onMouseLeave={() => setSelectedTrend(null)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{style.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{style.name}</h3>
                  </div>
                  <span className="text-green-500 text-sm font-semibold">{style.trend}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{style.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-semibold">{style.popularity}%</span>
                  </div>
                  {renderPopularityBar(style.popularity)}
                </div>
                {selectedTrend === style.id && (
                  <div className="mt-4 pt-3 border-t border-pink-100 animate-fade-in">
                    <button className="text-pink-500 text-sm font-semibold hover:text-pink-600">
                      Shop {style.name} →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Occasion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop by Occasion
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect jewelry for every moment that matters
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${occasion.color} rounded-2xl p-6 text-center text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="text-4xl mb-2">{occasion.icon}</div>
              <h3 className="font-semibold text-sm">{occasion.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Style Inspiration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>📖</span>
              Style Inspiration
            </h2>
            <p className="text-gray-600">Tips, guides, and trends from our experts</p>
          </div>
          <button className="text-pink-500 hover:text-pink-600 font-semibold flex items-center gap-2 group">
            Read All <span className="group-hover:translate-x-1 transition">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inspirations.map((inspiration) => (
            <div
              key={inspiration.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-amber-100 to-pink-100 flex items-center justify-center">
                <span className="text-5xl">{inspiration.image}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                    {inspiration.category}
                  </span>
                  <span className="text-xs text-gray-500">{inspiration.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{inspiration.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{inspiration.description}</p>
                <p className="text-xs text-gray-400">By {inspiration.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-amber-400 to-pink-400 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="text-5xl mb-4">✨</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Style Inspiration In Your Inbox
          </h2>
          <p className="text-lg mb-6 opacity-95 max-w-2xl mx-auto">
            Subscribe to get weekly jewelry trends, styling tips, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-full text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-4 opacity-80">No spam, unsubscribe anytime</p>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}