import React, { useState,useEffect } from "react";
import MovieCard from './MovieCard'





function MovieList({movies}) {
  
 
          // List of all movies all the filters
        const [filteredList, setFilteredList] = useState(movies);
      // Selected Titlefilter
  const [selectedTitle, setSelectedTitle] = useState("");
  // Selected Rate filter
  const [selectedRate, setSelectedRate] = useState();
  const filterByTitle = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedTitle) {
      return filteredData;
    }

    const filteredMovies = filteredData.filter(
      (movie) => movie.title===selectedTitle
    );
    return filteredMovies;
  };

  const filterByRate = (filteredData) => {
    // Avoid filter for null value
    if (!selectedRate) {
      return filteredData;
    }

    const filteredMovies = filteredData.filter(
      (movie) => movie.rate === selectedRate
    );
    return filteredMovies;
  };

  // Update seletedTitle state
  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  // Toggle seletedRate state
  const handleRateChange = (event) => {
    const inputRate = Number(event.target.id);

    if (inputRate === selectedRate) {
      setSelectedRate("");
    } else {
      setSelectedRate(inputRate);
    }
  };

  useEffect(() => {
    var filteredData = filterByTitle(movies);
    filteredData = filterByRate(filteredData);
    setFilteredList(filteredData);
  }, [selectedTitle, selectedRate]);
     
  return (
    <>
    <div>Filter by Title :</div>
        <select
          id="title-input"
          value={selectedTitle}
          onChange={handleTitleChange}
        >
          <option value="">All</option>
          <option value="Titanic">Titanic</option>
          <option value="The Godfather">The Godfather</option>
          <option value="Schindler's List">Schindler's List</option>
          <option value="The Shawshank Redemption">The Shawshank Redemption</option>
          <option value="12 Angry Men">12 Angry Men</option>
          <option value="The Dark Knight">The Dark Knight</option>
          <option value="Pulp Fiction">Pulp Fiction</option>
        </select>

        <div>Filter by Rate</div>
        <div id="Title-options" onClick={handleRateChange}>
        <div
          className={selectedRate === 1 ? "active-option" : "filter-option"}
          id="1"
        >
          ⭐
        </div>
        <div
          className={selectedRate === 2 ? "active-option" : "filter-option"}
          id="2"
        >
          ⭐⭐
        </div>
        <div
          className={selectedRate === 3 ? "active-option" : "filter-option"}
          id="3"
        >
          ⭐⭐⭐
        </div>
        <div
          className={selectedRate === 4 ? "active-option" : "filter-option"}
          id="4"
        >
         ⭐⭐⭐⭐
        </div>
        <div
          className={selectedRate === 5 ? "active-option" : "filter-option"}
          id="5"
        >
          ⭐⭐⭐⭐⭐
        </div>
      </div>
            <div className='row justify-content-center'>
                {filteredList.map((item,index)=>{
                    return (
                      <>
                        <MovieCard
                        item={item}
                        key={index}
                        />
                        
                
                       </> 
                    )
                    
                        

                }
                )}
                
            
            </div>
        
        </>

  )
}

export default MovieList
