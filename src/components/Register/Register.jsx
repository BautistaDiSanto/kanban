import React from "react";
import { useAuth } from "../../hooks/useAuth";

export const Register = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const { registerUser } = useAuth();

  //envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //se esta cargando y no hay errores (o se limpian si los hubo antes)
    setLoading(true);
    setError("");
    //se crea el modelo del usuario a enviar, usando los estados actuales
    const user = {
      email: email,
      name: name,
      password: password,
      repeatPassword: repeatPassword,
    };
    //se usa la funcion registerUser del hoook useAuth, que recibe un usuario por parametro
    registerUser(user)
      .then((response) => {
        //termino de cargar
        setLoading(false);
        // la respuesta del servidor es un objeto de esta forma.
        // reponse = {
        //   ok: [true/false], //hubo errores?
        //   error: "Descripcion del error enviada por el servidor", //si hubo un error, cual es el mensaje?
        //   payload: { } //si no hubo error, cual es la carga de la respuesta?
        // }

        const { ok, error, payload } = response;
        //si la respuesta contiene un error, disparar el error para el catch lo maneje
        if (!ok) throw new Error(error);
        //como no hubo error, utilizar el payload a nuestro gusto
        console.log(payload);
      })
      .catch((err) => {
        //el catch maneja el error que el try disparo si la respuesta contenia un error

        //se termino de cargar y setea el error del mensaje al estado
        setLoading(false);
        setError(err.message);
      });
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRepeatPassword = (e) => setRepeatPassword(e.target.value);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>register</h1>
        <input placeholder="name" onChange={handleName}></input>
        <input placeholder="e-mail" onChange={handleEmail}></input>
        <input placeholder="password" onChange={handlePassword}></input>
        <input
          placeholder="repeat password"
          onChange={handleRepeatPassword}
        ></input>
        <p>{`email: ${email} | name: ${name}`}</p>
        <p>{`password: ${password} | repeat password: ${repeatPassword}`}</p>
        <button type="submit">registrarse</button>
      </form>
      {loading ? <p>cargando...</p> : ""}
      {error ? <p style={{ color: "red" }}>{error}</p> : ""}
    </>
  );
};
