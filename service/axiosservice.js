import axios from "axios";

class AxiosService {
    postMethod(url, data, header=false) {
        return axios.post(url, data, header);
    }

    getMethod(url,  header=false) {
        return axios.get(url, header);
    }
}

export default AxiosService;

