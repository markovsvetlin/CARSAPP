import styled from "styled-components";
import { useRouter } from "next/router";

const Post = ({ image, text }) => {
  const router = useRouter();

  return (
    <PostContainer onClick={() => router.push(`${image.id}`)}>
      <img src={image.urls.small} />
      <div className="post-content">
        <span>Rickie Baroch - June 6, 2019</span>
        <span>Vehicle</span>
        <p>Lbasdasdas das das da d asd asd asd </p>
        <p>{text}</p>
      </div>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export default Post;
