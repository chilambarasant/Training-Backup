
export const GET_REPORTLIST = 'GET_REPORTLIST';
export const GET_COUNT = 'GET_COUNT';
export const REMOVE_REPORTLIST = 'REMOVE_REPORTLIST';
export const APPROVAL_REPORT = 'APPROVAL_REPORT';
export const REJECT_REPORT = 'REJECT_REPORT';


export function getReportList(lists){
        return ({
             type : 'GET_REPORTLIST',
             data: lists
        })
    }

export function getCountIncress(){
     return ({
          type : 'GET_COUNT',
     })
 }

 export function removeReportList(reportid){
     
     return ({
          type : 'REMOVE_REPORTLIST',
          data: reportid
     })
 }

 export function approvalReport(reportid){
     
     return ({
          type : 'APPROVAL_REPORT',
          data: reportid
     })
 }

 export function rejectReport(reportid){
     
     return ({
          type : 'REJECT_REPORT',
          data: reportid
     })
 }

 




