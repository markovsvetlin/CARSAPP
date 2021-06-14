import { useMediaQuery } from "react-responsive";
import Carousel from "../comps/Carousel";
import Footer from "../comps/Footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import Post from "../comps/Post";
import SideBar from "../comps/SideBar";
import Pagination from "../comps/Pagination";

const Home = (images) => {
  const imagesArr = images.data;
  const isPhone = useMediaQuery({ query: "(max-width: 1024px)" });
  const router = useRouter();

  const isTablet = useMediaQuery({ query: "(max-width:768px)" });
  const textContent =
    "dasdsd asd dsadsad sad sad asd sad asd asdasd asdasdqweqwe qwe qwe qwf rsd qawd qw  das dsa dsa dsa dsad sad asd asd asd asd sd sad asd saasd asd sad asd asd asd as dasd asd asd asd asd sad a";
  if (
    router.isFallback ||
    "undefined" == typeof images.data ||
    null == images.data
  ) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {!isTablet ? (
        <>
          <PrimarySection>
            <PrimaryPost>
              {imagesArr?.slice(4, 5)?.map((image, index) => {
                return <Post key={index} image={image} />;
              })}
            </PrimaryPost>
            <RightSection>
              {imagesArr?.slice(5, 9)?.map((image, index) => {
                return <Post key={index} image={image} />;
              })}
            </RightSection>
          </PrimarySection>
        </>
      ) : (
        <Carousel images={imagesArr} />
      )}
      <RestContent>
        <div style={{ width: "100%" }}>
          {imagesArr?.slice(5, 15)?.map((image, index) => {
            return (
              <Post key={index} text={!isPhone && textContent} image={image} />
            );
          })}
        </div>
        {!isTablet && <SideBar text={textContent} images={imagesArr} />}
      </RestContent>
      <Pagination />
      {!isPhone && <Carousel images={imagesArr} />}
      <Footer images={imagesArr} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=cars&client_id=KqKdgpKGcYsmlgKjlTsTednSV8cqHvQjyGsqo_-q-eA`
  );
  const imagesObj = await res.json();

  const images = { data: imagesObj?.results };

  return {
    props: images,
  };
}
const PrimarySection = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1em;
  padding: 0em 14em;
  margin: 3em 0em;
  * {
    font-family: PT Sans;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 10px 0px 650px 0px;
    padding: 0;
    width: 100%;
  }
  @media (max-width: 1024px) {
    padding: 2em 4em;
    margin: 1em 0em;
  }
`;
const PrimaryPost = styled.div`
  .post-content {
    margin-top: -130px;
    margin-left: 10px;
  }
  .title {
    font-size: 26px;
    z-index: 1;
    line-height: 1.2em;
    margin: 0px;
  }
  .category {
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 1.5vh;
    padding: 0.2em 0.5em;
    border-radius: 0.5em;
    background-color: #4a90e2;
    z-index: 5;
    color: white;
  }
  .author {
    background-color: transparent;
    color: white;
    font-size: 1.5vh;
  }
  .post-container {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 33em;
  }
`;
const RightSection = styled(PrimaryPost)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  width: 100%;
  .post-content {
    margin-top: -98px;
    margin-bottom: 30px;
  }
  .title {
    font-size: 20px;
    line-height: 1.2em;
  }

  .category {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .post-image {
    width: 100%;
    height: 16em;
    object-fit: cover;
  }
  .post-container {
    margin-bottom: 0px;
    max-height: 16em;
  }
`;

const RestContent = styled.div`
  * {
    font-family: PT Sans;
  }

  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 0em 14em;
  margin-top: 8em;

  @media (max-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    padding: 0em 3.6em;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2em 5em;
    margin-top: 2em;
  }
  @media (max-width: 600px) {
    padding: 1em 2em;
    margin-top: 1em;
  }

  .post-image {
    width: 100%;
    object-fit: cover;
    max-height: 450px;
    @media (max-width: 768px) {
      max-height: 300px;
    }
    z-index: 5;
  }

  .post-content {
    @media (max-width: 600px) {
      padding: 0.4em;
    }
    @media (max-width: 768px) {
      margin: -6em 1em 2em 1em;
    }
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    margin: -7em 1em 0em 1em;
    background-color: white;
    padding: 1.6em;
    color: black;
    border-radius: 0.5em;
    margin-bottom: 2em;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .title {
      order: 2;
      font-size: 25px;
      margin-top: 0px;
      margin-bottom: 0.1em;
      @media (max-width: 600px) {
        margin-top: 0.5em;
        font-size: 1em;
        line-height: 1.1em;
      }
    }
    .text {
      order: 4;
      font-size: 14px;
      color: #666666;
      margin: 0px;
    }
    .category {
      order: 1;
      background-color: #4267b2;
      max-width: 3.5em;
      padding: 0.2em 0.5em;
      text-align: center;
      border-radius: 0.5em;
      font-size: 12px;
      color: white;
      @media (max-width: 600px) {
        font-size: 10px;
      }
    }
    .author {
      text-align: left;
      max-width: 100%;
      background-color: transparent;
      order: 3;
      padding: 0px;
      font-size: 14px;
      color: #666666;
      margin-bottom: 1em;
    }
  }
`;
