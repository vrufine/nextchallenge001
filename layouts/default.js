import Footer from "../components/Footer.jsx"
import Navbar from "../components/Navbar.jsx"

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-indigo-50">
      <Navbar />
      <div className="my-10">{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
