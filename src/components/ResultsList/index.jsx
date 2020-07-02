/**
 * Component Name: ResultsList
 */

import React, {useEffect} from 'react';
import {connect} from 'react-redux'; 

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventIcon from '@material-ui/icons/Event';
import AddLocationIcon from '@material-ui/icons/AddLocation';

import Moment from 'react-moment';

import './styles.scss';


const mapStateToProps = (state) => {
    return {
        countryData : state.addCountryReducer
    }
} 

const ResultsList = (state) => {
    
    const countryData = state.countryData;
   
    if(countryData.location !== null) {
        return (
            <div className='results-list'>
                <ul>
                    <li><AccessibilityNewIcon/>Recovered: {countryData.recovered}</li>
                    <li><FireplaceIcon/> Deaths: {countryData.deaths}</li>
                    <li><AddAlertIcon/> Confirmed: {countryData.confirmed}</li>
                    <li>
                        <EventAvailableIcon/> Last Checked: 
                        <Moment format="YYYY/MM/DD HH:mm">
                            {countryData.lastChecked}
                        </Moment>
                    </li>
                    <li>
                        <EventIcon/> Last Reported: 
                        <Moment format="YYYY/MM/DD HH:mm">
                            {countryData.lastReported}  
                        </Moment>
                    </li>
                    <li><AddLocationIcon/> Location: {countryData.location}</li>
                </ul>
            </div>
        )
    }
    return null;
}

export default connect(mapStateToProps, null)(ResultsList);