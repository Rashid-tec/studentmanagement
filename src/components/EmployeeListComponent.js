import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

import "./style.css";


class EmployeeListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: [],
            message: null

        };
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    componentDidMount() {
        this.getAllStudent()
    }
    getAllStudent() {
        //make service call get data
        EmployeeService.getAllStudent().then(response => {

            this.setState({ student: response.data });

        }).catch(error => console.log(error, "ERROR"));
    }
    deleteStudent(id) {
        console.log("Delete id = " + id)
        EmployeeService?.deleteStudent(id).then(response => {
            this.setState({ message: response.data });
            this.getAllStudent();
        }).catch(error => console.log(error, "ERROR"));
    }
    getOneStudent(id) {
        EmployeeService?.getOneStudent(id).then(response => {
            this.setState({ message: response.data });
            this.getOneStudent();
        }).catch(error => console.log(error, "Error"))
        // saveStudent({
        //     "s_name":"khan",
        //     "s_rollno":"3"
        // })
        {
            EmployeeService?.saveStudent({
                "s_name":"",
                "s_rollno":"",
                "email":"",
            }).then(response => {
                this.setState({ student: response.data });
            })
        }
    }

    render() {
        return (
            <div>
                <h1> All Student Record</h1>

                <table className="table">
                    <thead>
                        <tr className="table-heading">
                            <th>ID</th>
                            <th>NAME</th>
                            <th>ROLLNO</th>
                            <th>EMAIL</th>
                            
                            <th>OPERATION</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.student.map((emp) => (
                            <tr key={emp.s_id}>
                                <td>{emp.s_id}</td>
                                <td>{emp.s_name}</td>
                                <td>{emp.s_rollno}</td>
                                <td>{emp.email}</td>
                                <td><button className="btn" onClick={() => this.deleteStudent(emp.s_id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    this.state.message && (
                        <div className="alerts">{this.state.message}</div>
                    )
                }
              <td><button className="btn1" >Add</button>
              <a href="#"> Add Student </a></td>  
                

            </div>
        )
    }
}
export default EmployeeListComponent;