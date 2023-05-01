import { useEffect, useState } from "react";
import "./styles/Movies.css"
import logo from "../components/images/starwars logo.png"
import loader from "../components/images/star-wars-loading.gif"

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    
    try {
      const res = await fetch("https://swapi.dev/api/films");
      const data = await res.json();
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  return (
    <div className="App-size">
      <img className="logo" src={logo} alt="logo" />
    <div className="App">
      {!isLoading &&
        movies.map((movie) => {
          return (
            <div className="post-card" key={movie.episode_id}>
              <div className="card-content">
              <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.opening_crawl.substring(0,260)}...</p>
          <div className="link"> <a href="google.com"> More Info </a> </div>
          </div>
            </div>
          )
        
        })}
      {!isLoading && movies.length === 0 && <p>There are no movies....</p>}
      {isLoading && <img className="loader" src={loader} alt="loader" /> }
    </div>
    </div>
  );
}
