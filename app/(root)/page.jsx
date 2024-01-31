import AboutSelf from "@/Components/AboutSelf";
import Collaboration from "@/Components/Collaboration";
import Hello from "@/Components/Hello";
import Techstack from "@/Components/Techstack";
import Testimonial from "@/Components/Testimonial";
import Topproject from "@/Components/Topproject";



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
