import {createStore} from 'redux'

const defaultState = {
    cityName : null,
    temp : null,
    isLoading: false,
    error: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_FETCH':
            return {isLoading: true,cityName: null,temp: null, error: false}
        case 'FETCH_SUCCESS':
            return {isLoading: false,cityName: action.cityName,temp: action.temp, error: false}
        case 'FETCH_ERROR':
            return {isLoading: false,cityName: null,temp: null, error: true}
    
        default:
            break;
    }
    return state
}

const store = createStore(reducer)

export default store