import React, { useEffect, useState } from 'react';
import axios from '../Utils/Axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow }) => {

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData(); 
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "640px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 style={{color:"white", paddingLeft: "50px"}}>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;

// import React, { useEffect, useState } from 'react';
// import axios from '../Utils/Axios';
// import './Row.css';

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const base_url = "https://image.tmdb.org/t/p/original";
// //   const base_url='https://api.themoviedb.org/3'

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const request = await axios.get(fetchUrl);
//         console.log("API Response:", request.data); // Debug the response
//         setMovies(request.data.results || []);
//       } catch (error) {
//         console.log("error", error);
//         setMovies([]);
//       }
//     };
//     fetchData(); 
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//     // Placeholder for trailer functionality
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row__posters">
//         {movies.map((movie, index) => (
//           <img
//             // onClick={() => handleClick(movie)}
//             key={index}
//             src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}` || `${base_url}/placeholder.jpg`}
//             alt={movie?.name || "Movie"}
//             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Row;