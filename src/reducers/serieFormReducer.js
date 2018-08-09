import { SET_FIELD } from '../actions';

const initialState = {
    id: null,
    title: '',
    gender: '',
    rate: 0,
    img: '',
    description: ''
};

const serieFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIELD:
            return {
                ...state,
                [action.field]: action.value
            };
        default:
            return state;
    }
}

export default serieFormReducer;