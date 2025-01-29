"use client";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Globalstate from "@/context/State";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCursor from "react-animated-cursor"

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
        <AnimatedCursor
          innerSize={8}
          outerSize={0.5}
          color='91, 233, 185'
          outerAlpha={0.2}
          innerScale={0}
          outerScale={130}
          clickables={[
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "p",
          ]}
          showSystemCursor={true}
          outerStyle={{
            backgroundColor: "white",
            mixBlendMode: 'exclusion'
          }
          }
        />
      </div>
    </Globalstate>
  );
}
