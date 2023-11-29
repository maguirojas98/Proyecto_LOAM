import axios from 'axios';
// enpoints
const trendingMoviesEndpoint='https://api.themoviedb.org/3/trending/movie/week?api_key=cf161086749eac1388bb66692fae9307'
const upcomingMoviesEndpoint='https:api.themoviedb.org/3/movie/upcoming?api_key=cf161086749eac1388bb66692fae9307'
const topRatedMoviesEndpoint='https:api.themoviedb.org/3/movie/top_rated?api_key=cf161086749eac1388bb66692fae9307'

//dymanic enpoint
const movieDetailsEnpoint = id=> `https:api.themoviedb.org/3/movie/${id}?api_key=cf161086749eac1388bb66692fae9307`
const movieCreditsEnpoint = id => `https:api.themoviedb.org/3/movie/${id}/credits?api_key=cf161086749eac1388bb66692fae9307`
const similarMoviesEnpoint = id => `https:api.themoviedb.org/3/movie/${id}/similar?api_key=cf161086749eac1388bb66692fae9307`
const searchMoviesEnpoint =  `https:api.themoviedb.org/3/search/movie?api_key=cf161086749eac1388bb66692fae9307`

const personDetailsEnpoint = id => `https:api.themoviedb.org/3/person/${id}?api_key=cf161086749eac1388bb66692fae9307`
const personMoviesEnpoint = id => `https:api.themoviedb.org/3/person/${id}/movie_credits?api_key=cf161086749eac1388bb66692fae9307`


export const image500 = path=>path? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path=>path? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path=>path? `https://image.tmdb.org/t/p/w185${path}` : null;

// fallback images 
export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

const genres = '`https://api.themoviedb.org/3/genre/movie/list?api_key=cf161086749eac1388bb66692fae9307`'
const movieGenres = genre => `https://api.themoviedb.org/3/discover/movie?api_key=cf161086749eac1388bb66692fae9307&with_genres=${genre}`

const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    };

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}


// home screen apis
export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint);
}
export const fetchUpcomingMovies = ()=>{
    return apiCall(upcomingMoviesEndpoint);
}
export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesEndpoint);
}

export const fetchGenres = ()=>{
    return apiCall(genres);
}

// movie screen apis
export const fetchMovieDetails = (id)=>{
    //console.log(id);
    return apiCall(movieDetailsEnpoint(id));
}
export const fetchMovieCredits = (movieId)=>{
    return apiCall(movieCreditsEnpoint(movieId));
}
export const fetchSimilarMovies = (movieId)=>{
    return apiCall(similarMoviesEnpoint(movieId));
}
export const fetchMovieGenres = (genre)=>{
    return apiCall(movieGenres(genre));
}

// person screen apis
export const fetchPersonDetails = (personId)=>{
    return apiCall(personDetailsEnpoint(personId));
}
export const fetchPersonMovies = (personId)=>{
    return apiCall(personMoviesEnpoint(personId));
}

// search screen apis
export const searchMovies = (params)=>{
    return apiCall(searchMoviesEnpoint, params);
}



