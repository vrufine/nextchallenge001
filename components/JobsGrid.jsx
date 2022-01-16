import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "../styles/JobsGrid.module.css"

const JobsGrid = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("/api/jobs")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(console.error)
  })

  return (
    <div className={styles.jobsGrid}>
      {jobs.map(job => {
        return (
          <a
            key={job.id}
            href={job.applyUrl}
            target="_blank"
            className={styles.card}
            rel="noreferrer"
          >
            <Image
              src={
                job?.company?.logoUrl ||
                `https://via.placeholder.com/1000?text=${
                  job?.company?.name || "No Image"
                }`
              }
              alt="Company logo"
              width={100}
              height={100}
              className="rounded-full"
            ></Image>

            <div className={styles.heading}>
              <h2>
                {job.isFeatured && (
                  <div className={styles.featured}>Featured</div>
                )}
                <div>{job.title}</div>
              </h2>
              <div className="flex gap-2 flex-wrap my-2">
                {job.tags.map(tag => {
                  return (
                    <div key={tag.id + job.id} className={styles.tag}>
                      {tag.name}
                    </div>
                  )
                })}
              </div>
            </div>
            <p>Company: {job?.company?.name}</p>
            <p>Location: {job.locationNames || "Remote"}</p>
          </a>
        )
      })}
    </div>
  )
}

export default JobsGrid
