const initialState = {
    movies: [],
    genres: {},
    movieDetails: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES_SUCCESS':
            return {
                ...state,
                movies: action.payload.data
            };
        case 'FETCH_GENRE_SUCCESS':
            return {
                ...state,
                genres: action.payload.data
            };
        case 'FETCH_DETAILS_SUCCESS':
            return {
                ...state,
                movieDetails: action.payload.data
            };
        default: 
            return state;
    }
}

export default reducer;