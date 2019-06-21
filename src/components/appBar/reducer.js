import {GET_LOGIN} from './actions'
const initialState = {
    login:true
}
export default function(state = initialState , action) {
    const {type,data} = action
    switch(type){
       
        case GET_LOGIN :

        return {
            ...state,
            login: false
        }
       default :
       return state
    }
}