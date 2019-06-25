// Declaring Functions

export function Addstudentslist(newstudents){
    console.log(newstudents)
        return {
            type : 'ADD_STUDENT',
            newstudents
        }
        
    }
    
    export function removeStudents(student){
        console.log(student)
            return {
                type : 'REMOVE_STUDENT',
                student
            }
            
        }


        export function SearchStudents(searchedvalue){
            console.log(searchedvalue)
                return {
                    type : 'SEARCH_STUDENT',
                    searchedvalue
                }
                
            }
        
    
    
    