import { MoviesGrid } from "./components/MovieGrid";
import styles from "./App.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { MovieCard } from "./components/movieCard";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPAge } from "./pages/LandingPage";
export function App() {
return ( 
    <Router>
        <header>
         <Link to="/"><h1 className={styles.title}>Famous Movies</h1></Link>
         <br/>
         <Link to="/movie"></Link>
        </header>

        <main>
             {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
            <Route exact path="/movies/:movieId"><MovieDetails/></Route>
            <Route path="/"><LandingPAge/></Route>
            </Switch>
        </main>
    </Router> 
);
}
