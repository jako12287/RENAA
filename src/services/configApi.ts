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

import { NameRoutes } from "../types";

export const getFetch = async (uri: NameRoutes) => {
  try {
    const response = await fetch(`https://naturalapi.onrender.com/${uri}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al realizar la petición");
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};
