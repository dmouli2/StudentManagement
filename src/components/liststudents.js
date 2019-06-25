import React from "react";

class Liststudents extends React.Component {


    render() {
        console.log(this.props.students.length)

        return (
            <div id="content-wrapper">

                <div className="container-fluid">

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a >Home</a>
                        </li>
                        <li className="breadcrumb-item active">List Students</li>
                    </ol>

                    <div className="card mb-3">
                        <div className="card-header">

                            <i className="fas fa-table"></i>
                            <b>Total No.of Students : {this.props.students.length} </b>

                            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0" style={{ float: 'right' }}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search"
                                        onChange={event => { this.props.SearchStudents(event.target.value) }}

                                    />

                                </div>
                            </form>
                        </div>

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Grade</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {this.props.students.map(
                                            student => (

                                                <tr key={student.id}>
                                                    <td>{this.props.students.indexOf(student) + 1}</td>
                                                    <td>{student.studentname}</td>
                                                    <td>{student.studentgrade}</td>
                                                    <td><button onClick={event => { this.props.removeStudents(student) }}>Delete</button></td>
                                                </tr>
                                            ))}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>

                </div>

                <footer className="sticky-footer">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright © Srilekha Dinesh Bhavya 2019</span>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Liststudents