import { apiKey } from "../../secrets/apiKey"
import axios from 'axios'


export const omdbapi = axios.create({
    baseURL: `https://www.omdbapi.com?&apikey=${apiKey}`,
    validateStatus: false
})