import AboutSelf from "@/components/AboutSelf";
import Collaboration from "@/components/Collaboration";
import Hello from "@/components/Hello";
import Techstack from "@/components/Techstack";
import Testimonial from "@/components/Testimonial";
import Topproject from "@/components/Topproject";



export default function Home() {
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
