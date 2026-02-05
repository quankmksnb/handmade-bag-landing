export default function FinalCTA() {
  return (
    <section id="cta" className="py-16 sm:py-20 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl sm:text-6xl mb-6">💬</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Nhắn tin để tìm túi phù hợp với bạn</h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8">Đội ngũ của chúng tôi sẵn sàng hỗ trợ để tạo túi len mơ ước của bạn</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.facebook.com/profile.php?id=61587239675982" target="_blank" rel="noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2" aria-label="Nhắn Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.92v-7.02H8.06v-2.9h2.24V9.41c0-2.22 1.32-3.44 3.34-3.44.97 0 1.99.17 1.99.17v2.19h-1.12c-1.11 0-1.45.69-1.45 1.4v1.68h2.47l-.39 2.9h-2.08V22c4.78-.79 8.44-4.93 8.44-9.93z" fill="#1B74E4"/></svg>
            Nhắn Facebook
          </a>
          <a href="https://zalo.me/0352016203" target="_blank" rel="noreferrer" className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2" aria-label="Nhắn Zalo 0352 016 203"><span>💬</span>Nhắn Zalo</a>
          <a href="tel:+84352016203" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-500 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2" aria-label="Gọi 0352 016 203"><span>📞</span>Gọi: 0352 016 203</a>
        </div>
      </div>
    </section>
  );
}
