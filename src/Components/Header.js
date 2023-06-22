import React, { useEffect } from "react";
import styled from "styled-components";
import OlxLogo from "../assets/OlxLogo";
import Search from "../assets/Search";
import Arrow from "../assets/Arrow";
import SellButton from "../assets/SellButton";
import SellButtonPlus from "../assets/SellButtonPlus";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/Context";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = async () => {
    signOut(firebaseAuth).then(() => {
      setUser(null);
      navigate("/login");
    });
  };

  // Listen for the logout button click even
  return (
    <HeaderParentDiv>
      <HeaderChildDiv>
        <div className="brandName" onClick={() => navigate("/")}>
          <OlxLogo />
        </div>
        <PlaceSearch>
          <Search />
          <input type="text" />
          <Arrow />
        </PlaceSearch>
        <ProductSearch>
          <div className="input">
            <input
              type="text"
              placeholder="Find car, mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </ProductSearch>
        <Language>
          <span>ENGLISH</span>
          <Arrow />
        </Language>
        <LoginPage>
          {user ? (
            <span>
              Welcome {user.displayName}
              <hr />
            </span>
          ) : (
            <span onClick={() => navigate("/login")}>Login</span>
          )}
        </LoginPage>
        <LoginPage>
          {user ? (
            <span onClick={() => handleLogout}>Logout</span>
          ) : (
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          )}
        </LoginPage>
        <SellMenu onClick={() => navigate("/create")}>
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </SellMenu>
      </HeaderChildDiv>
    </HeaderParentDiv>
  );
};

export default Header;

const HeaderParentDiv = styled.div`
  padding: 10px;
  background-color: whitesmoke;
  position: fixed;
  width: 100vw;
  z-index: 999;
`;

const HeaderChildDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlaceSearch = styled.div`
  width: 16em;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border: 2px solid #002f34;
  border-radius: 4px;
  background-color: white;

  ::selection {
    border-color: #23e5db;
    outline-color: #23e5db;
  }

  input {
    border-color: transparent;
    outline-color: transparent;
  }
`;

const ProductSearch = styled.div`
  width: 35em;
  height: 48px;
  border: 2px solid #002f34;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .input {
    width: 100%;
    height: 100%;
    display: flex;

    input {
      border-color: transparent;
      outline-color: transparent;
      width: 100%;
      align-items: center;
    }
  }

  .searchAction {
    min-width: 48px;
    height: 48px;
    position: relative;
    display: flex;
    cursor: pointer;
    background-color: #002f34;
    border-radius: 0 4px 4px 0;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      fill: white;
    }
  }
`;

const Language = styled.div`
  height: 48px;
  display: flex;
  align-items: center;

  span {
    font-size: 15px;
    white-space: normal;
    text-overflow: ellipsis;
    font-weight: bolder;
    margin-right: 5px;
  }

  svg {
  }
`;

const LoginPage = styled.div`
  hr {
    margin: 0;
    background-color: black;
    height: 2px;
  }

  span {
    cursor: pointer;
    text-decoration: none;
  }
`;

const SellMenu = styled.div`
  position: relative;
  cursor: pointer;

  .all {
    fill: white;
  }

  .top {
    fill: #23e5db;
  }

  .left {
    fill: #ffce32;
  }

  .right {
    fill: #3a77ff;
  }

  .sellMenuContent {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #002f34;
  }

  .sellMenuContent span {
    margin-left: 5px;
  }
`;
