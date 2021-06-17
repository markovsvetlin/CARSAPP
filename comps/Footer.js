import styled from "styled-components";
import Post from "./Post";
import useWindowDimensions from "./useWindowDemensions";

const Footer = ({ images }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <Container>
        <Contact>
          <h3 className="logo">
            Premium <span>Car</span>
          </h3>
          <p>
            loremLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
          </p>
          <h2 className="keep-intouch">Keep in touch</h2>
          <Icons>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              {" "}
              <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z" />
            </svg>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781" />
            </svg>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              width="26px"
              height="26px"
            >
              <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 18.421875 3.558594 23.046875 8.316406 24.917969 C 8.296875 24.480469 8.296875 22.210938 9.875 15.441406 C 10.085938 13.183594 9.792969 12.382813 9.792969 11.445313 C 9.792969 9.316406 10.898438 8.867188 11.546875 8.867188 C 12.46875 8.867188 13.738281 9.21875 13.738281 10.703125 C 13.738281 12.402344 12.351563 12.851563 12.351563 12.851563 C 12.351563 12.851563 12.253906 13.285156 12.136719 14.492188 C 12.023438 15.703125 12.507813 17.015625 14.480469 17.015625 C 17.644531 17.015625 18.132813 12.621094 18.132813 11.410156 C 18.132813 9.742188 16.910156 6.351563 13.109375 6.351563 C 8.042969 6.351563 7.171875 10.890625 7.171875 12.101563 C 7.171875 12.621094 7.3125 13.535156 7.410156 13.925781 C 8.367188 14.082031 8.269531 15.390625 7.859375 15.761719 C 7.40625 16.171875 5.066406 16.660156 5.066406 11.527344 C 5.066406 6.640625 9.421875 4.121094 13.246094 4.121094 C 16.886719 4.121094 20.847656 6.632813 20.847656 11.46875 C 20.847656 15.789063 17.746094 19.1875 14.484375 19.1875 C 12.527344 19.1875 11.488281 17.574219 11.488281 17.574219 C 11.488281 19.085938 8.714844 24.273438 8.359375 24.933594 C 9.800781 25.492188 11.363281 25.8125 13 25.8125 C 20.078125 25.8125 25.8125 20.078125 25.8125 13 C 25.8125 5.921875 20.074219 0.1875 13 0.1875 Z" />
            </svg>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              {" "}
              <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10,16c-2.209,0-4-1.791-4-4 c0-2.209,1.791-4,4-4c1.042,0,1.982,0.408,2.694,1.061l-1.093,1.034C11.167,9.729,10.613,9.5,10,9.5c-1.381,0-2.5,1.119-2.5,2.5 c0,1.381,1.119,2.5,2.5,2.5c1.209,0,2.218-0.859,2.45-2H10V11h3.859C13.942,11.321,14,11.653,14,12C14,14.209,12.209,16,10,16z M18,12v1.5h-1V12h-1.5v-1H17V9.5h1V11h1.5v1H18z" />
            </svg>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              {" "}
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
            </svg>
          </Icons>
        </Contact>
        {width > 768 && (
          <RecentPosts>
            <h3>Recent Posts</h3>
            {images?.slice(0, 2)?.map((image, index) => (
              <Post type={"recent-posts"} key={index} image={image} />
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
  background: #171717;
  padding-bottom: 80px;
`;
const Contact = styled.div`
  padding-top: 50px;
  margin-left: 8em;
  @media (max-width: 812px) {
    margin-left: 1em;
  }
  .logo {
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    span {
      background: #4a90e2;
      border-radius: 3px;
      font-size: 14px;
      line-height: 18px;
      color: #ffffff;
      padding: 5px;
    }
  }
  p {
    font-size: 14px;
    line-height: 22px;
    color: #cecece;
    width: 80%;
  }
  .keep-intouch {
    font-weight: bold;
    font-size: 1.3em;
    line-height: 26px;
    color: #ffffff;
    margin-top: 50px;
  }
`;
const Icons = styled.div`
  svg {
    background: #373737;
    width: 10px;
    height: 10px;
    path {
      fill: #ffffff;
    }

    margin-right: 10px;
    padding: 5px 10px;
  }
`;
const RecentPosts = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 50px 0px 0px 20px;
  }
`;

const Rights = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #000000;
  width: 100%;
  height: 80px;
  margin: 0px;
  @media (max-width: 812px) {
    justify-content: center;
  }
  h3 {
    font-size: 14px;
    line-height: 18px;
    margin-left: 150px;
    color: #ffffff;
    @media (max-width: 812px) {
      margin-left: 0px;
    }
  }
`;
