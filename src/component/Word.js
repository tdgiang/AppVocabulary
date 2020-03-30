import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
 } from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/styles';
import {showWord,memorizedWord} from '../redux/actionCreators';
import  setAsyncStorage from '../func/setAsyncStotage';
const ok=require('../img/icons/ok.png');
const eye=require('../img/icons/eye.png');
const replay=require('../img/icons/replay.png');
const eyeClose=require('../img/icons/closeEye.png');
class Word extends Component {

    constructor(props){
        super(props);
        this.state={
            animOpacity:new Animated.Value(0)
        }
    }

    UNSAFE_componentWillMount (){ 
        setAsyncStorage('arrWords',this.props.arrWords);
    }

    toggleMemorized=async(id)=>{
        await this.props.memorizedWord(id);
        setAsyncStorage('arrWords',this.props.arrWords);
    }

    toggleShow=async(id)=>{
        await this.props.showWord(id);
        setAsyncStorage('arrWords',this.props.arrWords);
    }

    componentDidMount(){
        
        Animated.timing(
                this.state.animOpacity,
                {
                    toValue:1,
                    duration:1000,
                    useNativeDriver:false
                }
        ).start();
    }

     
    render() {
        const {container,row,border,imgIcon,txtWord}=styles;
        const {en,vn,memorized,isShow,id}=this.props.word;
        const iconMemorized=memorized?ok:replay;
        const iconShow=isShow?eye:eyeClose;
        const txtShow=isShow?vn:"--------";
        const {animOpacity}=this.state;
        const scale=animOpacity.interpolate({
            inputRange:[0,1],
            outputRange:[0.3,1]
        })
        const height=animOpacity.interpolate({
            inputRange:[0,1],
            outputRange:[0,100]
        })
       

        return (
            <Animated.View useNativeDriver= {true}   style={[container,{height,opacity:animOpacity,transform:[{scale}]}]} >
                <View style={row} >
                    <TouchableOpacity onPress={this.toggleMemorized.bind(this,id)}
                    >
                        <Image source={iconMemorized} style={imgIcon} />
                    </TouchableOpacity>
                    <Text style={txtWord}  >{en}</Text>
                    <Text />
                </View>
                <View style={border} />
                <View style={row} >
                    <TouchableOpacity onPress={this.toggleShow.bind(this,id)} >
                        <Image source={iconShow} style={imgIcon} />
                    </TouchableOpacity>
                    <Text style={txtWord}>{txtShow}</Text>
                    <Text />
                </View>
            </Animated.View>
            
        );
    }
}
const mapStateToProps = (state) => {
    return {
        arrWords: state.arrWords
    }
}

export default  connect(mapStateToProps,{showWord,memorizedWord})(Word);
