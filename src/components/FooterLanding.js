export default function FooterLanding() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 items-start">
          <div>
            <img src="/img/logo.jpg" alt="Knottie Handmade" className="w-40 mb-4" />
            <p className="text-gray-400 mb-4">𝐒𝐭𝐲𝐥𝐞 𝐢𝐧 𝐄𝐯𝐞𝐫𝐲 𝐊𝐧𝐨𝐭, 𝐌𝐚𝐝𝐞 𝐭𝐨 𝐁𝐞 𝐘𝐨𝐮</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 Hoa Lac Hi-tech Park</p>
              <p>✉️ <a href="mailto:knotiee.handmade@gmail.com" className="hover:text-pink-400">knotiee.handmade@gmail.com</a></p>
              <p>📞 <a href="tel:+84352016203" className="hover:text-pink-400">0352 016 203</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow</h4>
            <div className="flex flex-col gap-3 text-gray-400">
                <a href="https://www.facebook.com/profile.php?id=61587239675982" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity bg-blue-600">
                  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.92v-7.02H8.06v-2.9h2.24V9.41c0-2.22 1.32-3.44 3.34-3.44.97 0 1.99.17 1.99.17v2.19h-1.12c-1.11 0-1.45.69-1.45 1.4v1.68h2.47l-.39 2.9h-2.08V22c4.78-.79 8.44-4.93 8.44-9.93z" fill="#fff"/>
                  </svg>
                </a>
                <a href="https://zalo.me/0352016203" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity bg-[#0FB4A3]">
                  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 5.92 2 10.5c0 2.86 2.05 5.42 5.18 6.78L7 22l4.05-2.12c.6.09 1.21.14 1.85.14 5.52 0 10-3.92 10-8.5S17.52 2 12 2z" fill="#fff"/>
                    <path d="M8.9 8.2c.32-.4.84-.62 1.39-.62.6 0 1.09.26 1.39.7.3.43.35.97.12 1.45-.22.48-.68.77-1.2.77-.46 0-.85-.22-1.14-.57-.3-.36-.6-.78-.56-1.13.02-.18.07-.33.0-.5z" fill="#0B6" opacity="0"/>
                    <text x="7" y="16" fill="#fff" fontWeight="700" fontSize="10">Zalo</text>
                  </svg>
                </a>
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
