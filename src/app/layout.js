import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bis29",
  description: "This is a portfolio page for Osei Bismark 'Bis29'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
