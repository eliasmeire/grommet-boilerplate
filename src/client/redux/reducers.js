import {
    FETCH_SOMETHING_ERROR,
    FETCH_SOMETHING_PENDING,
    FETCH_SOMETHING_SUCCESS
} from './actions';

const initialState = {
    something: {
        loading: false,
        error: null,
        data: []
    }
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SOMETHING_PENDING:
            return Object.assign({}, state, {
                something: { pending: true }
            });
        case FETCH_SOMETHING_SUCCESS:
            return Object.assign({}, state, {
                something: {
                    data: action.data,
                    pending: false
                }
            });
        case FETCH_SOMETHING_ERROR:
            return Object.assign({}, state, {
                something: {
                    error: action.error,
                    pending: false
                }
            });
        default:
            return state;
    }
};

export default appReducer;