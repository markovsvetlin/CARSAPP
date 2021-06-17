import styled from "styled-components";
import { useRouter } from "next/router";

const Post = ({ image, text, type }) => {
  const router = useRouter();
  return (
    <PostContainer
      className={`post-container ${type}`}
      type={type}
      onClick={() => router.push(`${image.id}`)}
    >
      <img className="post-image" src={image.urls.small} />
      <div className="post-content">
        <span className="author">Rickie Baroch - June 6, 2019</span>
        <span className="category">Vehicle</span>
        <p className="title">
          Lbasddsadasdas dsadasd das das da d asd asd asd{" "}
        </p>
        <p className="text">{text}</p>
      </div>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 10px;
  color: #ffffff;
  font-family: PT Sans;
  .category {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 12px;
    padding: 0.2em 0.5em;
    border-radius: 0.5em;
    background-color: #4a90e2;
    z-index: 5;
    color: white;
  }
  img {
    object-fit: cover;
  }
  &.primary {
    .title {
      font-size: 26px;
      margin: -100px 0px 0px 20px;
      line-height: 36px;
    }
    .author {
      font-size: 14px;
      position: absolute;
      top: 545px;
      left: 20px;
    }
    .post-image {
      width: 100%;
      height: 66em;
    }
  }

  &.rightSection {
    .post-image {
      width: 100%;
      height: 32em;
    }
    .title {
      font-size: 20px;
      margin: -70px 0px 0px 20px;
      line-height: 30px;
    }
    .author {
      z-index: 2;
      font-size: 14px;
      position: absolute;
      top: 240px;
      left: 20px;
    }
  }

  &.restContent {
    .post-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      @media (max-width: 768px) {
        position: static;
      }

      @media (min-width: 769px) {
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
        margin: -130px 20px 50px 20px;
        border-radius: 5px;
        padding: 25px;
      }
      .text {
        order: 3;
        font-size: 14px;
        line-height: 24px;
        color: #666666;
      }
      .title {
        color: #171717;
        font-size: 25px;
        margin: 30px 0px 10px 0px;
        line-height: 28px;
        order: 1;
      }
      .author {
        order: 2;
        font-style: italic;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #666666;
        margin-bottom: 30px;
      }
    }
    .post-image {
      z-index: 1;
      width: 100%;
      object-fit: cover;
      max-height: 450px;
      @media (max-width: 768px) {
        max-height: 270px;
      }
      @media (max-width: 568px) {
        max-height: 180px;
      }
    }
  }
  &.character {
    display: flex;
    flex-direction: column;
    .title {
      color: #171717;
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      margin: 0px;
      order: 1;
      margin-top: 1em;
    }
    .author {
      order: 2;
      font-style: italic;
      font-size: 14px;
      line-height: 18px;
      color: #999999;
      margin: 1em 0em 1em 1em;
    }
    .text {
      order: 3;
      font-size: 15px;
      line-height: 25px;
      color: #666666;
    }
    img {
      object-fit: cover;
      width: 100%;
    }
    .category {
      display: none;
    }
  }

  &.popular-posts {
    .post-content {
      display: flex;
      flex-direction: column;
      margin-bottom: 3em;
    }
    .title {
      order: 1;
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;
      color: #171717;
      margin-top: 0px;
    }
    .author {
      font-style: italic;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #666666;
      order: 2;
    }

    img {
      object-fit: cover;
      width: 100%;
      max-height: 150px;
      @media (min-width: 1024px) {
        max-height: 220px;
      }
    }
  }
  &.carousel {
    img {
      height: 250px;
      width: 100%;
      position: relative;
      z-index: 1;
    }
    .post-content {
      z-index: 200;
      margin-top: -120px;
      margin-left: 20px;
    }
    .title {
      position: relative;
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
      margin: 0px;
      z-index: 4;
    }
    .author {
      position: relative;
      z-index: 4;
      font-size: 14px;
      line-height: 18px;
      color: #ffffff;
    }
  }

  &.recent-posts {
    display: flex;
    .post-content {
      display: flex;
      flex-direction: column;
    }

    .title {
      order: 1;
      font-weight: bold;
      font-size: 15px;
      line-height: 26px;
      color: #ffffff;
      padding-right: 200px;

      margin-top: 10px;
    }
    .author {
      order: 2;
      font-style: italic;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
      color: #cecece;
    }
    .category {
      display: none;
    }
    img {
      width: 150px;
      height: auto;
      margin: 20px;
    }
  }
`;

export default Post;
