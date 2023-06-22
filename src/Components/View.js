import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PostContex } from "../store/PostContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firebasedb } from "../utils/firebase-config";

export default function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContex);
  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(firebasedb, "users"),
        where("id", "==", postDetails.userId)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserDetails(doc.data());
      });
    };

    fetchData();
  }, []);
  return (
    <ViewParentDiv>
      <div className="imageShowDiv">
        <img src="../../../Images/R15V3.jpg" alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </ViewParentDiv>
  );
}

const ViewParentDiv = styled.div`
  padding-top: 4em;
  display: flex;

  .imageShowDiv {
    padding: 16px;
    width: 70vw;

    img {
      width: 100%;
      height: 100%;
      max-width: 65vw;
      max-height: 85vh;
    }
  }

  .rightSection {
    padding: 16px;
    margin-top: 3em;
    width: 30vw;

    .productDetails {
      border: 1px solid black;
      padding: 6px;
      border-radius: 6px;
      margin-bottom: 2em;
      width: 100%;
      & :first-child {
        font-weight: 700;
        color: #002f34;
        font-size: 34px;
        line-height: 32px;
        margin-bottom: 20px;
      }
    }

    .contactDetails {
      border: 1px solid black;
      padding: 6px;
      border-radius: 6px;

      & :first-child {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        color: #002f34;
        padding: 0;
      }
    }
  }
`;
