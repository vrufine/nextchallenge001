export default function handler(_req, res) {
  return fetch("https://api.graphql.jobs/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query JobsQuery {
          jobs {
            id
            title
            tags (first: 3) {
              id
              name
            }
            applyUrl
            company {
              name
              logoUrl
            }
            isPublished
            isFeatured
            locationNames
          }
        }`
    })
  })
    .then(res => res.json())
    .then(data => data.data.jobs.filter(job => job.isPublished))
    .then(data => res.json(data))
    .catch(err => {
      console.error(err)
      return res.json([])
    })
}
