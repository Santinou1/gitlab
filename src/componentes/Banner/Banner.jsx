import React, { useEffect} from 'react';
import Pops, {getMovies} from '../../request/api'
import "./Banner.scss";

function Banner() {

    const [movie,setMovie] = React.useState([]);

    const fetchTrendingMovie = async () => {

      try {
        const trendinCategory = Pops.find(
          (movi) => movi.name === "Trennding"
        );
        const data = await getMovies(trendinCategory.path);
        const movies = data?.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);

      }catch(error){
        console.log("Banner Error FecthTrendingMovie",error)
      }

    };
    useEffect (()=>{
      fetchTrendingMovie();
    },[]);
    
  /* funtion para ocultar texto desbordado */
  function descrip (string,n){
  return string?.length > n ? string.substr(0,n - 1) + "..."  : string;
  }
    return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'> {movie?.title || movie?.name || movie?.original_name} </h1>
          <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
          </div>
          <h1 className='banner__description'>
            {descrip(movie?.overview, 350)}
          </h1>
        </div>
      <div className='banner__fadeButton'/>
    </header>
  )
}

export default Banner