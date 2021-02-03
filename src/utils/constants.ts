export const PORT = process.env.PORT 
export const API_KEY = process.env.API_KEY
export const IMAGE_PATH = "https://image.tmdb.org/t/p/w300"
export const BASE_PATH = "https://api.themoviedb.org/3"
export const GENRE_URL = `${BASE_PATH}/genre/movie/list`
export const POPULAR_MOVIE_URL = `${BASE_PATH}/movie/popular`
export const TOP_RATED_MOVIES_URL = `${BASE_PATH}/movie/top_rated`
export const UPCOMING_MOVIE_URL = `${BASE_PATH}/movie/upcoming`
export const LATEST_MOVIE_URL = `${BASE_PATH}/movie/latest`
export const NOW_PLAYING_URL = `${BASE_PATH}/movie/now_playing`
export const DISCOVER_MOVIE_URL = `${BASE_PATH}/discover/movie`
export const DETAIL_MOVIE_URL = `${BASE_PATH}/movie`
export const SEARCH_MOVIE_URL = `${BASE_PATH}/search/movie`
export const TRENDING_MOVIE_URL = `${BASE_PATH}/trending/movie/day`
export const CAST_URL = `${BASE_PATH}/movie`

export const PROD = process.env.NODE_ENV === "production"