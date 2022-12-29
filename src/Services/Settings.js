import Vue from "vue";

import axios from "axios";

// new

const devInstance = createInstance(
    "https://emary.azq1.com/StudyBlood/Dashboard/api/"
);
const productionInstance = createInstance(
    "https://emary.azq1.com/StudyBlood/Dashboard/api/"
);

function createInstance(baseURL) {
    return axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
            "Acess-Control-Allow-Origin": "*",
            Accept: "application/json",
            Authorization: ` Bearer ${localStorage.getItem("authToken")} `,
            "Accept-Language": localStorage.getItem("lang"),
        },
    });
}

export default {
    install() {
        Vue.prototype.axios = devInstance;
    },
};

// axios.defaults.withCredentials = true;

// axios.defaults.baseURL = "https://emary.azq1.com/StudyBlood/Dashboard/api/";

// axios.interceptors.request.use(function (config) {
//   config.headers.common = {
//     "Accept-Language": localStorage.getItem("lang"),
//     "Content-Type": "multipart/form-data",
//     Authorization: ` Bearer ${localStorage.getItem("authToken")} `,
//     Accept: "application/json",
//   };
//   return config;
// });

// new token

axios.interceptors.response.use(
    (res) => {
        return Promise.resolve(res);
    },
    (error) => {
        console.log(error);

        if (error != null && error.response.data.status == 400) {
            localStorage.clear();
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
