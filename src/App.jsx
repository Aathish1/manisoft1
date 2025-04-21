import React from 'react';

const App = () => {
  return (
    <div className="font-sans text-gray-700">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <div className="text-2xl font-bold">QUANTUM</div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Services</a>
          <a href="#" className="hover:text-green-600">About</a>
          <a href="#" className="hover:text-green-600">Blog</a>
          <a href="#" className="hover:text-green-600">Pages</a>
          <a href="#" className="hover:text-green-600">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-center p-10">
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">Investment Responsive Free Website Templates</h1>
            <p className="mb-4">✔ Build with a bootstrap framework.<br />✔ Cross browser supported.</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
              Get Free Template
            </button>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="/your-image-path.png" alt="Happy customer" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">📈</div>
            <h3 className="font-semibold mb-2">Brokerage</h3>
            <p className="text-gray-500 text-sm">Erosed senectus morbiie aliquet in congue eros disened resone.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🐷💰</div>
            <h3 className="font-semibold mb-2">Mutual Fund</h3>
            <p className="text-gray-500 text-sm">Consequat erosed ones soneconer incididunt phasellus loreet volutpat.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-semibold mb-2">Insurance</h3>
            <p className="text-gray-500 text-sm">Intrigo consequat erosed soneon tempor esenatu futrum tempor felis.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💡💵</div>
            <h3 className="font-semibold mb-2">Valuable Services</h3>
            <p className="text-gray-500 text-sm">Metrop consequat erosed senoleon alicene adoles egestas tellus.</p>
          </div>
        </div>
      </section>

      {/* Footer Logo Bar */}
      <footer className="py-8 bg-gray-100">
        <div className="flex flex-wrap justify-center gap-8">
          <span className="text-gray-400">INVESTMENTLOGO</span>
          <span className="text-gray-400">FINANCIAL SERVICES</span>
          <span className="text-gray-400">FINANCIAL GROUP</span>
          <span className="text-gray-400">DUMMYLOGO</span>
          <span className="text-gray-400">INVESTMENTLOGO</span>
          <span className="text-gray-400">FINANCIAL SERVICES</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
