import React from 'react'
// import { useGlobalContext } from './context'
import Search from "./Search";
import MovieList from "./MovieList"; 


export default function Home() {
  return (
    <>
      <div >
        <Search />
        <MovieList />
      </div>
    </>
  );
}
