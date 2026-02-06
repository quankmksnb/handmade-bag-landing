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
            <h1 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Túi Len Thủ Công – <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Dễ thương, Bền, Riêng của bạn</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Mỗi chiếc túi được làm bằng sợi cotton mềm cao cấp, màu sắc tươi lâu. Chọn mẫu và tùy chỉnh màu để tạo dấu ấn riêng.
            </p>

            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button onClick={() => scrollToSection('cta')} className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-110 transition-all duration-300">Đặt hàng</button>
              <button onClick={() => scrollToSection('products')} className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg hover:scale-105 transition-all duration-300">Xem bộ sưu tập</button>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🧶</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">100% Thủ công</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl mb-2">↩️</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">Đổi trả 7 ngày</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🚚</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">Giao hàng toàn quốc</div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" className="relative">
            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <img src="/img/anh1.jpg" alt="Handmade bag" className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-100 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center text-3xl sm:text-4xl shadow-lg animate-bounce">✨</div>
          </div>
        </div>
      </div>
    </section>
  );
}
