export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Handmade Crochet Bags – <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Cute, Durable, Uniquely Yours</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Each bag is lovingly crafted with premium soft cotton yarn, featuring vibrant colors that last. 
              Choose your favorite design and customize it with your preferred colors to make it truly yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button onClick={() => scrollToSection('cta')} className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">Order Now</button>
              <button onClick={() => scrollToSection('products')} className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">View Collection</button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🧶</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">100% Handmade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">↩️</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">7-Day Return</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🚚</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">Nationwide Shipping</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center shadow-2xl">
              <div className="text-white text-6xl">👜</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-100 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center text-3xl sm:text-4xl shadow-lg">✨</div>
          </div>
        </div>
      </div>
    </section>
  );
}
