import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
    <Header />
      <main className={`${inter.className} flex flex-col min-h-screen antialiased`}>
        {children}
      </main>
      <Footer />
    </>
  );
}