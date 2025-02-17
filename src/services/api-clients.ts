import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d2a92d70d1c34123881b223c60e014d0",
  },
});
