import axios from "axios";

const axiosInstance = axios.create({
  // Ganti dengan URL API Anda
  // baseURL: "https://fakestoreapi.com",
  baseURL: "/api/v1",
  // headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
