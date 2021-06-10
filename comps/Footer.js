import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Post from "./Post";
import { useMediaQuery } from "react-responsive";

const Footer = ({ images }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Container isMobile={isMobile}>
        <Contact isMobile={isMobile}>
          <h3>Premium Car</h3>
          <p>
            loremLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
          </p>
          <h2>Keep in touch</h2>
          <Icons>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faPinterestP} />
            <FontAwesomeIcon icon={faGooglePlusG} />
            <FontAwesomeIcon icon={faInstagram} />
          </Icons>
        </Contact>
        {!isMobile && (
          <RecentPosts>
            <h3>Recent Posts</h3>
            {images?.slice(0, 2).map((image) => (
              <Post image={image} />
            ))}
          </RecentPosts>
        )}
      </Container>
      <Rights>
        <h3>@2019 Logwork. All Right Reserved</h3>
      </Rights>
    </>
  );
};

export default Footer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
  column-gap: 2.5em;
  width: 100%;
  height: 28em;
  background-color: #0e1111;
`;
const Contact = styled.div`
  margin-left: ${({ isMobile }) => (!isMobile ? "3em" : "0.5em")};
  padding-left: ${({ isMobile }) => (!isMobile ? "3em" : "0.5em")};
  padding-top: 3em;

  @media (max-width: 1024px) {
    margin: 1em;
    padding: 1em;
  }

  p {
    padding-right: 10px;
  }

  h2 {
    margin-top: ${({ isMobile }) => (!isMobile ? "2em" : "2.5em")};
  }
`;
const Icons = styled.div`
  svg {
    font-size: 15px;
    background-color: #353839;
    margin-right: 10px;
    padding: 8px 15px;
    @media (max-width: 600px) {
      font-size: 12px;
      padding: 8px 15px;
      margin-right: 5px;
    }
  }
`;
const RecentPosts = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 70px;
  }

  div {
    display: flex;

    width: 500px;
    span {
      display: none;
      &:nth-child(1) {
        display: inline;
        order: 2;
        font-size: 15px;
        padding-left: 20px;
      }
    }
  }
  p {
    margin-left: 20px;
    font-weight: bold;
    &:nth-child(4) {
      display: none;
    }
  }
  .post-content {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
`;

const Rights = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 80px;
  margin: 0px;

  h3 {
    margin: 0px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
