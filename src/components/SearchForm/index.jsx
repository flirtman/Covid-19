/**
 * Component Name: SearchForm
 */

import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCountry} from '../../store/actions/addCountry';

import {capitalize} from '../../helpers';

import './styles.scss';


import {fetchApi} from '../../utils/getData';

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
        country !== null && fetchApi(country, addCountryData);
        // country !== null && getDataCovid(country);
    }, [country])

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const countryInput = document.getElementById('country-input');
        addCountry(capitalize(countryInput.value));
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

