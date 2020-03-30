import React, { Component } from 'react';
import { 
    View,
    Text,
    FlatList
 } from 'react-native';
import {connect} from 'react-redux';
import Word from './Word';
import Header from './header';
import Footer from './footer';
import {initData} from '../redux/actionCreators'
import  getAsyncStorage from '../func/getAsyncStorage';

class Main extends Component {
    
    getData=()=>{
        const {Filter,ArrWords}=this.props;
        if(Filter=="MEMORIZED")
            return ArrWords.filter(e=>e.memorized)
        if(Filter=="NEED_PRACTICE")
            return ArrWords.filter(e=>!e.memorized)
        return ArrWords;

    }
    getInitData=async()=>{
        const data=await getAsyncStorage('arrWords');
        this.props.initData(data);
       
    }

    UNSAFE_componentWillMount (){  
        this.getInitData();   
        
    }
      
     render() {
         return (
             <View style={{flex:1}} >
                 <Header />
                 <FlatList
                    data={this.getData()}
                    renderItem={({item})=><Word  word={item} />}
                    keyExtractor={(item)=>item.id}
                />
                <Footer />
             </View>
             
         );
     }
 }

 const mapStateToProps = (state) => {
     return {
         Filter:state.filterStatus,
         ArrWords:state.arrWords,
         isAdding:state.isAddingSatus
     }
 }


 export default connect(mapStateToProps,{initData})(Main);


