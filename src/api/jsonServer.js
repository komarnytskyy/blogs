import axios from "axios";

const url = "https://23c0-194-44-50-43.eu.ngrok.io";

export default axios.create({
  baseURL: url,
});
