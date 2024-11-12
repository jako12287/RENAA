import { getFetch } from "../services/configApi";
import { NameRoutes } from "../types";

export const getVerifyStatusServer = async () => {
  try {
    return await getFetch(NameRoutes.Status);
  } catch (error) {
    console.error("Error al obtener estado del servidor", { error });
  }
};

export const messagePostError = `
¡Ups! Algo salió mal.
No pudimos procesar tus datos en este momento. Por favor, intenta nuevamente más tarde.
`;
export const messagePost = `¡Gracias por tu interés!
Hemos recibido tus datos correctamente.`;
