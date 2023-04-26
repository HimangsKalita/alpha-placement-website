import React from 'react'
import { Link } from 'react-router-dom'

const jobCard = ({job}) => {
  return (
    <Link className='jobCard' to={`/job/${job._id}`}>
        <img src={job.images[0].url} alt={job.title} />
        <p>{job.title}</p>
        <p>{job.description}</p>
        <span>{job.ctc}</span>
    </Link>
  )
}

export default jobCard
