import { combineReducers } from 'redux';

import addCountryReducer from './addCountryReducer';

export default combineReducers({
    addCountryReducer: addCountryReducer
})