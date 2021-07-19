import { MoviesGrid } from "./MovieGrid";
import styles from "./App.module.css";

export function App() {
return ( 
    <article>
        <header>
            <h1 className={styles.title}>
                Famous Movies
            </h1>
        </header>

        <main>
            <MoviesGrid></MoviesGrid>
        </main>
    </article> 
);
}
