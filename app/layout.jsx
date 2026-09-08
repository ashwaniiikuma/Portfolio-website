import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Ashwani portfolio",
  description: "Portfolio built with next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark ">
      <body className={`${font.className} antialiased overflow-x-hidden   leading-8  dark:bg-darkTheme dark:text-white`}>
        {/* Horizontal overflow prevention wrapped inside a container */}
          <Navbar />
          {children}
        
      </body>
    </html>
  );
}