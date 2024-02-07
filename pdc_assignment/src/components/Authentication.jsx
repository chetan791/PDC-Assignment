import React, { useState } from "react";
import styled from "styled-components";

export const Authentication = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [Register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      const res = await fetch(
        "https://pdc-assignment-backend.onrender.com/pdc/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Login),
        }
      );
      const data = await res.json();
      setToken(data.token);
      console.log(data.token);
      if (data.token) {
        alert("logged in");
      }
    } catch (error) {
      console.log(error);
      alert("Error in login");
    }
  };

  const handleRegister = async () => {
    try {
      const res = await fetch(
        "https://pdc-assignment-backend.onrender.com/pdc/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Register),
        }
      );
      const data = await res.json();
      console.log(data);
      alert("Registered");
    } catch (error) {
      console.log(error);
      alert("Error in register");
    }
  };

  return (
    <DIV>
      <button
        style={{ marginBottom: "10px", display: "block", marginTop: "20px" }}
        onClick={() => setShowLogin(!showLogin)}
      >
        {showLogin ? "Go to Login" : "Go to Register"}
      </button>
      {!token && showLogin ? (
        <div id="register">
          <h3>Register</h3>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setRegister({ ...Register, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setRegister({ ...Register, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setRegister({ ...Register, password: e.target.value })
            }
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      ) : (
        <div id="login">
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setLogin({ ...Login, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setLogin({ ...Login, password: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {token && (
        <div
          style={{
            backgroundColor: "green",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          Logged in
        </div>
      )}
    </DIV>
  );
};

const DIV = styled.div`
  div {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 10px;
    margin: auto;
    gap: 10px;
    font-size: large;
  }
  input {
    padding: 10px;
    font-size: large;
  }
  button {
    margin: auto;
    font-size: large;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid black;
    align-items: center;
  }
  button:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 600px) {
    div {
      width: 300px;
    }
  }
`;
