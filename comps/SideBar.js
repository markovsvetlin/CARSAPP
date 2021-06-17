import Post from "../comps/Post";
import styled from "styled-components";
import { useRouter } from "next/router";

const tags = [
  "dasd",
  "dasdas",
  "adqeqwr",
  "dqwqwr",
  "ddqwqrqw",
  "sdaqe",
  "asdas",
  "sdasd",
  "dsadqesd",
  "dsadd",
  "dsadasd",
  "dasdsa",
];

const SideBar = ({ images, text }) => {
  const router = useRouter();
  return (
    <Container>
      <Character>
        {images.slice(0, 1).map((image, index) => (
          <div key={index}>
            <Post type={"character"} image={image} text={text} />
            <button onClick={() => router.push(`${image.id}`)}>
              Continue reading
            </button>{" "}
          </div>
        ))}
      </Character>
      <PopularPosts>
        <h3 className="popular-post-title">Popular posts</h3>
        {images.slice(1, 7).map((image, index) => (
          <Post type={"popular-posts"} key={index} image={image} />
        ))}
      </PopularPosts>
      <TagsContainer>
        <h3>Tags</h3>
        <Tags>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </Tags>
      </TagsContainer>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Character = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }
  button {
    background: #232323;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    padding: 1em;
  }
`;
const PopularPosts = styled.div`
  .popular-post-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    text-align: left;
    font-family: PT Sans;
    color: #171717;
    margin: 2em 0em 0em 0em;
  }
`;
const TagsContainer = styled.div`
  h3 {
    color: black;
  }
`;
const Tags = styled.div`
  font-family: PT Sans;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  span {
    font-size: 14px;
    line-height: 18px;
    color: #171717;
    background: #ebebeb;
    border-radius: 3px;
    margin: 0.3em;
    text-align: center;
    padding: 10px 0px;
    cursor: pointer;
  }
`;
