import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "./Header";

const Create = () => {
  return (
    <Fragment>
      <Header />
      <Card>
        <CenterDiv>
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <Input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <Input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <Input className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <Image alt="Posts" src="" />
          <form>
            <br />
            <input type="file" />
            <br />
            <UploadButton>Upload and Submit</UploadButton>
          </form>
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
