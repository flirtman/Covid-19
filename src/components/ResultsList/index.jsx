/**
 * Component Name: ResultsList
 */

import React, {useEffect} from 'react';
import {connect} from 'react-redux'; 


const mapStateToProps = (state) => {
    return {
        countryData : state.addCountryReducer
    }
} 

const ResultsList = (state) => {
    
    const countryData = state.countryData;
   
    if(countryData.location !== null) {
        return (
            <div>
                <ul>
                    <li>Recovered : {countryData.recovered}</li>
                    <li>Deaths : {countryData.deaths}</li>
                    <li>Confirmed : {countryData.confirmed}</li>
                    <li>LastChecked : {countryData.lastChecked}</li>
                    <li>LastReported : {countryData.lastReported}</li>
                    <li>Location : {countryData.location}</li>
                </ul>
            </div>
        )
    }
    return null;
}

export default connect(mapStateToProps, null)(ResultsList);