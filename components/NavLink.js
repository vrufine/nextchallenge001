import Link from "next/link"
import { useRouter } from "next/router"

const NavLink = ({ children, href }) => {
  const router = useRouter()
  const classes =
    router.pathname === href ? "border-white" : "border-transparent opacity-50"
  return (
    <Link href={href} passHref>
      <a className={`transition-all font-semibold border-b-4 ${classes}`}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink
