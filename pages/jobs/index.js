import Head from "next/head"
import Link from "next/link"
import styles from "./../../styles/Jobs.module.css"

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return {
      props: {
        jobs: data
      }
    }
  } catch (error) {
    console.error(`error:`)
    return {
      props: {}
    }
  }
}

const Jobs = ({ jobs }) => {
  return (
    <>
      <Head>
        <title>Job List App | List</title>
      </Head>
      <div className={styles.jobs}>
        <h1>/jobs</h1>

        <ul>
          {jobs.map(job => (
            <li key={job.id} className="my-4">
              <Link href={"/jobs/" + job.id}>
                <a className="capitalize font-semibold text-lg">{job.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Jobs
