import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Globalstate from "@/context/State";

export default function RootLayout({ children }) {
  return (
    <Globalstate>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </Globalstate>
  );
}
