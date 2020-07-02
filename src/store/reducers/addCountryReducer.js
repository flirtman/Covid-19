import { ACTION_ADD_COUNTRY } from '../actions/constants';

const initialState = {
    "recovered" : 0,
    "deaths" : 0,
    "confirmed" : 0,
    "lastChecked" : null,
    "lastReported" : null,
    "location" : null,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case (ACTION_ADD_COUNTRY) :
            return action.payload
        default :
            return state
    }
}