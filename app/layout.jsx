import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nirex",
  description: "Nirex portfolio",
  icons: {
    icon: "/favion.icon",
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={poppins.className}>
          {children}
          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
        </body>
      </html>
  );
}
