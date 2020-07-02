import React from 'react';
import Axios from 'axios';


export const getDataCovid = (country) => {
    const request = Axios.get(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${country}`,
    {   
        method : 'GET',
        headers : {
            'x-rapidapi-host' : 'covid-19-coronavirus-statistics.p.rapidapi.com',
            'x-rapidapi-key' : 'd7f2f11128msha58dd360a4162cdp1d6c97jsn601ba234a70b'
        }
    })
    alert('foo');
    return dispatch => {
        request.then(({data}) => {
            dispatch({type: 'ACTION_ADD_COUNTRY', payload: data})
        });
    };
} 

export const fetchApi = (country, addCountryData) => {
    fetch(
        `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${country}`,
        {   
            method : 'GET',
            headers : {
                'x-rapidapi-host' : 'covid-19-coronavirus-statistics.p.rapidapi.com',
                'x-rapidapi-key' : 'd7f2f11128msha58dd360a4162cdp1d6c97jsn601ba234a70b'
            }
        }
    )
    .then(res => res.json())
    .then(res => {
        addCountryData(res.data)
    })
    .catch(console.error)
} 