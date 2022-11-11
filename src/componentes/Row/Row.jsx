import React, { useEffect, useState} from 'react'
import { getMovies } from '../../request/api';
import "./Row.scss"
/*import Carousel from "react-elastic-carousel";*/


const imageHost = "https://image.tmdb.org/t/p/original/";

function Row({title, path}) {
    const [movies, setMovies] = React.useState([]);
     
    const fetchMovies = async(_path) => {
        try{
            const data = await getMovies(_path);
            console.log("data",data)
            setMovies(data?.results)
        }catch (error) {
            console.log("fetchMovies error:",error)
        }
    };

    useEffect(() =>{
        fetchMovies(path);
    }, [path]);

    /*const breakPoints = [
        { width: 100, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
        { width: 100, itemsToShow: 5 },
        { width: 550, itemsToShow: 6},

      ];*/
    /* para moestrar el trailer del la pelicula */
    const opts ={
        height:"390",
        width:"100%",
        playerVars:{

            autoplay:1,
        },
    };

    return (
    <div className='row-container'>
        <h2 className='row-header'>{title}</h2>
        <div id='slider' className='row-cards'>
            {/*<Carousel className='carousel' breakPoints={breakPoints}>*/}
            {movies?.map((movi) => {
                return(
                    <img className='movie-card'
                        key={movi.id}
                        src={`${imageHost}${movi.poster_path}`}
                        alt={movi.title}
                    />
                )
            })}
            {/*</Carousel>*/}
        </div>
    </div>
  )
}

export default Row