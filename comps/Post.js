import styled from "styled-components";
import { useRouter } from "next/router";

const Post = ({ image, text }) => {
  const router = useRouter();

  return (
    <PostContainer
      className="post-container"
      onClick={() => router.push(`${image.id}`)}
    >
      <img className="post-image" src={image.urls.small} />
      <div className="post-content">
        <span className="author">Rickie Baroch - June 6, 2019</span>
        <span className="category">Vehicle</span>
        <p className="title">Lbasdasdas das das da d asd asd asd </p>
        <p className="text">{text}</p>
      </div>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export default Post;
