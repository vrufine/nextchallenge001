import NavLink from "./NavLink"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="bg-slate-400 text-white flex items-center h-14 sticky top-0">
      <div className="container flex flex-row justify-between items-center">
        {/* <div className="flex justify-start w-full max-w-sm relative"> */}
        <Link href="/">
          <a className="flex justify-center items-center">
            <Image
              src="/jobbatical-logo-vector.svg"
              alt="Job List App"
              height={56}
              width={200}
              layout="intrinsic"
              objectFit="contain"
              objectPosition="left"
            />
          </a>
        </Link>
        {/* </div> */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/jobs">Jobs</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
