import Post from "../comps/Post";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Footer from "../comps/Footer";
import { useMediaQuery } from "react-responsive";

const Detail = ({ images, imagesArr }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div>
      <PrimarySection isMobile={isMobile}>
        <h2>One of Saturn`s largest rings may be newer than anyone</h2>
        <p>
          dasdsd asd dsadsad sad sad asd sad asd asdasd asdasdqweqwe qwe qwe qwf
          rsd qawd qw das dsa dsa dsa dsad sad asd asd asd asd sd sad asd saasd
          asd
        </p>
        <img src={images.urls.regular} />
      </PrimarySection>
      <SecondarySection isMobile={isMobile}>
        <Content isMobile={isMobile}>
          <User isMobile={isMobile}>
            <div className="user-container">
              <img src={images.urls.regular} />
              <div className="user-data">
                <span>MIKA MATIKAINEN</span>
                <span>Apr 15, 2020 - 4 min read</span>
              </div>
            </div>
            <div className="Icons">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </User>
          <p>
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
          <p>
            {" "}
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
          <h4>Advertisment</h4>
          <img className="small-ads" src={images.urls.regular} />
          <img src={images.urls.regular} />
          <p>sdds dsa das d asd asda sdsa da sd asd sad asd asd </p>
          <p>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <h4>Advertisment</h4>
          <img className="small-ads" src={images.urls.regular} />
          <p>A list look like thhis</p>
          <ul>
            <li>First item in the list</li>
            <li>Second item in the list</li>
            <li>Third item in the list</li>
          </ul>
          <div className="share">
            <button>
              <FontAwesomeIcon icon={faFacebookF} /> Share on Facebook
            </button>
            <button>
              <FontAwesomeIcon icon={faTwitter} /> Share on Twitter
            </button>
          </div>
        </Content>
        <Ads>
          <img src={images.urls.regular} />
        </Ads>
      </SecondarySection>

      <MostPopular isMobile={isMobile}>
        <h3>Most Popular</h3>
        <div className="popular-posts">
          {imagesArr.results.slice(0, 4).map((image) => (
            <Post image={image} />
          ))}
        </div>
      </MostPopular>
      <Footer images={imagesArr.results} />
    </div>
  );
};

export default Detail;

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=cars&client_id=KqKdgpKGcYsmlgKjlTsTednSV8cqHvQjyGsqo_-q-eA`
  );
  const images = await res.json();
  const paths = images.results.map((result) => {
    return {
      params: { id: result.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=KqKdgpKGcYsmlgKjlTsTednSV8cqHvQjyGsqo_-q-eA`
  );
  const images = await res.json();

  const resAllImages = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=cars&client_id=KqKdgpKGcYsmlgKjlTsTednSV8cqHvQjyGsqo_-q-eA`
  );
  const allImages = await resAllImages.json();

  return {
    props: {
      imagesArr: allImages,
      images: images,
    },
  };
}

//styles

const PrimarySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em 0em;
  @media (max-width: 768px) {
    margin: 1em 0em;
  }

  h2 {
    color: black;
    text-align: center;
    padding: 0em 1em;
  }

  p {
    color: black;
    text-align: center;
    width: 60%;
    margin-bottom: 2em;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  img {
    width: 100%;
    height: ${({ isMobile }) => (!isMobile ? "1200px" : "400px")};
    object-fit: cover;
  }
`;

const SecondarySection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2em;
  padding: 0em 17em;
  @media (max-width: 1024px) {
    padding: 0em 5em;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0em 1em;
  }
`;

const Content = styled.div`
  p {
    color: black;
  }
  h4 {
    color: black;
    text-align: center;
  }
  h2 {
    color: black;
  }
  span {
    color: black;
  }
  svg {
    color: black;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  ul {
    color: black;
  }
  .small-ads {
    height: 5em;
  }
  .share {
    display: flex;
    justify-content: center;
    button {
      background-color: transparent;
      border: none;
      padding: 0.5em 2em;
      @media (max-width: 460px) {
        font-size: 0.6em;
        padding: 0.5em 1em;
      }

      svg {
        margin-right: 1em;
      }
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 3em;
    width: 3em;
    border-radius: 3em;
  }
  .user-data {
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    @media (max-width: 740px) {
      font-size: 0.6em;
    }
  }
  .Icons {
    svg {
      border: 1px solid black;
      padding: 0.5em 1.3em;
      @media (max-width: 740px) {
        font-size: 0.6em;
      }
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
  h3 {
    color: black;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const MostPopular = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0em;

  h3 {
    color: black;
  }
  span {
    color: black;
    order: 2;
    font-size: 0.8em;
    font-style: italic;
    @media (max-width: 768px) {
      margin-left: 1em;
    }
    &:nth-child(2) {
      top: 1em;
      left: 1em;
      color: white;
      position: absolute;
      background-color: #4267b2;
      padding: 0.2em 0.5em;
      border-radius: 0.5em;
      font-size: 0.8em;
    }
  }
  p {
    color: black;
    order: 1;
    @media (max-width: 768px) {
      margin-left: 1em;
    }
    &:nth-child(4) {
      display: none;
    }
  }
  .popular-posts {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 900px) {
      flex-direction: column;
    }

    width: 100%;
    div {
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
      height: 11em;
      object-fit: cover;
      @media (max-width: 768px) {
        height: 15em;
      }
    }
  }
`;
