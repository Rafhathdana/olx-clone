import React from "react";
import Logo from "../assets/olx-logo.png";
import styled from "styled-components";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth, firebasedb } from "../utils/firebase-config";
import { collection, addDoc } from "firebase/firestore";

// Add a new document in collection "cities"

function SignUp() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleSignIn = async () => {
    const { email, password, username, phone } = formValues;
    try {
      let userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      if (userCredential) {
        await updateProfile(userCredential.user, {
          displayName: username,
        }).then(async () => {
          await addDoc(collection(firebasedb, "users"), {
            id: userCredential.user.uid,
            username: username,
            phone: phone,
          });
        });
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + "  " + errorMessage);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <SignupParentDiv>
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <br />
        <label htmlFor="fname">Username</label>
        <br />
        <input
          className="input"
          type="text"
          value={formValues.username}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
          id="fname"
          name="username"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          className="input"
          type="number"
          id="phone"
          name="phone"
          value={formValues.phone}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
        />
        <br />
        <br />
        <button onClick={handleSignIn}>Sign Up</button>

        <Link>Login</Link>
      </SignupParentDiv>
    </Container>
  );
}

export default SignUp;
const Container = styled.div``;
const SignupParentDiv = styled.div`
  border: 1px solid black;
  width: max-content;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  input {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    outline-color: transparent;
  }

  button {
    width: 100%;
    height: 48px;
    background-color: #002f34;
    color: whitesmoke;
    font-weight: 900;

    &:hover {
      background-color: white;
      color: #002f34;
      border: 2px solid #002f34;
    }
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
