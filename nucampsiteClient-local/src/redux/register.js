import * as ActionTypes from './ActionTypes';



export const Register = ( state = {
    isLoading: false,
    errMess: '',
    user: {}
}, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_USER_REQUEST:
            return {...state, isLoading: true, user: action.payload };
        case ActionTypes.REGISTER_USER_SUCCESS:
            return {...state, isLoading: false, user:{} }; //show on backend
        case ActionTypes.REGISTER_USER_FAILURE:
            return {...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
}