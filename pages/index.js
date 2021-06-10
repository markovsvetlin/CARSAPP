import { useMediaQuery } from "react-responsive";
import Carousel from "../comps/Carousel";
import Footer from "../comps/Footer";
import HomePage from "../comps/Home/index";

const Home = ({ images }) => {
  const imagesArr = images.results;
  const isPhone = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <HomePage images={imagesArr} />

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
  const images = await res.json();

  return {
    props: { images },
  };
}
