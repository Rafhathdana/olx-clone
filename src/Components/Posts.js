import React, { useContext, useEffect, useState } from "react";
import Heart from "../assets/Heart";
import styled from "styled-components";
import { firebasedb } from "../utils/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { PostContex } from "../store/PostContext";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firebasedb, "products"));
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data());
      // });
      const allPost = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setProducts(allPost);
    };

    fetchData();
  }, []);
  const { setPostDetails } = useContext(PostContex);
  const navigate = useNavigate();
  return (
    <PostParentDiv>
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return (
              <Card
                onClick={() => {
                  setPostDetails(product);
                  navigate("/view");
                }}
              >
                <div className="favorite">
                  <Heart />
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <Recommendations>
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <Card>
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </Card>
        </div>
      </Recommendations>
    </PostParentDiv>
  );
}

export default Posts;

const PostParentDiv = styled.div`
  .moreView {
    margin: 16px 16px 24px;
    padding: 16px 16px 32px;
    background-color: #ebeeef;
    border-radius: 4px;
    .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      & :first-child {
        font-size: 24px;
        color: #002f34;
      }

      & :last-child {
        font-size: 14px;
        color: #002f34;
      }
    }
    .cards {
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }
`;

const Card = styled.div`
  margin-right: 15px;
  padding: 13px;
  max-width: 222px;
  width: 222px;
  height: 270px;
  background-color: white;
  display: inline-block;
  cursor: pointer;

  .favorite {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100px;
      max-width: 100%;
      max-height: 100%;
      min-height: 100%;
      text-align: center;
    }
  }

  .content {
    .rate {
      margin-top: 10px;
      font-size: larger;
      font-weight: bold;
    }

    .kilometer {
      font-size: medium;
    }

    .name {
      font-size: small;
    }
  }

  .date {
    display: flex;
    justify-content: flex-end;
    font-size: small;
  }
`;

const Recommendations = styled.div`
  margin: 16px 16px 24px;

  .heading span {
    font-size: 24px;
    color: #002f34;
  }
  .cards {
    display: flex;
  }
`;
