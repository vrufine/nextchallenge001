import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a className="flex justify-center items-center">
        <Image
          src="/jobbatical-logo-vector.svg"
          alt="Job List App"
          height={100}
          width={200}
          layout="intrinsic"
          objectFit="contain"
          objectPosition="center"
        />
      </a>
    </nav>
  )
}

export default Navbar
