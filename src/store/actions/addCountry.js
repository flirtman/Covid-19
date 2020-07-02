import { ACTION_ADD_COUNTRY } from './constants';

export const addCountry = (countryData) => {
    return {
        type: ACTION_ADD_COUNTRY,
        payload: countryData
    }
}