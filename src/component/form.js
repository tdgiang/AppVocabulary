import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity
 } from 'react-native';

import styles from '../styles/styles';
import {connect} from 'react-redux';
import {HideIsAdding,addWord} from '../redux/actionCreators';


 class form extends Component {

    constructor(props){
        super(props);
        this.state={
            en:'',
            vn:''
        }
    }
     
     render() {
         const {containerForm,row,txtTitle,inputFrom,txtInput,btnForm,txtWhite}=styles;
         const {en,vn}=this.state;
         return (
            <View style={containerForm} >
                <Text style={txtTitle} >NEW WORD</Text>
                <View style={inputFrom} >
                    <TextInput
                        style={txtInput}
                        placeholder={"Enter english"}
                        value={en}
                        onChangeText={(val)=>this.setState({en:val})}
                    />
                    <TextInput
                        style={txtInput}
                        placeholder={"Enter meaning"}
                        value={vn}
                        onChangeText={(val)=>this.setState({vn:val})}
                    />
                </View>

                <View style={row}  >
                    <TouchableOpacity style={btnForm} onPress={()=>{
                        this.props.addWord(en,vn);
                        this.props.HideIsAdding();
                     }}
                     >
                        <Text style={txtWhite} >Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnForm} onPress={()=>this.props.HideIsAdding()}   >
                        <Text style={txtWhite} >Close</Text>
                    </TouchableOpacity>
                </View>

            </View>
         );
     }
 }


 export default connect(null,{HideIsAdding,addWord})(form)



