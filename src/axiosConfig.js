import axios from "axios";

const Instance = axios.create({
  baseURL: "https://forum-backend-b9o3.onrender.com/api",
  // baseURL: "http://localhost:5500/api",
});

export default Instance;
