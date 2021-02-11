import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import Movie from "../Movie/Movie"

const MoviesList= () => {
    const { movies } = useContext(StoreContext)
    return ( movies !== '' ? <Movie /> : null );
}
 
export default MoviesList