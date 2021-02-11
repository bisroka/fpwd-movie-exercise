import React, { useContext } from 'react';
import "../../styles/Movie.css"
import { StoreContext } from '../../store/StoreProvider';
import Ratings from "./subcomponents/Ratings.subcomponents"

const Movie= () => {
    const { movies } = useContext(StoreContext)
    return ( 
        <div className="movie">
            <img className="movie-poster" src={movies.Poster} alt=""/>
            <div className="movie-description">
                <p className="movie-title">{movies.Title} <span>{movies.imdbRating}/10 ({movies.imdbVotes} votes)</span></p>
                <p>{movies.Year}</p>
                <p>by {movies.Director}</p>
                <p>{movies.Genre}</p>
                {movies.Language !== "N/A" ? <p><span className="movie-attribution">Language:</span> {movies.Language}</p>: null}
                {movies.Country !== "N/A" ? <p><span className="movie-attribution">Country:</span> {movies.Country}</p>: null}
                {movies.Production !== "N/A" ? <p><span className="movie-attribution">Production:</span> {movies.Production}</p>: null}
                <p><span className="movie-attribution">Runtime:</span> {movies.Runtime}</p>
                <p>{movies.Plot}</p>
                <p><span className="movie-attribution">Actors: </span>{movies.Actors}</p>
                <p><span className="movie-attribution">Released:</span> {movies.Released}</p>
                <p><span className="movie-attribution">Writers: </span>{movies.Writer}</p>
                {movies.Metascore !== "N/A" ? <p><span className="movie-attribution">Metascore:</span> {movies.Metascore}</p>: null}
                {movies.Awards !== "N/A" ? <p><span className="movie-attribution">Awards:</span> {movies.Awards}</p>: null}
                {movies.BoxOffice !== "N/A" ? <p><span className="movie-attribution">BoxOffice:</span> {movies.BoxOffice}</p>: null}
                {movies.DVD !== "N/A" ? <p><span className="movie-attribution">DVD:</span> {movies.DVD}</p>: null}
                <Ratings />
            </div>
        </div>
    );
}
 
export default Movie