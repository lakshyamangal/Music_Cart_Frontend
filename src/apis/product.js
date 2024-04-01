import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllProducts = async (url) => {
  try {
    const reqUrl = `${backendUrl}product/getAllProducts${url}`;
    const response = await axios.get(reqUrl);
    if (!response.data.success) throw new Error(response.data.data);
    return response.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
