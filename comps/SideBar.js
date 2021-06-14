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
            <Post image={image} text={text} />
            <button onClick={() => router.push(`${image.id}`)}>
              Continue reading
            </button>{" "}
          </div>
        ))}
      </Character>
      <PopularPosts>
        <h3 className="popular-post-title">Popular posts</h3>
        {images.slice(1, 7).map((image, index) => (
          <Post key={index} image={image} />
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
  margin-left: 4em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  * {
    font-family: PT Sans;
  }
`;

const Character = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  div {
    .post-content {
      display: flex;
      flex-direction: column;
      margin: 0px;
      padding: 0px;
      box-shadow: none;
    }
    .category {
      display: none;
    }
    post-image {
      width: 100%;
    }

    button {
      width: 100%;
      color: white;
      background-color: #232323;
      padding: 1em 0em;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
      font-size: 14px;
    }

    .author {
      order: 3;
      font-size: 12px;
      color: grey;

      font-style: italic;
    }
    .title {
      font-size: 18px;
      line-height: 23px;
      color: #171717;
    }
    .text {
      font-size: 15px;
      line-height: 25px;
    }
  }
`;
const PopularPosts = styled.div`
  .post-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .post-content {
      margin: 0px;
      padding: 0px;
      z-index: 5;
      box-shadow: none;
    }
  }

  .title {
    font-size: 20px;
    line-height: 25px;
    margin-left: 10px;
  }
  .post-image {
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }

  .author {
    font-style: italic;
    margin-left: 10px;
  }
  .category {
    margin: -180px 0px 180px 10px;
    z-index: 2;
  }

  .popular-post-title {
    color: #171717;
    font-size: 18px;
    margin: 1em 0em 0.2em 0em;
    font-weight: 700;
  }
`;
const TagsContainer = styled.div`
  max-width: 300px;
  height: 300px;
  h3 {
    color: black;
  }
`;
const Tags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  border-radius: 3px;
  color: black;
  span {
    margin-right: 10px;
    background-color: #ebebeb;
    padding: 5px 5px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 30px;
    color: #171717;
    margin: 5px;
  }
`;
