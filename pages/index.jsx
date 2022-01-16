import Head from "next/head"
import useSWR from "swr"
import JobsGrid from "../components/JobsGrid"
import styles from "../styles/Home.module.css"

const fetcher = url => fetch(url).then(res => res.json())

export default function Home() {
  const { data } = useSWR("/api/jobs", fetcher)

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

        <JobsGrid jobs={data}></JobsGrid>
      </div>
    </>
  )
}
