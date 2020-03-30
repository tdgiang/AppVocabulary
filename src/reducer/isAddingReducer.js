const isAddingReducer=(state=false,action)=>{
    if(action.type==='SHOW_ADDING')
        return true;
    if(action.type==='HIDE_ADDING')
        return false;
    return state
}

export default isAddingReducer;