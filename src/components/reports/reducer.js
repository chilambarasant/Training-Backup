import {GET_REPORTLIST,GET_COUNT,REMOVE_REPORTLIST,APPROVAL_REPORT,REJECT_REPORT} from './actions'
const initialState = {
    reportDetails: [],
    count: 1,
    deleteID: 0,
    updateReport: null,
    approvalStatus: "Approval",
    open: false,
    //submitSuccess: null
}
export default function(state = initialState , action) {
    const {type,data} = action
    switch(type){
       
        case GET_COUNT :

        return {
            ...state,
           count: state.count + 1
        }

        case GET_REPORTLIST :
        return {
            ...state,
            reportDetails : state.reportDetails.concat(data), 
          //  submitSuccess: true
        }

        case REMOVE_REPORTLIST :
        return {
            ...state,
            reportDetails : state.reportDetails.filter((list) => list.ID !== data)
        }
        case APPROVAL_REPORT :
        return {
            ...state,
            reportDetails : 
            state.reportDetails.map((post) => {
                if (post.ID === data) {
                return {
                ...post,
                Status: "Approved",
                }
                } else return post;
                })
            }

        case REJECT_REPORT :
        return {
            ...state,
            reportDetails : 
            state.reportDetails.map((post) => {
                if (post.ID === data) {
                return {
                ...post,
                Status: "Rejected",
                }
                } else return post;
                })
            }


       default :
       return state
    }
}