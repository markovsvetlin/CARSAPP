import {
    CarouselProvider,
    Slider,
    Slide,
    DotGroup,
  } from 'pure-react-carousel'
  import 'pure-react-carousel/dist/react-carousel.es.css';
  import styled from 'styled-components';
  import Post from '../comps/Post'
  import { useMediaQuery } from 'react-responsive';
  


const Carousel = ({images}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
console.log

    return (
        isMobile ?
        <SliderWrapper>
          <CarouselProvider
            naturalSlideWidth={900}
            naturalSlideHeight={600}
            totalSlides={5}
            visibleSlides={1}
          >
            <Slider>
              {images.slice(1, 6).map(image => <Slide><Post image={image} /></Slide>)}
            </Slider>
            <DotGroup />
          </CarouselProvider>
        </SliderWrapper>
        : <SliderWrapperDesktop>
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
            {images.map(image => <Slide><Post image={image} /></Slide>)}
          </Slider>
        
        </CarouselProvider>
      </SliderWrapperDesktop>
    )
}

export default Carousel
const SliderWrapper = styled.div`
position:relative;
width: 100%;
height:auto;


.carousel__inner-slide {
    margin-top:30px;
  width:100%;
  img{
    text-align: center;
    position:relative;
    height:300px;
    width:100%;
    object-fit:cover;
    
    
  }
  span{
    position:absolute;
    color:white;
    top:25%;
    font-size:10px;
    background-color:#4267B2;
    padding:1px 10px;
    margin-left:10px;
    border-radius:10px;
  
    &:nth-child(1){
      position:absolute;
      top:69%;
      left:1%;
      z-index:1;
      font-size:12px;
      background-color:transparent;
    } 

  }
  p{
    position:absolute;
    top:70%;
    left:5%;
    font-size:1rem;
  }
}
.carousel__dot {
  height: 11px;
  width: 1px;
  margin: 3px;
  border-radius: 50%;
  border: 1px solid black;
}
.carousel__dot-group{
  position:absolute;
  top: 88%;
  left:35%;
  
}

`

const SliderWrapperDesktop = styled.div`
h2{
    color:black;
}

margin:30px 200px;
img{
    height:300px;
    width:100%;
    object-fit:cover;
   
 
}
p{
    display:none;
}
span{
    display:none
}
.carousel__inner-slide {
   width:80%;
    
  }

`