import Head from "next/head"
import JobsGrid from "../components/JobsGrid"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Job List App | Home</title>
        <meta name="keywords" content="job list app jobbatical" />
      </Head>
      <div className={styles.home}>
        <div className="px-4">
          <h1 className="mb-6">Jobs</h1>
        </div>

        <JobsGrid></JobsGrid>
      </div>
    </>
  )
}
