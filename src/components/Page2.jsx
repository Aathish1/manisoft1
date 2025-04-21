import React from 'react';


const Page2 = () => {
    return (
        <div className="font-sans bg-gray-50 min-h-screen">
          {/* Header */}
          <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Volcan</h1>
            <ul className="flex space-x-8 text-gray-700 font-medium uppercase text-sm">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">Collection</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800">
              Shop Now
            </button>
          </nav>
    
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center justify-center p-10 md:p-20 gap-10">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Bold, Simple, Stylish.  
              </h2>
              <p className="text-gray-600 mb-8">
                Discover the comfort and confidence in every stitch. Volcan T-Shirts — crafted for the modern lifestyle.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800">
                Explore Collection
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1584942223978-2a67b5b93fd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
              alt="TShirt Model" 
              className="rounded-2xl shadow-lg md:w-1/2"
            />
          </section>
    
          {/* Featured Products */}
          <section className="py-16 px-10 bg-white">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Best Sellers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1585386959984-a415522c2702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1535254973040-607a0e64018f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
                .map((url, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                    <img src={url} alt={`TShirt ${index+1}`} className="w-full h-72 object-cover"/>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">Volcan Classic Tee</h4>
                      <p className="text-gray-600">$29.99</p>
                    </div>
                  </div>
              ))}
            </div>
          </section>
    
          {/* Footer */}
          <footer className="text-center py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Volcan TShirt. All rights reserved.
          </footer>
        </div>
      );
    }

export default Page2;
