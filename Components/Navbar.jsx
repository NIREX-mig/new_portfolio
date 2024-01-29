import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <header className=" flex justify-between py-6 px-20">
      <Link href="/">
      <Image src="/assets/logo.jpg" alt="logo" width={110} height={110}/>
      </Link>
      <nav>
        <Link href="/contect">
          <button type="button" className="border-[3px]  capitalize text-xl border-primary text-primary rounded-full px-4 py-2 hover:bg-primary hover:text-tlight" > say hello</button>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
