import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterParentDiv>
      <Content>
        <div>
          <Heading>
            <p>POPULAR LOCATIONS</p>
          </Heading>
          <List>
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </List>
        </div>
        <div>
          <Heading>
            <p>ABOUT US</p>
          </Heading>
          <List>
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </List>
        </div>
        <div>
          <Heading>
            <p>OLX</p>
          </Heading>
          <List>
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </List>
        </div>
      </Content>
      <FooterSection>
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </FooterSection>
    </FooterParentDiv>
  );
};

export default Footer;

const FooterParentDiv = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ebeeef;
  padding: 16px;
`;

const Heading = styled.div`
  font-size: 24px;
  font-weight: bolder;
`;

const List = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
    }
  }
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #002f34;
  color: whitesmoke;
`;
