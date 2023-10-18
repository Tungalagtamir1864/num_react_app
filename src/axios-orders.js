import axios from "axios";

const instance = axios.create({
  baseURL: "https://num-react-default-rtdb.firebaseio.com/"
});

export default instance;
