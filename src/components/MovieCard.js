import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from '@material-ui/lab/Rating';
import {useNavigate} from 'react-router-dom'








function MovieCard({item}) {
  const navigate = useNavigate();

    const navigateToTrailer = () => {
      // 👇️ navigate to /Trailer
      navigate(`/Trailer/${item.id}`);
    };
 
  
  
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img id='img' variant="top" src={item.posterUrl} onClick={navigateToTrailer} />
      <Card.Body>
        <Card.Title >{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
       
       
       
        <Rating
          name="Rating Label"
          value={item.rate}
         
        />
      

        
        
      </Card.Body>
      
    </Card>
    
  );
}

export default MovieCard;