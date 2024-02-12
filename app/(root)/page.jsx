'use client';

import AboutSelf from "@/Components/AboutSelf";
import Collaboration from "@/Components/Collaboration";
import Hello from "@/Components/Hello";
import Techstack from "@/Components/Techstack";
import Testimonial from "@/Components/Testimonial";
import Topproject from "@/Components/Topproject";
import globalContext from "@/context/context";
import { useContext, useEffect } from "react";



export default function Home() {
  const {menuIsOpen , setMenuIsOpen} = useContext(globalContext);
  useEffect(()=>{
    setMenuIsOpen(false);
  },[])
  
  return (
    <>
      <Hello/>
      <AboutSelf/>
      <Techstack/>
      <Topproject/>
      <Collaboration/>
      <Testimonial/>
    </>
  );
}
