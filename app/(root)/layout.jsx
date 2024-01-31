import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
