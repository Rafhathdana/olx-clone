import React from "react";
import Logo from "../olx-logo.png";
import styled from "styled-components";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

// import { FirebaseContext } from "../store/FirebaseContext";

function SignUp() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  // const { firebase } = useContext(FirebaseContext);
  const handleSignIn = async () => {
    // console.log(firebase);
    const { email, password, username, phone } = formValues;
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
  if (currentUser) navigate("/");
  });

  return (
    <Container>
      <SignupParentDiv>
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <Input
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
          <Input
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
          <Input
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
          <Input
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
          <Button onClick={handleSignIn}>Signup</Button>
        </form>
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
`;

const Input = styled.input`
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  outline-color: transparent;
`;

const Button = styled.button`
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
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
