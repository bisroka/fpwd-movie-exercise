import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';

const Ratings = () => {
    const { movies } = useContext(StoreContext)
    const ratings = movies.Ratings.map(rat => (
        <p key={rat.Source} ><span className="movie-rating-source">{rat.Source}:</span> {rat.Value}</p>
    ))
    return ( 
    <>
        {
            movies.Ratings.length > 0 ? <div className="movie-ratings"><span className="movie-ratings-title">Ratings:</span> {ratings}</div> : null
        }
     </>);
}
 
export default Ratings;