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
    <div style={{ marginLeft: 28, display: "flex", flexDirection: "column" }}>
      <Character>
        {images.slice(0, 1).map((image) => (
          <div>
            <Post image={image} text={text} />
            <button onClick={() => router.push(`${image.id}`)}>
              Continue reading
            </button>{" "}
          </div>
        ))}
      </Character>
      <PopularPosts>
        <h3>Popular posts</h3>
        {images.slice(1, 7).map((image) => (
          <Post image={image} />
        ))}
      </PopularPosts>
      <TagsContainer>
        <h3>Tags</h3>
        <Tags>
          {tags.map((tag) => (
            <div>
              <span>{tag}</span>
            </div>
          ))}
        </Tags>
      </TagsContainer>
    </div>
  );
};

export default SideBar;

const Character = styled.div`
  position: relative;
  flex-direction: column;
  span {
    &:nth-child(2) {
      display: none;
    }
  }
  img {
    width: 100%;
  }

  button {
    width: 100%;
    color: white;
    background-color: black;
    height: 70px;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 70px;
  }
  .post-content {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    height: 150px;
    box-shadow: none;

    span {
      order: 3;
      font-size: 12px;
      color: grey;
      margin-left: 30px;
      font-style: italic;
    }
    p {
      order: 3;
      line-height: 20px;
      color: grey;
      margin-bottom: 20px;

      &:nth-child(3) {
        order: 1;
        font-size: 17px;
        font-weight: bold;
        color: black;

        margin-bottom: 10px;
      }
    }
  }
`;
const PopularPosts = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100%;
    max-height: 230px;
    z-index: 2;
  }
  h3 {
    color: black;
  }

  .post-content {
    padding: 20px 20px 50px 20px;
    background-color: transparent;
    height: 5rem;
    margin: 0px 0px 20px 0px;
    @media (max-width: 1024) {
      padding: 0px;
      margin: 0px 20px;
    }
  }
  span {
    position: absolute;
    top: 80px;
    &:nth-child(2) {
      display: block;
      top: -210px;
      z-index: 1;
    }
  }
  p {
    line-height: 25px;
  }
`;
const TagsContainer = styled.div`
  h3 {
    color: black;
  }
`;
const Tags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 200px;

  color: black;
  span {
    background-color: lightgrey;
    padding: 10px;

    margin-bottom: 30px;
  }
`;
