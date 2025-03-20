import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api", // Correctly place baseURL here
  params: {
    key: 'bdcdceb3429e4478b1620f55b839d3f2' // Place query params under 'params'
  }
});

export default apiClient;
