export default function FinalCTA() {
  return (
    <section id="cta" className="py-16 sm:py-20 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl sm:text-6xl mb-6">💬</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Nhắn tin để tìm túi phù hợp với bạn</h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8">Đội ngũ của chúng tôi sẵn sàng hỗ trợ để tạo túi len mơ ước của bạn</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://zalo.me/0352016203" target="_blank" rel="noreferrer" className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2" aria-label="Nhắn Zalo 0352 016 203"><span>💬</span>Nhắn Zalo</a>
          <a href="tel:+84352016203" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-500 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2" aria-label="Gọi 0352 016 203"><span>📞</span>Gọi: 0352 016 203</a>
        </div>
      </div>
    </section>
  );
}
