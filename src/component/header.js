import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Text,
    Image,
    Modal
 } from 'react-native';
 import {connect} from 'react-redux';
import styles from '../styles/styles';
import {ShowIsAdding} from '../redux/actionCreators';
import Form from './form';
const addImg =require('../img/icons/add.png');
class header extends Component {
     
     render() {
         const {header,txtTitle,imgIcon}=styles;
         const txt=  this.props.isAdding?"yes":"No";
         return (
             <View style={header} >
                 <Text/>
                <Text style={txtTitle} >My Vocabulary</Text>
                <TouchableOpacity onPress={()=>this.props.ShowIsAdding()}  >
                    <Image source={addImg} style={imgIcon} />
                </TouchableOpacity>
                <Modal
                    visible={this.props.isAdding}
                    animationType="slide"
                    transparent={true}
                   
                >
                    <Form  /> 
                </Modal>
             </View> 
         );
     }
 }

 const mapStateToProps = (state) => {
     return {
         isAdding: state.isAddingSatus
     }
 }


 export default connect(mapStateToProps,{ShowIsAdding})(header);