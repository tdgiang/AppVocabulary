import { StyleSheet,Dimensions } from 'react-native';

const {height,width}=Dimensions.get('window');

const styles=StyleSheet.create({
    container:{
        paddingVertical:15,
        marginHorizontal:15,
        marginVertical:10,
        backgroundColor:'#d9d9d9',
        borderRadius:10,
        elevation:3
    },
    row:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    border:{
        height:1,
        backgroundColor:'#d9d9d9',
        elevation:1,
        marginHorizontal:20,
        marginVertical:10
    },
    imgIcon:{
        height:30,
        width:30,
    },
    txtWord:{
        fontSize:20,
    },
    header:{
        height:50,
        backgroundColor:'#808080',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        elevation:1
    },
    txtTitle:{
        fontSize:22,
        fontWeight:'bold',
        color:'#f2f2f2'
    },
    txtWhite:{
        color:'white',
        fontSize:18

    },

    txtSelect:{
        color:'#f2f2f2',
        fontSize:18,
        fontWeight:'bold'
    },
    containerForm:{
        height:200,
        backgroundColor:'#808080',
        marginVertical:height/4,
        marginHorizontal:30,
        borderRadius:10,
        alignItems:'center',
        paddingVertical:10
    },
    inputFrom:{
        width:250,
        marginVertical:10,
        margin:10
    },
    txtInput:{
        backgroundColor:'white',
        padding:5,
        margin:5,
        borderRadius:10
        
    },
    btnForm:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5,
        width:80,
        backgroundColor:'#00b300',
        borderRadius:5,
        marginHorizontal:20

    }
})

export default styles;