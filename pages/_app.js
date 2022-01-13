import DefaultLayout from "../layouts/default"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
