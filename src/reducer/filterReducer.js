const filterReducer=(state="SHOW_ALL",action)=>{
    switch (action.type) {
        case "FILTER_SHOW_ALL":
            return 'SHOW_ALL';
        case "FILTER_MEMORIZED":
            return 'MEMORIZED';
        case "FILTER__NEED_PRACTICE":
            return 'NEED_PRACTICE';
        default:
            return state;
    }
}

export default filterReducer;