import axios from "axios";
import { PropsForm } from "../types";

const BASE_URI = "https://naturalapi.onrender.com";
export const PostEmail = async (dataPost: PropsForm) => {
  const URI_COMPLEMENT = "/rena/emailcathug";

  try {
    const respose = await axios.post(`${BASE_URI}${URI_COMPLEMENT}`, dataPost);
    return respose;
  } catch (error) {
    console.log(error);
  }
};
