import React from 'react';

function Page1() {
        return (
          <div className="font-sans">
            {/* Top Alert Bar */}
            <div className="bg-black text-white text-center text-sm py-2">
              ⚡ Our commitment to your health and safety. View our guidelines.
            </div>
      
            {/* Navigation */}
            <nav className="flex justify-between items-center px-10 py-5 shadow-md bg-white">
              <div className="text-2xl font-bold">NewWorldSports</div>
              <ul className="flex space-x-8 text-sm font-semibold uppercase">
                <li className="hover:text-blue-600 cursor-pointer">About</li>
                <li className="hover:text-blue-600 cursor-pointer">Facilities</li>
                <li className="hover:text-blue-600 cursor-pointer">Services</li>
                <li className="hover:text-blue-600 cursor-pointer">Membership</li>
              </ul>
              <button className="bg-pink-600 text-white px-5 py-2 rounded-full text-sm hover:bg-pink-500">
                Join Now
              </button>
            </nav>
      
            {/* Hero Section */}
            <header className="relative bg-gradient-to-r from-blue-200 to-blue-400 h-[90vh] flex flex-col justify-center items-center text-center text-white">
              <img 
                src="https://images.unsplash.com/photo-1599058917212-5fa28e870418?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Sport Woman" 
                className="absolute inset-0 object-cover w-full h-full opacity-30"
              />
              <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to NewWorldSports</h1>
              <p className="text-lg md:text-2xl mb-8">Your ultimate destination for fitness and strength.</p>
              <button className="bg-pink-600 px-6 py-3 rounded-full text-lg hover:bg-pink-500">
                Join Now
              </button>
            </header>
      
            {/* Info Section */}
            <section className="flex flex-col md:flex-row justify-center items-center py-16 px-10 gap-10">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Running Man"
                className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover"
              />
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">The NewWorld Experience</h2>
                <p className="text-gray-700 mb-6">
                  Be energized. Click below to start your own path and unlock your limits. 
                  We're here to support your goals and help you write your own fitness story.
                </p>
                <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700">
                  Learn More
                </button>
              </div>
            </section>
          </div>
        );
      }
      

export default Page1;
