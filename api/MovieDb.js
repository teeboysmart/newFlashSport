import axios from "axios";
import {apiKey} from '../CONSTANT'

// Endpoint
const apiBaseUrl = "https://api.themoviedb.org/3"
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US` 
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US` 
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?language=en-US` 

// dynamic
const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}?language=en-US`
const movieCreditEndpoint = id => `${apiBaseUrl}/movie/${id}/credits?language=en-US`
const similarMoviesEndpoint = id => `${apiBaseUrl}/movie/${id}/similar?language=en-US`

const personDetailsEndpoint = id => `${apiBaseUrl}/person/${id}?language=en-US`
const personMovieEndpoint = id => `${apiBaseUrl}/person/${id}/movie_credits?language=en-US`  


const apiCall = async (endpoint, params) => {
    const options = {
        method: "GET",
        url: endpoint,
        params: params ? params: {},
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2YxYTQ1MzA1N2JjMjFhOGRhODFmNzI2MDExZWNmYyIsInN1YiI6IjY1YjJlMTIwY2VlNDgxMDBjOGE5ZWVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VFKtVz_oa0pezATxXwhSkGKdNYF9SDt8_O_HyDObREU`
          }
    }

    try {
        const response = await fetch(options.url, options);
        const result = await response.json();
        const responses = result.results
        console.log("Movies =>",responses);
        return responses
      } catch (error) {
        console.error(error);
      }
}


const apiCall2 = async (endpoint, params) => {
    const options = {
        method: "GET",
        url: endpoint,
        params: params ? params: {},
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2YxYTQ1MzA1N2JjMjFhOGRhODFmNzI2MDExZWNmYyIsInN1YiI6IjY1YjJlMTIwY2VlNDgxMDBjOGE5ZWVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VFKtVz_oa0pezATxXwhSkGKdNYF9SDt8_O_HyDObREU`
          }
    }

    try {
        const response = await fetch(options.url, options);
        const result = await response.json();
        const responses = result.results
        // console.log("Movies =>",result);
        return result
      } catch (error) {
        console.error(error);
      }
}

export const fallBackMMoviePoster = "https://th.bing.com/th/id/OIP.VK7lrudg7V-9yAnL7Tj_3wHaHA?w=530&h=501&rs=1&pid=ImgDetMain"
export const fallBackPersonMMoviePoster = "https://thumbs.dreamstime.com/b/inquiry-icon-vector-question-mark-male-user-person-profile-avatar-symbol-help-sign-glyph-pictogram-inquiry-icon-168495532.jpg"

export const image500 = path => path ?  `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path => path ?  `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path => path ?  `https://image.tmdb.org/t/p/w185${path}` : null;

 export const fetchTrendingMoviesEndpoint = () => {
    return apiCall(trendingMoviesEndpoint)
    
}

export const fetchUpcomingMoviesEndpoint = () => {
    return apiCall(upcomingMoviesEndpoint)
}

export const fetchTopRatedMoviesEndpoint = () => {
    return apiCall(topRatedMoviesEndpoint)
}

export const fetchMovieDetails = id => {
    return apiCall2(movieDetailsEndpoint(id));
}

export const fetchMovieCredits = id => {
    return apiCall2(movieCreditEndpoint(id));
}

export const fetchSimilarMovie = id => {
    return apiCall2(similarMoviesEndpoint(id));
}

export const fetchPersonDetailsEndpoint = id => {
    return apiCall2(personDetailsEndpoint(id));
}

export const fetchPersonMovieEndpoint = id => {
    return apiCall2(personMovieEndpoint(id));
}