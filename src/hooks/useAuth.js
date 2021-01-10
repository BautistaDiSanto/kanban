import { doRegisterUser, doLoginUser } from "../backend-simulator/backend";

export const useAuth = () => {
  return {
    registerUser: async (user) => {
      try {
        const response = await doRegisterUser(user);
        return response;
      } catch (error) {
        const response = {
          ok: false,
          error: "No se ha podido conectar al servidor",
          payload: "",
        };
        return response;
      }
    },
    logUser: async (user) => {
      try {
        const response = await doLoginUser(user);
        return response;
      } catch (error) {
        const response = {
          ok: false,
          error: "No se ha podido conectar al servidor",
          payload: "",
        };
        return response;
      }
    },
  };
};
