import { getFetch } from "../services/configApi";
import { NameRoutes } from "../types";

export const getVerifyStatusServer = async () => {
  try {
    return await getFetch(NameRoutes.Status);
  } catch (error) {
    console.error("Error al obtener estado del servidor", { error });
  }
};
