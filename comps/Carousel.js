import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "styled-components";
import Post from "../comps/Post";
import { useMediaQuery } from "react-responsive";

const Carousel = ({ images }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // console.log;

  return isMobile ? (
    <SliderWrapper>
      <CarouselProvider
        naturalSlideWidth={900}
        naturalSlideHeight={600}
        totalSlides={5}
        visibleSlides={1}
      >
        <Slider>
          {images?.slice(1, 6)?.map((image, index) => (
            <Slide key={index}>
              <Post image={image} />
            </Slide>
          ))}
        </Slider>
        <DotGroup />
      </CarouselProvider>
    </SliderWrapper>
  ) : (
    <SliderWrapperDesktop>
      <h2>Partners</h2>
      <CarouselProvider
        naturalSlideWidth={900}
        naturalSlideHeight={800}
        totalSlides={10}
        visibleSlides={4}
        isPlaying={true}
        interval={6000}
      >
        <Slider>
          {images?.map((image, index) => (
            <Slide key={index}>
              <Post image={image} />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </SliderWrapperDesktop>
  );
};

export default Carousel;
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
 
  .carousel__inner-slide {
    width: 100%;
    position: relative;
    .post-image {
      width: 100%;
      object-fit: cover;
    }
   
    }
    .category {
      position: absolute;
      color: white;
      top: 5%;
      font-size: 10px;
      background-color: #4267b2;
      padding: 1px 10px;
      margin-left: 10px;
      border-radius: 10px;

      }
      .author {
        position: absolute;
        top: 56%;
        left: 5%;
        z-index: 1;
        font-size: 14px;
        background-color: transparent;
        @media(max-width:600px){
          font-size: 12px;
          top: 66%;
          left:4.5%;
        }
        @media(max-width:768px){
          font-size: 20px;
          top: 76%;
          left:2.5%;
        }
        @media(max-width:568px){
          font-size: 14px;
          top: 67%;
          left:5%;
        }
       
      }
    .title {
      padding: 0px 17px;
      position: absolute;
      top: 56%;
      line-height: 30px;
      font-size: 20px;
     
       @media(max-width:768px){
        font-size: 24px;
        top: 76%;
      }
      @media(max-width:568px){
        font-size: 16px;
        top: 67%;
        left:0px;
      }
      
    }
  }
  .carousel__dot {
    height: 10px;
    width: 1px;
    margin: 3px;
    border-radius: 50%;
    border: 1px solid black;
  }
  .carousel__dot-group {
    position: absolute;
    top: 82%;
    left: 35%;
    @media(max-width:768px){
      top: 86%;
    left: 40%;
    }
    @media(max-width:568px){
      top: 83%;
    left: 35%;
    }
  }
`;

const SliderWrapperDesktop = styled.div`
  h2 {
    color: black;
  }
  margin: 30px 200px;
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  p {
    display: none;
  }
  span {
    display: none;
  }
  .carousel__inner-slide {
    width: 80%;
  }
`;
