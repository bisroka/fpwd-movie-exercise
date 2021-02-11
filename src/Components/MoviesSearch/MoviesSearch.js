import React, { useContext } from 'react';
import "../../styles/MovieSearch.css"
import { useFormik } from "formik"
import { validationSchema } from "./validationSchema"
import { StoreContext } from "../../store/StoreProvider"

import { getMovie } from "../../functions/requests/search/search"

const MoviesSearch = () => {
    const { setMovies } = useContext(StoreContext)
    const formik = useFormik({
        initialValues: {
          movieToSearch: '',
        },
        validationSchema,
        onSubmit: values => {
            getMovie(values.movieToSearch, setMovies)
        }
      })


      const titleError = formik.errors.movieToSearch ? (
        <p className='has-error'>{formik.errors.movieToSearch}</p>
      ) : null
    
      return (
        
        <>
          <form className="form" onSubmit={formik.handleSubmit}>
            <label htmlFor="">
              <input 
              
              name="movieToSearch"
              onChange={formik.handleChange}
              value={formik.values.movieToSearch} 
              type="text"
              />
              <button className="submit" type="submit">Search</button>
            </label>
          </form>
          {titleError}
        </>
      );
    }
 
export default MoviesSearch;