import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Globalstate from "@/context/State";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  return (
    <Globalstate>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </Globalstate>
  );
}
