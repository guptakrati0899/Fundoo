import AxiosService from './axiosservice';

const obj = new AxiosService();
const baseurl = "http://fundoonotes.incubation.bridgelabz.com/api/"
const token = localStorage.getItem("token")
const headerConfig = {
    headers : {
        Authorization : token,
    },
};
class UserServices {
    signup(data) {
        let response = obj.postMethod(`${baseurl}user/userSignUp`, data);
        return response;
    }
    signin(data) {
        let response = obj.postMethod(`${baseurl}user/login`, data);
        return response;
    }
    forgot(data) {
        let response = obj.postMethod(`${baseurl}user/reset`, data);
        return response;
    }
    reset(data) {
        let response = obj.postMethod(`${baseurl}user/reset-password`, data,headerConfig);
        return response;
    }
    addNotes(data){
        let  response  = obj.postMethod(`${baseurl}notes/addNotes`,data,headerConfig);
        return response;
     }
     getAllNotes(data){
        let response = obj.getMethod(`${baseurl}notes/getNotesList`,headerConfig);
        return response;
    }
}

export default UserServices