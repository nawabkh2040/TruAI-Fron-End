import axios from "axios";

const api = axios.create({
  baseURL: "https://api.truai.work.gd/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;
