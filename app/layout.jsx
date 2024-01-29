import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Nirex portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
