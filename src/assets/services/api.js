import axios from "axios";

const api = axios.create({
  baseURL: "https://john-strapi.herokuapp.com/bands",
});

export default api;
