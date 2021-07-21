import { MovieCard } from "./movieCard";
import styles from "./MovieGrid.module.css";
import movies from "./movies.json";
export function MoviesGrid() {
    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie)=>(
             <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}