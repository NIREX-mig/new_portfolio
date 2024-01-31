import Link from "next/link"
import Card from "./Card"

const Topproject = () => {
  return (
    <seciton className=" flex flex-col items-center border py-20">
      <h3 className="capitalize text-4xl font-bold text-center font-[EuroStyle Normal] pb-4 line">my projects</h3>
      <p className="text-xl text-center text-gray-700 pb-10 px-5">Here are a few past design projects I've worked on.</p>
      <div className="p-2 flex flex-wrap lg:w-[95%] w-[98%] gap-5 justify-center mx-auto">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Link href="#" className="pt-10">
      <button type="button" className="capitalize border-[3px] rounded-full py-4 px-10 text-xl border-primary mx-auto text-primary hover:bg-primary hover:text-tlight ">show more</button>
      </Link>
    </seciton>
  )
}

export default Topproject
