import  getAsyncStorage from '../func/getAsyncStorage';




const initData=async()=>{
    const data=await getAsyncStorage('arrWords');
    console.log("data trong init:");
    console.log(data);
    if(data!=null)
        return data;
    return [];
} 

const test=[
    { id: '3', en: 'activity', vn: 'hoạt động', memorized: true, isShow: true }
]


const arrWordsReducer=(state=[],action)=>{
    switch (action.type) {
        case "TOGGLE_MEMORIZED":
            return state.map(e=>{
                if(e.id !=action.id) return e;
                return {...e,memorized:!e.memorized};
            })
        case "INIT_DATA":
            return action.data;
        case "TOGGLE_SHOW":
            return state.map(e=>{
                if(e.id !=action.id) return e;
                return {...e,isShow:!e.isShow};
            })
        case "ADD_WORD":
            return  [{
                id:(state.length+1)+'',
                en:action.en,
                vn:action.vn,
                memorized:false,
                isShow:true
            }].concat(state)
        default:
            return state;
    }


}


export default arrWordsReducer;