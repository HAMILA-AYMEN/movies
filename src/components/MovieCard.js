import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from '@material-ui/lab/Rating';
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom'








function MovieCard({movie}) {
  const navigate = useNavigate();

    const navigateToTrailer = () => {
      // 👇️ navigate to /Trailer
      navigate(`/Trailer/${movie.id}`);
    };
 
  
  
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img id='img' variant="top" src={movie.posterUrl}  />
      <Card.Body>
        <Card.Title >{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary" onClick={navigateToTrailer}>Go Trailer</Button>
       
       
        <Rating
          name="Rating Label"
          value={movie.rate}
         
        />
      

        
        
      </Card.Body>
      
    </Card>
    
  );
}

export default MovieCard;