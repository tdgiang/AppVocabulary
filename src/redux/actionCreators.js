export function ShowIsAdding(){
    return {type:"SHOW_ADDING"};
}

export function HideIsAdding(){
    return {type:"HIDE_ADDING"};
}

export function setFilterStatus(actionType){
    return {type:actionType};
}

export function memorizedWord(id){
    return{
        type:'TOGGLE_MEMORIZED',
        id
    }
}

export function showWord(id){
    return{
        type:'TOGGLE_SHOW',
        id
    }
}

export function addWord(en,vn){
    return{
        type:'ADD_WORD',
        en,
        vn
    }
}

export function initData(data){
    return{
        type:'INIT_DATA',
        data
    }
}