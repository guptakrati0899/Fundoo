import axios from "axios";

const reset = async function(obj) {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password", obj);
    return response;
}

export default reset