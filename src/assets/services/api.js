import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/bands",
});

export default api;
