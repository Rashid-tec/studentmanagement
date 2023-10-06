import React, { useState } from 'react'

import EmployeeService from '../service/EmployeeService';


const EmployeeRegisterComponent = () => {
    const [s_name, setS_name] = useState('')
    const [s_rollno, setS_rollno] = useState('')
    const [email, setEmail] = useState('');
    const [user, setUser] = useState({
        s_name: "",
        s_rollno: "",
        email: ""
    })




    const [msg, setMsg] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }



    const RegisterUser = (e) => {
        e.preventDefault();
        EmployeeService.saveStudent(user)
            .then((res) => {
                console.log("User Added Successfully");
                setMsg("Used Added Sucessfully");
                setUser({
                    s_name: "",
                    s_rollno: "",
                    email: "",


                })

            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='card'>
                            <div className='card-header fs-3 text-center'>
                                <h1> Register Student</h1>
                            </div>
                            {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                            <div className='card-body'>
                                <form onSubmit={(e) => RegisterUser(e)}>
                                    <div className='mb-3'>
                                        <label>Enter UserName</label>
                                        <input type="text" name="s_name" className='form-control' onChange={(e) => handleChange(e)}
                                            value={user.s_name} />
                                    </div>

                                    <div className='mb-3'>
                                        <label > ROLL NO </label>
                                        <input type="text" name="s_rollno" className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={user.s_rollno} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>EMAIL</label>
                                        <input type="email" name="email" className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={user.email} />
                                    </div>

                                    <button className="btn btn-primary col-md-12">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default EmployeeRegisterComponent;