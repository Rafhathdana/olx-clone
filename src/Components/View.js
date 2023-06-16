import React from 'react';
import styled from 'styled-components';

const ViewParentDiv = styled.div`
  padding-top: 4em;
  display: flex;
`;

const ImageShowDiv = styled.div`
  padding: 16px;
  width: 70vw;
`;

const Image = styled.img`
  width: 65vw;
  height: 85vh;
`;

const RightSection = styled.div`
  padding: 16px;
  margin-top: 3em;
  width: 30vw;
`;

const ProductDetails = styled.div`
  &:first-child {
    font-weight: 700;
    margin-bottom: 8px;
    color: #002f34;
    font-size: 34px;
    line-height: 32px;
    margin-bottom: 20px;
  }

  border: 1px solid black;
  padding: 6px;
  border-radius: 6px;
  margin-bottom: 2em;
  width: 100%;
`;

const ContactDetails = styled.div`
  &:first-child {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    color: #002f34;
    font-weight: 400;
    padding: 0;
  }

  border: 1px solid black;
  padding: 6px;
  border-radius: 6px;
`;

export default function View() {
  return (
    <div>
      <ViewParentDiv>
        <ImageShowDiv>
          <Image src="../../../Images/R15V3.jpg" alt="" />
        </ImageShowDiv>
        <RightSection>
          <ProductDetails>
            <p>Product Name</p>
            <p>Product Description</p>
            <p>Price</p>
            <p>Category</p>
            <p>Location</p>
          </ProductDetails>
          <ContactDetails>
            <p>Contact Details</p>
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
          </ContactDetails>
        </RightSection>
      </ViewParentDiv>
    </div>
  );
}
