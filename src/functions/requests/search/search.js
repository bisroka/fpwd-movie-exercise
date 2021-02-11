import { omdbapi } from "../omdbapi"

export async function getMovie(movie, setMovies){
    try{
        const { data } = await omdbapi.get('' , {
            params: {
                t: movie,
                i:'tt3896198'
              }
        })
        if (data.Response === "False"){
            return
        } else if ( data.Response === "True") {
            setMovies(data)
        }
    } catch(error){
        console.error(error)
    }
}