
import axios from "axios";

export default axios.create({
  baseURL: "https://khohuai-v3-api.herokuapp.com",
  withCredentials: true,
})