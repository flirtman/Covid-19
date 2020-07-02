import { ACTION_ADD_COUNTRY } from '../actions/constants';

const initialState = {
    "recovered" : 69120,
    "deaths" : 8650,
    "confirmed" : 106097,
    "lastChecked" : "2020-07-01T22:45:51+00:00",
    "lastReported" : "2020-07-01T04:33:52+00:00",
    "location" : "Canada",
}

export default function (state = initialState, action) {
    switch(action.type) {
        case (ACTION_ADD_COUNTRY) :
            return action.payload
        default :
            return state
    }
}