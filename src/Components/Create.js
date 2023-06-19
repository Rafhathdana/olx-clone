import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Emptyimage from "../assets/upload-icon.png";
import { AuthContext, FirebaseContext } from "../store/Context";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../utils/firebase-config";
const Create = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });
  const handleSubmit = async () => {
    // Create a reference to the storage object.
    const storageRef = ref(storage, `images/${formValue.image.name}`);

    // Upload the image to Firebase Storage using the resumable upload method.
    const uploadTask = uploadBytesResumable(storageRef, formValue.image);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on("state_changed", (state) => {
      console.log(`Upload state changed: ${state}`);
    });
    uploadTask.on("error", (error) => {
      console.log(`Upload error: ${error}`);
    });
    uploadTask.on("complete", async () => {
      console.log("Upload complete!");
      var url = await getDownloadURL(storageRef);
      console.log(url);
      alert(url);
      price
    });

    // Get the download URL for the image.
    // Display the download URL to the user.

    // Log the download URL to the console.
  };
  return (
    <Fragment>
      <Header />
      <Card>
        <CenterDiv>
          <label htmlFor="name">Name</label>
          <br />
          <Input
            className="input"
            type="text"
            id="name"
            name="name"
            value={formValue.name}
            onChange={(e) =>
              setFormValue({
                ...formValue,
                [e.target.name]: e.target.value,
              })
            }
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <Input
            className="input"
            type="text"
            id="category"
            name="category"
            value={formValue.category}
            onChange={(e) =>
              setFormValue({
                ...formValue,
                [e.target.name]: e.target.value,
              })
            }
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <Input
            className="input"
            type="number"
            id="price"
            name="price"
            value={formValue.price}
            onChange={(e) =>
              setFormValue({
                ...formValue,
                [e.target.name]: e.target.value,
              })
            }
          />
          <br />

          <br />
          <Image
            alt="Posts"
            src={
              formValue.image
                ? URL.createObjectURL(formValue.image)
                : Emptyimage
            }
          />

          <br />
          <input
            type="file"
            name="image"
            onChange={(e) =>
              setFormValue({
                ...formValue,
                [e.target.name]: e.target.files[0],
              })
            }
          />
          <br />
          <UploadButton onClick={handleSubmit}>Upload and Submit</UploadButton>
        </CenterDiv>
      </Card>
    </Fragment>
  );
};

export default Create;

const Card = styled.div`
  border: 1px solid black;
`;

const CenterDiv = styled.div`
  border: 1px solid black;
  width: max-content;
  padding: 50px;
  position: absolute;
  top: 65%;
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

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const UploadButton = styled.button`
  margin-top: 30px;
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
