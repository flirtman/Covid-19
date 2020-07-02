/**
 * Component Name: SearchForm
 */

import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCountry} from '../../store/actions/addCountry';

import {capitalize} from '../../helpers';

import './styles.scss';


const mapStateToProps = (state) => {
    return {
        countryData : state.addCountryReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCountryGlobal : bindActionCreators(addCountry, dispatch)
    }
}


const SearchForm = (state) => {
    const [countryData, addCountryData] = useState(null);
    const [country, addCountry] = useState(null);
    

    useEffect(() => {
        countryData !== null && state.addCountryGlobal(countryData);
    }, [countryData])

    useEffect(() => {
        country !== null && console.log(country);
        country !== null && fetchApi();
    }, [country])

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const countryInput = document.getElementById('country-input');
        addCountry(capitalize(countryInput.value));
    }

    const fetchApi = () => {
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

    return (
        <div className="search-form">
            <form onSubmit={(e) => onFormSubmit(e)} id={'countryForm'}>
                <label>
                    <input 
                        type={'text'} 
                        name={'country'} 
                        id={'country-input'}
                        placeholder={'Search Country'}
                    />
                </label>
                <label>
                    <button>Add</button>
                </label>
            </form>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm); 

