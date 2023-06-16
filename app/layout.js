import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header/page.jsx";
import Footer from "./components/footer/page.jsx";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "గ్రామ-వార్డు సచివాలయము",
  description: "గ్రామ-వార్డు సచివాలయము Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}