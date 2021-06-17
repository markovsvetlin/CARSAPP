import styled from "styled-components";
import Post from "../comps/Post";
import { useState } from "react";
import useWindowDimensions from "./useWindowDemensions";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [initialX, setInitialX] = useState(null);
  const { width } = useWindowDimensions();

  function startTouch(e) {
    setInitialX(e.touches[0].clientX);
  }
  function changeSlide(e) {
    if (initialX === 0) return;
    if (initialX - e.changedTouches[0].clientX > 0) {
      setCurrentSlide((currentSlide) => currentSlide + 1);
    } else if (initialX - e.changedTouches[0].clientX < 0 && currentSlide > 1) {
      setCurrentSlide((currentSlide) => currentSlide - 1);
    }
  }

  return width < 813 ? (
    <Container
      onTouchStart={(e) => {
        startTouch(e);
      }}
      onTouchEnd={(e) => {
        changeSlide(e);
      }}
    >
      {images.map((image, index, array) => {
        if (index + 1 === currentSlide) {
          return <Post type={"carousel"} image={image} />;
        }
        if (array.length < currentSlide) setCurrentSlide(1);
      })}
      <div className="dots">
        {images.map((image, index, array) => (
          <span
            className={index + 1 === currentSlide ? "activeDot dot" : "dot"}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </Container>
  ) : (
    <DesktopContainer>
      <h2>Partners</h2>
      <div className="slider">
        <div className="slide-track">
          {images.slice(0, 5).map((image) => (
            <div className="slide">
              <img src={image.urls.small} />
            </div>
          ))}
          {images.slice(0, 5).map((image) => (
            <div className="slide">
              <img src={image.urls.small} />
            </div>
          ))}
        </div>
      </div>
    </DesktopContainer>
  );
};

export default Carousel;

const Container = styled.div`
  width: 100%;

  .dots {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  .dot {
    width: 10px;
    height: 10px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 5px;
    z-index: 3;
  }
  .activeDot {
    background: black;
  }
`;

const DesktopContainer = styled.div`
  h2 {
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;
    color: #171717;
    margin-bottom: 30px;
  }
  display: flex;
  flex-direction: column;
  margin-left: 220px;
  margin-bottom: 100px;
  .slider {
    height: 250px;
    position: relative;
    width: 80%;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    background: linear-gradient(
      90deg,
      rgba(253, 0, 0, 0.99) -0.17%,
      rgba(255, 255, 255, 0.99) -0.16%,
      rgba(229, 229, 229, 0) 22.78%,
      rgba(255, 255, 255, 0) 77.04%,
      rgba(255, 255, 255, 0.99) 100%
    );
    mix-blend-mode: normal;
    box-shadow: inset 0px 0px 60px -28px #000000;
  }
  .slide-track {
    display: flex;
    animation: scroll 30s linear infinite;
  }
  .slide {
    height: 250px;
    width: 350px;
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  @keyframes scroll {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
`;
