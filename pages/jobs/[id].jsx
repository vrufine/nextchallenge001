import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Job = () => {
  const router = useRouter()
  const [job, setData] = useState({})

  useEffect(() => {
    const id = router.query.id
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(job => {
        setData(job)
      })
  })

  return (
    <>
      <Head>
        <title>Job List App | Job #{job.id}</title>
      </Head>
      <div className="p-10 bg-emerald-100">
        <h1 className="text-5xl font-bold italic mb-10">{job.title}</h1>
        <p className="text-xl leading-10">{job.body}</p>
      </div>
    </>
  )
}

export default Job
