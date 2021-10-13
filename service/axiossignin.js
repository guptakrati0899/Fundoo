import axios from "axios";

const signin = async function(obj) {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", obj);
    return response;
}

export default signin