import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container my-4">{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
