import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      // router.back()
      router.push("/")
    }, 3000)
  }, [router])

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold italic mb-10">
        Oops... Page not found! <span className="not-italic text-5xl">😕</span>
      </h1>
      <p className="text-lg">
        Go back to 👉
        <Link href="/">
          <a className="font-semibold underline">Home</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
