/* Esta en la clave para poder acceder al contenido de las rutas en donde estan los videos */
const API_KEY = "dcfedb1dcfcb112af5e9e476965301bf";

/* Ruta de cada categoria de video con su nombre */
const Pops = [

    {
        name: "Trennding",
        title: "Peliculas Populares",
        path:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    },
    {
        name: "Play Now",
        title: "En Cartelera",
        path: `/movie/now_playing?api_key=${API_KEY}&language=en-US`
    },
    {
        name: "Upcoming",
        title: "Coming Soon",
        path: `/movie/upcoming?api_key=${API_KEY}&language=en-US`
    },
    {
        name: "top_rated",
        title: "Top",
        path: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    {
        name: "trending",
        title: "Trending",
        path: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },

]

/* Funcion en donde se intenta entrar a las apis para obtener su contenido y convertirlo en objetos */
export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    }catch (error){
        console.log("error getMovies: ",error);
    }
};

export default Pops;

