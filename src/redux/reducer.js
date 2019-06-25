import Studentdata from '../data/studentdata';

let rootReducer = function (currentstate = Studentdata, action) {

    switch (action.type) {
        case 'ADD_STUDENT':
            return Addstudentfromarray(action.newstudents, currentstate)

        case 'REMOVE_STUDENT':
            return Removestudentfromarray(action.student, currentstate)

        case 'SEARCH_STUDENT':
            return Searchstudentfromarray(action.searchedvalue, currentstate)

        default:
            return currentstate;
    }
};

function Addstudentfromarray(newstudents, state) {
    //console.log('sdfdsff');
    return [...state, newstudents];
}

function Removestudentfromarray(student, state) {
    //console.log('sdfdsff');
    let index = state.indexOf(student)

    return [...state.slice(0, index), ...state.slice(index + 1)];
}

function Searchstudentfromarray(searchedvalue, state) {
    console.log(searchedvalue);
  
      
     if(searchedvalue){
        return state.filter(search=>search.studentname.startsWith(searchedvalue));
     }else{
        return state;
     }
     
}





export default rootReducer