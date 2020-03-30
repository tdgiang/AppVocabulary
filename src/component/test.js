import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
 } from 'react-native';
import  getAsyncStorage from '../func/getAsyncStorage';
import setAsyncStorage from '../func/setAsyncStotage';

 
const defaultArrWord=[
    { id: '1', en: 'action', vn: 'hành động', memorized: true, isShow:true },
    { id: '2', en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
    { id: '3', en: 'activity', vn: 'hoạt động', memorized: true, isShow: true },
    { id: '4', en: 'active', vn: 'chủ động', memorized: true, isShow: false },
    { id: '5', en: 'bath', vn: 'tắm', memorized: false, isShow: false },
    { id: '6', en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: true },
    { id: '7', en: 'yard', vn: 'sân', memorized: false, isShow: false },
    { id: '8', en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
    { id: '9', en: 'young', vn: 'trẻ', memorized: true, isShow: false },
    { id: '10', en: 'zero', vn: 'số 0', memorized: false, isShow: false },
    { id: '11', en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: true },
    { id: '12', en: 'above', vn: 'ở trên', memorized: false, isShow: false },
    { id: '13', en: 'against', vn: 'phản đối', memorized: true, isShow: false },
    { id: '14', en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
];


 export default class test extends Component {

    onSave=async()=>{
        await setAsyncStorage('arrWord',defaultArrWord);
        console.log('ok');
        
    }

    onLog=async()=>{
        
        const data=await getAsyncStorage('arrWord')
        console.log("Data get ve:");
        console.log(data);
        
        
        
    }
     
     render() {
         return (
             <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                 <TouchableOpacity onPress={this.onSave.bind(this)} >
                     <Text>Save</Text>
                 </TouchableOpacity>


                 <TouchableOpacity  onPress={this.onLog.bind(this)} >
                     <Text>Log</Text>
                 </TouchableOpacity>

             </View>

         );
     }
 }