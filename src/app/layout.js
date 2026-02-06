import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Knottie",
  description: "Túi len thủ công chất lượng cao"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
