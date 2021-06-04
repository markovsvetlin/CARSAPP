import Post from "../comps/Post";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Carousel from "../comps/Carousel";
import SideBar from "../comps/SideBar";
import Pagination from "../comps/Pagination";
import Footer from "../comps/Footer";

const Home = ({ images }) => {
  console.log(images);
  const imagesArr = images.results;
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const textContent =
    "dasdsd asd dsadsad sad sad asd sad asd asdasd asdasdqweqwe qwe qwe qwf rsd qawd qw  das dsa dsa dsa dsad sad asd asd asd asd sd sad asd saasd asd sad asd asd asd as dasd asd asd asd asd sad a";
  return (
    <>
      {!isMobile ? (
        <PrimarySection>
          <PrimaryPost>
            {imagesArr.slice(4, 5).map((image) => {
              return <Post image={image} />;
            })}
          </PrimaryPost>
          <RightSection>
            {imagesArr.slice(5, 9).map((image, index) => {
              return <Post key={index} image={image} />;
            })}
          </RightSection>
        </PrimarySection>
      ) : (
        <Carousel images={imagesArr} />
      )}
      <RestContent isMobile={isMobile}>
        <LeftSide>
          {imagesArr.slice(5, 15).map((image) => {
            return <Post text={!isMobile && textContent} image={image} />;
          })}
        </LeftSide>
        {!isMobile && <SideBar text={textContent} images={imagesArr} />}
        <Pagination />
      </RestContent>
      {!isMobile && <Carousel images={imagesArr} />}
      <Footer images={imagesArr} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=cars&client_id=KqKdgpKGcYsmlgKjlTsTednSV8cqHvQjyGsqo_-q-eA`
  );
  const images = await res.json();

  return {
    props: { images },
  };
}

const PrimarySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  margin: 30px 300px 50px 300px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    margin: 10px;
  }
`;
const PrimaryPost = styled.div`
  height: auto;
  width: 100%;
  img {
    width: 100%;
    height: 630px;
    object-fit: cover;
  }
  span {
    position: absolute;
    color: white;
    top: 30px;
    left: 30px;
    font-size: 16px;
    background-color: #4267b2;
    padding: 1px 10px;
    border-radius: 10px;

    &:nth-child(1) {
      position: absolute;
      left: 20px;
      padding: 5px;
      color: white;
      font-size: 12px;
      top: 530px;
      background-color: transparent;
    }
  }

  p {
    position: absolute;
    bottom: 2px;
    padding: 13px;
    line-height: 26px;
    left: 10px;
    font-size: 20px;
    font-weight: 800;
  }
`;
const RightSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  height: 230px;
  span {
    position: absolute;
    color: white;
    top: 10px;
    left: 20px;
    font-size: 16px;
    background-color: #4267b2;
    padding: 1px 10px;
    border-radius: 10px;
    &:nth-child(1) {
      position: absolute;
      top: 200px;
      left: 20px;
      padding: 5px;
      color: white;
      font-size: 12px;
      background-color: transparent;
    }
  }
  P {
    position: absolute;
    bottom: 2px;
    padding: 13px;
    line-height: 26px;
    left: 10px;
    font-size: 20px;
    font-weight: 800;
  }
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
`;
const RestContent = styled.div`
  display: grid;
  grid-template-columns: ${({ isMobile }) => (!isMobile ? "2fr 1fr" : "1fr")};
  margin: ${({ isMobile }) => (!isMobile ? "30px 300px 150px 300px;" : "10px")};
`;
const LeftSide = styled.div`
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    position: relative;
    margin-bottom: 140px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
  }
  .LeftSide {
    position: absolute;
    z-index: 1;
    bottom: 5px;
    color: black;
    background-color: white;
    margin: 0px 30px 50px 30px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    P {
      font-size: 15px;
      color: grey;
      line-height: 1;
      &:nth-child(3) {
        font-size: 25px;
        margin-bottom: 60px;
        margin-top: 36px;
      }
    }
    span {
      background-color: #4267b2;
      color: white;
      position: absolute;
      top: 20px;
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 16px;
      &:nth-child(1) {
        background-color: transparent;
        position: absolute;
        top: 105px;
        left: 19px;
        font-style: italic;
        color: grey;
        padding: 15px 0px 0px 9px;
      }
    }
  }
`;
