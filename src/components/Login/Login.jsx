import React from "react";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const { logUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const user = {
      email: email,
      password: password,
    };

    logUser(user)
      .then((response) => {
        setLoading(false);
        const { ok, error, payload } = response;
        if (!ok) throw new Error(error);
        console.log(payload);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>login</h1>
        <input placeholder="e-mail" onChange={handleEmail}></input>
        <input placeholder="password" onChange={handlePassword}></input>
        <p>{`email: ${email} | password: ${password}`}</p>
        <button type="submit">logearse</button>
      </form>
      {loading ? <p>cargando...</p> : ""}
      {error ? <p style={{ color: "red" }}>{error}</p> : ""}
    </>
  );
};
