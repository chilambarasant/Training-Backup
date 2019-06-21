import {GET_ISSUES,GET_ISSUE,RESET_ISSUE} from './actions'
const initialState = {
    issues: [],
    isIssuesLoaded : false,
    issue: {},
    isIssueLoaded : false,
    tab:0,
}
export default function(state =initialState , action) {
    const {type,data,tab} = action
    switch(type){
        case GET_ISSUES:
        return {
            ...state,
            issues : data,
            
            isIssuesLoaded : true ,
            tab:tab
        }
        case GET_ISSUE:
        return {
            ...state,
            issue : data,
            isIssueLoaded : true 
        }
        case RESET_ISSUE:
        return {
            ...state,
            issue:{},
            isIssueLoaded:false
        }



       default :
        return state
    }
}