export default function FinalCTA() {
  return (
    <section id="cta" className="py-16 sm:py-20 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl sm:text-6xl mb-6">💬</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Message us to find the perfect bag for you</h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8">Our team is ready to help you create your dream crochet bag</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"><span>💬</span>Chat on Zalo</a>
          <a href="#" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-500 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"><span>📞</span>Call Now</a>
        </div>
      </div>
    </section>
  );
}
