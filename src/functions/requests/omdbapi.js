import { apiKey } from "../../secrets/apiKey"
import axios from 'axios'


export const omdbapi = axios.create({
    baseURL: `http://www.omdbapi.com?&apikey=${apiKey}`,
    validateStatus: false
})