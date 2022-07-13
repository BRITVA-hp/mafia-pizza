import axios from "axios";

const url = process.env.VUE_APP_API_BASE_URL

function get() {
    return axios.get(`${url}/home/cities`)
        .then(response => {
            let cities = response.data.data
            return cities
        })
}

export default {
    get
};