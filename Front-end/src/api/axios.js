import axios from "axios";

const api = axios.create({
  baseURL: "http://139.59.79.62:7474",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;
