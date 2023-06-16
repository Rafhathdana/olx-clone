import React from "react";
import styled from "styled-components";
import Arrow from "../assets/Arrow";

function Banner() {
  return (
    <Container>
      <div className="bannerParentDiv">
        <div className="bannerChildDiv">
          <div className="menuBar">
            <div className="categoryMenu">
              <span>ALL CATEGORIES</span>
              <Arrow />
            </div>
            <div className="otherQuickOptions">
              <span>Cars</span>
              <span>Motorcy...</span>
              <span>Mobile Ph...</span>
              <span>For Sale:Houses & Apart...</span>
              <span>Scoot...</span>
              <span>Commercial & Other Ve...</span>
              <span>For Rent: House & Apart...</span>
            </div>
          </div>
          <div className="banner">
            <img src="../../../Images/banner copy.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  .bannerParentDiv {
    padding-top: 4em;
  }

  .bannerChildDiv {
    .menuBar {
      display: flex;
      padding: 10px 16px;

      .categoryMenu {
        span {
          margin-right: 16px;
          font-weight: bolder;
        }
      }

      .otherQuickOptions {
        span {
          padding: 10px;
        }
      }
    }

    .banner {
      position: relative;
      width: 100vw;

      img {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .otherQuickOptions {
      display: none;
    }

    .bannerChildDiv .banner {
      position: relative;
    }
  }
`;
