export default function FooterLanding() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">Knottie Handmade</h3>
            <p className="text-gray-400 mb-4">Handcrafted with love, made just for you.</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">f</a>
              <a href="#" className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors">📷</a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">Z</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 123 Craft Street, Hanoi</p>
              <p>📞 (+84) 123 456 789</p>
              <p>✉️ hello@lenlinh.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Return Policy</a>
              <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Warranty</a>
              <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Business Hours</h4>
            <div className="space-y-2 text-gray-400">
              <p>Mon - Fri: 9:00 - 18:00</p>
              <p>Sat: 9:00 - 17:00</p>
              <p>Sun: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Knottie Handmade. All rights reserved. Made with 💖</p>
        </div>
      </div>
    </footer>
  );
}
