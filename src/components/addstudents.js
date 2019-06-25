import React from "react";

class Addstudents extends React.Component {


Addstudents(event){
    event.preventDefault();
 let studentname=event.target.studentname.value
 let studentgrade=event.target.studentgrade.value
 let i=this.props.students.length;

 //console.log(studentname,studentgrade)

 let newstudents={}

    newstudents.studentname=studentname;
    newstudents.studentgrade=studentgrade;
    newstudents.id=i+1;
 
   this.props.Addstudentslist(newstudents)
   this.props.history.push('/view');

   // console.log(this.props.students.length)
}






    render() {
        return (
            <div className="container">
                <div className="card card-register mx-auto mt-5">
                    <div className="card-header">Add Students Details</div>
                    <div className="card-body">
                        <form onSubmit={event=>this.Addstudents(event)} >
                            <fieldset >
                                <div className="form-group">
                                    <label htmlFor="studentname">Student Name</label>
                                    <input type="text" name="studentname" className="form-control" placeholder="Enter Student Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="studentgrade">Select Student Grade</label>
                                    <select name="studentgrade" className="form-control">
                                        <option value="Grade A">Grade A</option>
                                        <option value="Grade B">Grade B</option>
                                        <option value="Grade C">Grade C</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </fieldset>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Addstudents