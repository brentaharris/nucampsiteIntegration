import * as ActionTypes from './ActionTypes';

export const Register = ( state = {
    isLoading: false,
    errMess: null,
}, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_USER_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: false,
                user: action.creds
            };
        case ActionTypes.REGISTER_USER_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: false, /////???
                errMess: '',
                payload: action.payload
                // token: action.token //STILL NEED THIS???? OR DIFFERENT
            };
        case ActionTypes.REGISTER_USER_FAILURE:
            return {...state,
                isLoading: false,
                isAuthenticated: false, /////?
                errMess: action.message
            };
        default:
            return state;
    }
}