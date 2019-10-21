import axios from "axios";

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const FETCH_GENRE = 'FETCH_GENRE';
export const FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS';
export const FETCH_GENRE_ERROR = 'FETCH_GENRE_ERROR';

export const FETCH_DETAILS = 'FETCH_DETAILS';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR';

export const fetchMovie = () => async dispatch => {
    dispatch({
        type: FETCH_MOVIES
    });
    try {
        const { data } = await axios.get("/movie/now_playing");
        dispatch({
            type: FETCH_MOVIES_SUCCESS,
            payload: {
                data: data.results
            }
        })
    } catch(e) {
        dispatch({
            type: FETCH_MOVIES_ERROR,
            payload: {
                error: e
            }
        })
        console.log(e, 'Error');
    }
}

export const fetchGenre = () => async dispatch => {
    dispatch({
        type: FETCH_GENRE
    });
    try {
        const { data } = await axios.get("/genre/movie/list");
        dispatch({
            type: FETCH_GENRE_SUCCESS,
            payload: {
                data: data.genres.reduce((start, item) => ({
                    ...start,
                    [item.id]: item.name
                }), {})
            }
        })
    } catch(e) {
        dispatch({
            type: FETCH_GENRE_ERROR,
            payload: {
                error: e
            }
        })
        console.log(e, 'Error');
    }
}

export const fetchDetails = ( movie_id ) => async dispatch => {
    dispatch({
        type: FETCH_DETAILS
    });
    try {
        const { data } = await axios.get(`/movie/${movie_id}`);
        dispatch({
            type: FETCH_DETAILS_SUCCESS,
            payload: {
                data: data
            }
        })
    } catch(e) {
        dispatch({
            type: FETCH_GENRE_ERROR,
            payload: {
                error: e
            }
        })
        console.log(e, 'Error');
    }
} 