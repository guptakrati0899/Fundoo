import axios from "axios";

const forgot = async function(obj) {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/23/verify", obj);
    return response;
}

export default forgot