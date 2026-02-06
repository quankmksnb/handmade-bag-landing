import "./globals.css";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

export const metadata = {
  title: "Knottie",
  description: "Túi len thủ công chất lượng cao"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen">
        <AOSInit />
        {/* <Header /> */}
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
