import Post from "../../comps/Post";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Pagination from "../../comps/Pagination";
import SideBar from "../../comps/SideBar";
import Carousel from "../../comps/Carousel";

const HomePage = ({ images }) => {
  const isPhone = useMediaQuery({ query: "(max-width:500px)" });
  const isTablet = useMediaQuery({ query: "(max-width:768px)" });
  const textContent =
    "dasdsd asd dsadsad sad sad asd sad asd asdasd asdasdqweqwe qwe qwe qwf rsd qawd qw  das dsa dsa dsa dsad sad asd asd asd asd sd sad asd saasd asd sad asd asd asd as dasd asd asd asd asd sad a";
  return (
    <>
      {!isPhone ? (
        <>
          <PrimarySection>
            <PrimaryPost>
              {images.slice(4, 5).map((image) => {
                return <Post image={image} />;
              })}
            </PrimaryPost>
            <RightSection>
              {images.slice(5, 9).map((image, index) => {
                return <Post key={index} image={image} />;
              })}
            </RightSection>
          </PrimarySection>
        </>
      ) : (
        <Carousel images={images} />
      )}
      <RestContent>
        <div>
          {images.slice(5, 15).map((image) => {
            return <Post text={!isPhone && textContent} image={image} />;
          })}
        </div>
        {!isTablet && <SideBar text={textContent} images={images} />}
      </RestContent>
      <Pagination />
    </>
  );
};

export default HomePage;

const PrimarySection = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1em;
  padding: 0em 8em;
  height: 600px;
  margin: 3em 0em;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 10px 0px 650px 0px;
    padding: 0;
    width: 100%;
  }
`;
const PrimaryPost = styled.div`
  .post-content {
    p {
      position: absolute;
      font-size: 1.2em;

      z-index: 1;
      bottom: 2em;
      left: 1.2em;
      line-height: 1.2em;
    }
    span {
      position: absolute;
      font-size: 15px;
      padding: 0.2em 0.5em;
      border-radius: 0.5em;
      top: 1.5em;
      left: 1.5em;
      background-color: #4267b2;
      z-index: 5;
      color: white;
      &:nth-child(1) {
        background-color: transparent;
        color: white;
        top: 31.5em;
        left: 1.2em;
        @media (max-width: 1024px) {
          top: 33em;
        }
        @media (min-width: 1440px) {
          top: 33em;
        }
      }
    }
  }

  img {
    width: 100%;
    height: 600px;
    position: relative;
    object-fit: cover;
  }
`;
const RightSection = styled(PrimaryPost)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5em;
  height: 600px;
  width: 100%;

  .post-content {
    p {
      bottom: 1em;
    }
    span {
      &:nth-child(1) {
        top: 12em;

        @media (max-width: 1024px) {
          top: 14em;
        }
        @media (max-width: 768px) {
          top: 12em;
        }
        @media (min-width: 1440px) {
          top: 13em;
        }
      }
    }
  }

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`;

const RestContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 0em 8em;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0px;
    width: 100%;
    margin-top: 2em;
  }

  img {
    width: 100%;
    object-fit: cover;
    max-height: 500px;
    z-index: 5;
  }

  .post-content {
    @media (max-width: 600px) {
      padding: 0.4em;
      height: 6.4em;
    }
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    margin-top: -7em;
    margin-left: 0.5em;
    width: 90%;
    height: 12em;
    background-color: white;
    padding: 1.6em;
    color: black;
    border-radius: 0.5em;
    margin-bottom: 2em;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    p {
      order: 2;
      font-size: 1.5em;
      margin-top: 0px;
      margin-bottom: 0.1em;
      @media (max-width: 600px) {
        margin-top: 0.5em;
        font-size: 1.1em;
        line-height: 1.1em;
      }
      &:nth-child(4) {
        order: 4;
        font-size: 0.8em;
      }
    }
    span {
      order: 1;
      background-color: #4267b2;
      max-width: 3.5em;
      padding: 0.2em 0.5em;
      border-radius: 0.5em;
      @media (max-width: 600px) {
        font-size: 10px;
      }
      &:nth-child(1) {
        max-width: 100%;
        background-color: transparent;
        order: 3;
        padding: 0px;
        font-size: 0.8em;
        color: grey;
        margin-bottom: 1em;
      }
    }
  }
`;
