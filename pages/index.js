import Carousel from "../comps/Carousel";
import Footer from "../comps/Footer";
import styled from "styled-components";
import Post from "../comps/Post";
import SideBar from "../comps/SideBar";
import Pagination from "../comps/Pagination";
import useWindowDemensions from "../comps/useWindowDemensions";

const Home = (images) => {
  const imagesArr = images.data;
  const { width } = useWindowDemensions();
  const textContent =
    "dasdsd asd dsadsad sad sad asd sad asd asdasd asdasdqweqwe qwe qwe qwf rsd qawd qw  das dsa dsa dsa dsad sad asd asd asd asd sd sad asd saasd asd sad asd asd asd as dasd asd asd asd asd sad a";

  return (
    <>
      {width > 812 ? (
        <PrimarySection>
          {imagesArr?.slice(4, 5)?.map((image, index) => {
            return <Post type={"primary"} key={index} image={image} />;
          })}

          <RightSection>
            {imagesArr?.slice(5, 9)?.map((image, index) => {
              return <Post type={"rightSection"} key={index} image={image} />;
            })}
          </RightSection>
        </PrimarySection>
      ) : (
        <Carousel images={imagesArr} />
      )}
      <RestContent>
        <div style={{ width: "100%" }}>
          {imagesArr?.slice(5, 15)?.map((image, index) => {
            return (
              <Post
                type={"restContent"}
                key={index}
                text={width > 812 && textContent}
                image={image}
              />
            );
          })}
        </div>
        {width > 812 && <SideBar text={textContent} images={imagesArr} />}
      </RestContent>
      <Pagination />
      {width > 812 && <Carousel images={imagesArr} />}
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

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 10px 0px 650px 0px;
    padding: 0;
    width: 100%;
  }
  @media (max-width: 1024px) {
    padding: 0em;
    margin: 0em;
  }
`;

const RightSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 320px 320px;
  grid-gap: 1em;
  column-gap: 1.5em;
  width: 100%;
`;

const RestContent = styled.div`
  display: grid;
  grid-template-columns: 2.7fr 1.3fr;
  column-gap: 1.5em;
  margin: 5em 13.5em;
  @media (max-width: 1024px) {
    margin: 5em 6em;
  }
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    margin: 1em;
  }
`;
