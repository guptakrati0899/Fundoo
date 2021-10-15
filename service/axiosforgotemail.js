import axios from "axios";

const forgot = async function(obj) {
    let response = await axios.post("", obj);
    return response;
}

export default forgot