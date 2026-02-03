export default function Header() {
  return (
    <header className="w-full px-6 py-4 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Handmade Bag
        </h1>

        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">
            Giới thiệu
          </a>
          <a href="#products" className="hover:underline">
            Sản phẩm
          </a>
          <a href="#contact" className="hover:underline">
            Liên hệ
          </a>
        </nav>
      </div>
    </header>
  );
}
