import React from 'react'
import { useParams } from 'react-router-dom'


function Trailer({movies}) {
    const {id}=useParams()
const movie=movies.find(movie=>movie.id==id)
  return (
    <div>
        <h2>{movie.title}</h2>
      <iframe
        src={movie.trailer}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
      <h2>{movie.description}</h2>
     
     
    </div>
  )
}

export default Trailer
