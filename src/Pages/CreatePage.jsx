import React, { Fragment } from "react";
import Header from "../Components/Header";
import Create from "../Components/Create";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/");
  });
  return (
    <Fragment>
      <Header />
      <Create />
    </Fragment>
  );
};

export default CreatePage;
