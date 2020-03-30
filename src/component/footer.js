import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity
 } from 'react-native';
import {connect} from 'react-redux';
import {setFilterStatus} from '../redux/actionCreators';
import styles from '../styles/styles';
 
class footer extends Component {
    
    getStyletxt=(status)=>{
        if(this.props.filterStatus==status)
            return styles.txtSelect;
        return {fontSize:18};
    }


     render() {
         const {header,txtBtn}=styles;
         return (
             <View style={header} >
                 <TouchableOpacity onPress={()=>this.props.setFilterStatus("FILTER_SHOW_ALL")} >
                    <Text style={this.getStyletxt('SHOW_ALL')}>SHOW ALL</Text>
                 </TouchableOpacity >
                 <TouchableOpacity onPress={()=>this.props.setFilterStatus("FILTER_MEMORIZED")} >
                 <Text style={this.getStyletxt('MEMORIZED')}>MEMORIZED</Text>
                 </TouchableOpacity>
                 <TouchableOpacity  onPress={()=>this.props.setFilterStatus("FILTER__NEED_PRACTICE")} >
                 <Text style={this.getStyletxt('NEED_PRACTICE')}>NEED PRACTICE</Text>
                 </TouchableOpacity> 
             </View>
         );
     }
 }
const mapStateToProps = (state) => {
    return {
        filterStatus: state.filterStatus
    }
}

 export default connect(mapStateToProps,{setFilterStatus})(footer);