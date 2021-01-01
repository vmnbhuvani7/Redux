const { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } = require("./userType")

const initialState = {
    // loading: false,
    // users: JSON.parse(localStorage.getItem('reduxState')) && JSON.parse(localStorage.getItem('reduxState')).user.users
    //     ? JSON.parse(localStorage.getItem('reduxState')).user.users : [],
    // error: '',
    // toggle: JSON.parse(localStorage.getItem('reduxState')) && JSON.parse(localStorage.getItem('reduxState')).user.toggle === false
    //     ? false : true
    loading: false,
    users: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: '',
                // toggle: false
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
                // toggle: true
            }
        default: return state
    }
}

export default reducer;