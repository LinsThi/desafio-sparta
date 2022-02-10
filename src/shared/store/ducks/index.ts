import { combineReducers } from 'redux';

import citiesSearched from './citiesSearched';
import citiesSelected from './citiesSelected';

export default combineReducers({ citiesSearched, citiesSelected });
