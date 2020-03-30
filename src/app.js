import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
import {Provider} from 'react-redux';
import setAsyncStorage from './func/setAsyncStotage';

import Main from './component/main';
import store from './redux/store';
 export default class app extends Component {

     
     render() {
         return (
             <Provider store={store} >
                <Main />
             </Provider>
             
         );
     }
 }