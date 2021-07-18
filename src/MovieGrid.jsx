import { MovieCard } from "./movieCard";
import movies from "./movies.json";
export function MoviesGrid() {
    return(
        <ul>
            {movies.map((movie)=>(
             <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}