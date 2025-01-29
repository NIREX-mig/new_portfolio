'use client';

import AboutSelf from "@/Components/AboutSelf";
import Hello from "@/Components/Hello";
import Techstack from "@/Components/Techstack";
import Testimonial from "@/Components/Testimonial";
import Topproject from "@/Components/Topproject";
import globalContext from "@/context/context";
import { useContext, useEffect } from "react";



export default function Home() {
  const {setMenuIsOpen} = useContext(globalContext);
  useEffect(()=>{
    setMenuIsOpen(false);
  },[setMenuIsOpen])
  
  return (
    <>
      <Hello/>
      <AboutSelf/>
      <Techstack/>
      <Topproject/>
      <Testimonial/>
    </>
  );
}
