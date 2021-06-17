import Post from "../comps/Post";
import styled from "styled-components";
import Footer from "../comps/Footer";
import useWindowDemensions from "../comps/useWindowDemensions";
import { useRouter } from "next/router";

const Detail = ({ images, imagesArr }) => {
  const width = useWindowDemensions();
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PrimarySection width={width}>
        <h2 className="detail-title">
          One of Saturn`s largest rings may be newer than anyone
        </h2>
        <p className="detail-exerpt">
          dasdsd asd dsadsad sad sad asd sad asd asdasd asdasdqweqwe qwe qwe qwf
          rsd qawd qw das dsa dsa dsa dsad sad asd asd asd asd sd sad asd saasd
          asd
        </p>
        <img className="detail-image" src={images?.urls.regular} />
      </PrimarySection>
      <SecondarySection>
        <Content>
          <User>
            <div className="user-container">
              <img className="user-avatar" src={images?.urls.regular} />
              <div className="user-data">
                <span className="user-name">MIKA MATIKAINEN</span>
                <span className="date">Apr 15, 2020 - 4 min read</span>
              </div>
            </div>
            <div className="Icons">
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
            </div>
          </User>
          <p className="detail-text">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2>Next on the pipeline</h2>
          <p className="detail-text">
            {" "}
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
          <h4 className="ad-text">Advertisment</h4>
          <img className="small-ads" src={images?.urls.regular} />
          <img className="big-ads" src={images?.urls.regular} />
          <p className="ad-text">
            sdds dsa das d asd asda sdsa da sd asd sad asd asd{" "}
          </p>
          <p className="detail-text">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <h4 className="ad-text">Advertisment</h4>
          <img className="small-ads" src={images?.urls.regular} />
          <p className="detail-text">A list look like this</p>
          <ul className="list">
            <li>First item in the list</li>
            <li>Second item in the list</li>
            <li>Third item in the list</li>
          </ul>
          <div className="share">
            <button className="share-buttons">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                {" "}
                <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z" />
              </svg>{" "}
              Share on Facebook
            </button>
            <button className="share-buttons">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781" />
              </svg>
              Share on Twitter
            </button>
          </div>
        </Content>
        <Ads>
          <h4 className="ad-text">Advertisment</h4>
          <img src={images?.urls.regular} />
        </Ads>
      </SecondarySection>

      <MostPopular>
        <h3 className="popular-title">Most Popular</h3>
        <div className="popular-posts">
          {imagesArr?.results?.slice(0, 4)?.map((image) => (
            <Post image={image} />
          ))}
        </div>
      </MostPopular>
      <Footer images={imagesArr?.results} />
    </div>
  );
};

export default Detail;

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?&query=cars&client_id=KqKdgpKGcYsmlgKjlTsTednSV8cqHvQjyGsqo_-q-eA`
  );
  const images = await res.json();
  const paths = images?.results?.map((result) => {
    return {
      params: { id: result.id },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=KqKdgpKGcYsmlgKjlTsTednSV8cqHvQjyGsqo_-q-eA`
  );
  const images = await res.json();

  const resAllImages = await fetch(
    `https://api.unsplash.com/search/photos?&query=cars&client_id=KqKdgpKGcYsmlgKjlTsTednSV8cqHvQjyGsqo_-q-eA`
  );
  const allImages = await resAllImages.json();

  if (!images) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      imagesArr: allImages && allImages,
      images: images && images,
    },
  };
}

//styles

const PrimarySection = styled.div`
  * {
    font-family: PT Sans;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em 0em;
  @media (max-width: 768px) {
    margin: 1em 0em;
  }

  .detail-title {
    max-width: 858px;
    color: black;
    text-align: center;
    padding: 0em 1em;
    font-weight: bold;
    font-size: 54px;
    line-height: 100%;
  }

  .detail-exerpt {
    color: black;
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 170%;
    text-align: center;
    max-width: 994px;
    margin-bottom: 2em;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  .detail-image {
    width: 100%;
    height: ${({ width }) => (width > 768 ? "400px" : "1200px")};
    object-fit: cover;
  }
`;

const SecondarySection = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2em;
  padding: 0em 10em;
  @media (max-width: 1024px) {
    padding: 0em 5em;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0em 1em;
  }
  @media (min-width: 1921px) {
    padding: 0em 40em;
  }
`;

const Content = styled.div`
  padding-right: 2em;
  @media (max-width: 768px) {
    padding: 0em 1em;
  }
  .detail-text {
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 170%;

    color: #000000;
  }
  h4 {
    color: black;
    text-align: center;
  }
  h2 {
    font-family: PT Serif Caption;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 160%;
    color: #000000;
  }
  .ad-text {
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 140%;
    text-align: center;
    text-transform: uppercase;
    color: #373737;
  }
  svg {
    color: black;
  }
  .small-ads {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 2em;
  }
  .list {
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 170%;
    color: #000000;
  }
  .big-ads {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  .small-ads {
    height: 5em;
  }
  .share {
    display: flex;
    justify-content: center;

    .share-buttons {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      font-family: PT Serif;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
      border-radius: 4px;
      color: #000000;
      padding: 0.5em 2em;
      @media (max-width: 460px) {
        font-size: 0.6em;
        padding: 0.5em 1em;
      }
      svg {
        margin-right: 1em;
      }
    }
  }
`;

const User = styled.div`
  * {
    font-family: PT Sans;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  .user-avatar {
    height: 64.64px;
    width: 64.64px;
    border-radius: 3em;
  }
  .user-data {
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    justify-content: center;
    color: #000000;
    @media (max-width: 740px) {
      font-size: 0.6em;
    }
  }
  .user-name {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.05em;
  }
  .date {
    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
  }
  .Icons {
    svg {
      border: 1px solid #eaeaea;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
      border-radius: 4px;
      padding: 0.5em 1.3em;
      width: 15px;
      height: 15px;
      @media (max-width: 280px) {
        font-size: 0.4em;
        padding: 0.5em 1em;
      }
    }
  }
  .user-container {
    display: flex;
  }
`;
const Ads = styled.div`
  .ad-text {
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 140%;
    text-align: center;
    text-transform: uppercase;
    color: #373737;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

const MostPopular = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 2em;

  .popular-title {
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;
    color: #171717;
  }

  .category {
    position: absolute;
    top: 20px;
    left: 20px;
    background: #4a90e2;
    padding: 0.2em 0.5em;
    border-radius: 0.5em;
    font-size: 12px;
    line-height: 16px;
  }
  .author {
    font-family: PT Sans;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    order: 2;
    color: #666666;
  }
  .title {
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #171717;
    order: 1;
    margin: 0px 0px 10px 0px;
  }
  .popular-posts {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 900px) {
      flex-direction: column;
    }
    .post-content {
      display: flex;
      flex-direction: column;
    }

    .post-container {
      display: flex;
      flex-direction: column;
      margin-right: 2em;
      width: 300px;
      @media (max-width: 1024px) {
        width: 10em;
      }
      @media (max-width: 900px) {
        width: 100%;
        margin-bottom: 1.5em;
      }
    }
    img {
      width: 100%;
      height: 17em;
      object-fit: cover;
    }
  }
`;
