import axios from "axios";
const URL = "http://localhost:8787/student";
class EmployeeService {

    //1 featch All Student jason data

    getAllStudent() {
        return axios.get(`${URL}/all`, { headers: { "Content-Type": "application/json" } });

    }
    deleteStudent(id) {
       return axios.delete(`${URL}/delete/${id}`, { headers: { "Content-Type": "application/json" } });
    }

    getOneStudent(id){
        return axios.get(`${URL}/getone/${id}`,{ headers: { "Content-Type": "application/json" }});
    }
    saveStudent(student)
    {
        return axios.post(`${URL}/save`,student,{ headers: { "Content-Type": "application/json" }} );
    }
}
export default new EmployeeService();