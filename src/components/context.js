import React, { useContext, useEffect } from 'react';

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = React.useState([]); //empty array
  const [isLoading,setIsLoading]=React.useState(true); //found or not found tracker
  const [isError,setIsError]=React.useState({show:"false",msg:""})
  const [query,setQuery]=React.useState(""); 
  const fetchMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if(data.Response==='True'){
        setIsLoading(false);
        setIsError({show:false,msg:""})
        setMovies(data.Search);
      }
      else
      {
        setIsError({show:true,msg:data.Error})
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // if(query)
    setTimeout(() => {
      fetchMovies(`${API_URL}&s=${query||"popular"}&type=movie`);
    }, 1000);
  }, [query]);

  return (
    <AppContext.Provider value={{isLoading,movies,isError,query,setQuery}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
