import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nirex - Portfolio",
  description: "Nirex portfolio",
  icons: {
    icon: "/favion.icon",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          showSpinner={false}
          height={3}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
      </body>
    </html>
  );
}
