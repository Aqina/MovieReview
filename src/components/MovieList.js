import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';
// import Search from "./components/Search";
// import MovieList from "./components/MovieList"; 


export default function MovieList() {
  const {movies,isLoading}=useGlobalContext(); //array
  if (isLoading) { //when data takes time to load it will show loading
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  return (
    <>
    <section className="movie-page">
      <div className='grid grid-4-col'>
        {movies.map((currMovie) => {
          const {imdbID,Title,Poster}=currMovie;
          const movieName = Title.substring(0, 15); 
          return (<NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className='card'>
              <div className='card-info'>
                <h2>{movieName.length >=15 ? `${movieName}...`: movieName}</h2>
                <img src={Poster} alt={imdbID}  />    
              </div>
            </div>
          </NavLink>
          );
        })}
      </div>
    </section>
      
    </>
  );
}
