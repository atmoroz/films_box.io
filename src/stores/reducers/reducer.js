const initialState = {
    movies: [],
    genres: {},
    movieDetails: {},
    favoriteList: JSON.parse(localStorage.getItem("favoriteId")) || [],
    totalPages: 0,
};

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case 'FETCH_MOVIES_SUCCESS':
            return {
                ...state,
                movies: action.payload.data,
                totalPages: action.payload.totalPages
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
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favoriteList: [...state.favoriteList, state.movieDetails.id]
            };
        case 'REMOVE_IS_FAVORITES':
            return {
                ...state,
                favoriteList: [...state.favoriteList.filter(item => item !== state.movieDetails.id)]
            };
        default: 
            return state;
    }
};

export default reducer;