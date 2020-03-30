import {combineReducers} from 'redux';

import arrWordsReducer from './arrWordsReducer';
import filterReducer from './filterReducer';
import isAddingReducer from './isAddingReducer';


const reducer=combineReducers({
    arrWords:arrWordsReducer,
    filterStatus:filterReducer,
    isAddingSatus:isAddingReducer
})

export default reducer;