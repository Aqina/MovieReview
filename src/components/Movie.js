import React from 'react'
import { NavLink, useParams } from "react-router-dom";
// import useFetch from "./useFetch";
import { API_URL } from './context';
import { useEffect } from 'react';

const Movie = () => {  //single movie
  const {id}=useParams();
  console.log(id);

    const [movie, setMovies] = React.useState(""); 
    const [isLoading,setIsLoading]=React.useState(true); //found or not found tracker
    const fetchMovies = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response==='True'){
          setIsLoading(false);
          setMovies(data);
        }
        // else
        // {
        //   setIsError({show:true,msg:data.Error})
        // }
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchMovies(`${API_URL}&i=${id}`);
    }, [id]);

  // const { isLoading, movie, isError } = useFetch(`&i=${id}`);
  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  
  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/MovieReview" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Movie;