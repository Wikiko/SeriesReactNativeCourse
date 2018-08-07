import {
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from '../actions';

const initialState = null;

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return action.user;
        case USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default userReducer;