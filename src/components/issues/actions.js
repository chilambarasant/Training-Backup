export const GET_ISSUE = 'GET_ISSUE'
export const FAV_ISSUE = 'GET_ISSUE'
export const GET_ISSUES = 'GET_ISSUES'
export const RESET_ISSUE = 'RESET_ISSUE'
export function getIssues(tab,category,userId,page){
    return async function(dispatch){
    //  alert('http://localhost:8081/get_reports_list?category='+category+'&tab='+tab);
      const res =await fetch('http://localhost:8081/get_reports_list?category='+category+'&tab='+tab+'&userId='+userId);
        const issues = await res.json();
        return dispatch ({
            type : 'GET_ISSUES',
             data: issues.results,
             tab:tab
        })
    }
}
export function getIssue(id){
    return async function(dispatch){
        const res =await fetch('http://localhost:8081/get_reports_details/'+id);
        const issue = await res.json();      
        return dispatch ({
            type : 'GET_ISSUE',
             data: issue.results
        })
    }
}

export function resetIssue(){
    return{
        type:'RESET_ISSUE'
    }
}