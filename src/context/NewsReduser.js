const NewsReduser = (state , action) => {
    switch(action.type){

        case "GET_DATA":
        return{
            ...state,
            allNews : action.payload
        }
        
        
        default :
        return state
    }
}

export default NewsReduser