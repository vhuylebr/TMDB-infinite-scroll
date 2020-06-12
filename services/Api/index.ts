import axios from "axios";

const API = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

API.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api_key'] = process.env.API_KEY;
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