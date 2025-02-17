import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: import.meta.env.VITE_RAWG_API_KEY,
    key: "ec17b393d84f423aa541cfc7e7b4088c",
  },
});
