import axios from "axios";
const API_KEY = "9f2b4da1f683c576d9af80887567e2c7";

const API = axios.create({
    baseURL: process.env.API_URL || "https://api.themoviedb.org/3",
});

API.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api_key'] = API_KEY;
    return config;
});

API.defaults.headers.common["Content-Type"] = "application/json";

export default class APIManager {

    static getMovies(page: number) {
        return API.get(`/movie/popular`, {
            params: {
                page
            }
        })
    }

    static getMovieDetails(id: number) {
        return API.get(`/movie/${id}`)
    }
}