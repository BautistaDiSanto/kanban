import { sleep } from "../utils/sleep";

const updateUsersInDatabase = (data) => {
  if (!data) return false;
  if (data === null) return window.localStorage.setItem("users", "");
  return window.localStorage.setItem("users", JSON.stringify(data));
};
const getUsersInDatabase = () => {
  const valueInLocalStorage = window.localStorage.getItem("users");
  if (valueInLocalStorage) {
    return JSON.parse(valueInLocalStorage);
  }
  window.localStorage.setItem("users", JSON.stringify([]));
  return [];
};
const response = (ok = false, error = "no set", payload = "") => {
  return {
    ok: ok,
    error: error,
    payload: payload,
  };
};
export const doLoginUser = async (user) => {
  await sleep(2000); // el tiempo ficticio de solicitud al servidor

  const users = getUsersInDatabase();
  const storedUser = users.find((userFound) => userFound.email === user.email);

  if (!storedUser) {
    return response(false, "El usuario ingresado no existe");
  }

  const userFound = users.find(
    (u) => u.email === user.email && u.password === user.password
  );

  if (!userFound) {
    return response(false, "Usuario o contraseña invalidos");
  }

  // si llega hasta aca, significa que la promesa se resuelve bien
  return response(true, null, userFound);
};

export const doRegisterUser = async (user) => {
  const users = getUsersInDatabase();
  await sleep(2000);
  // estos van a ser mis campos requeridos,
  // todo servicio de autentificacion siempre va a tener campos requeridos
  // chequeo si complete los campos requeridos, sino devuelvo un array con los errores
  const fieldsRequired = ["email", "password", "name"];
  let error;
  console.log(
    fieldsRequired.reduce((acc = true, v, i) => {
      if (acc) {
        if (v in user && (user[v] ? true : false)) return true;
        else {
          error = `${v} is required`;
          return false;
        }
      } else return false;
    })
  );
  if (error) return response(false, error);
  // chequeo que el email no este registrado
  const storedUser = users.find((u) => u.email === user.email);
  if (storedUser) return response(false, "El email ya esta registrado");

  // chequeo que la contrasena tenga al menos 6 caracteres
  if (user.password.length < 6)
    return response(false, "La contraseña debe tener al menos 6 caracteres");

  // chequeo que las paswords coincidan
  if (user.password !== user.repeatPassword)
    return response(false, "Las contraseñas no coinciden");

  const newUser = {
    name: user.name,
    email: user.email,
    password: user.password,
  };
  updateUsersInDatabase([...users, newUser]);
  return response(true, "", newUser);

  // toda async function retorna una promesa, eso significa que esta
  // funcion retorna una promesa, en el caso de haber errores esta promesa se rechaza
  // y devuelve los errores y en el caso que este todo bien se resuelve despues de 2000ms
};
