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
            <img src={images.urls.regular} />
            <div>
              <span>MIKA MATIKAINEN</span>
              <span>Apr 15, 2020 - 4 min read</span>
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
          <img src={images.urls.regular} />
          <img src={images.urls.regular} />
          <p>sdds dsa das d asd asda sdsa da sd asd sad asd asd </p>
          <p>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <h3>Advertisment</h3>
          <img src={images.urls.regular} />
          <p>A list look like thhis</p>
          <ul>
            <li>First item in the list</li>
            <li>Second item in the list</li>
            <li>Third item in the list</li>
          </ul>
          <div className="share">
            <button>
              <FontAwesomeIcon icon={faFacebookF} /> Shade on Facebook
            </button>
            <button>
              <FontAwesomeIcon icon={faTwitter} /> Shade on Twitter
            </button>
          </div>
        </Content>
        <Ads>
          <img src={images.urls.regular} />
        </Ads>
      </SecondarySection>

      <MostPopular isMobile={isMobile}>
        <h3>Most Popular</h3>
        <div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  h2 {
    margin: 120px 0px 30px 0px;
    text-align: center;
    color: black;
  }

  p {
    color: black;
    text-align: center;
    max-width: 700px;
    margin-bottom: 70px;
  }
  img {
    width: 100%;
    height: ${({ isMobile }) => (!isMobile ? "1200px" : "400px")};
    object-fit: cover;
  }
`;

const Content = styled.div`
  color: black;
  padding-right: 30px;

  img {
    width: 100%;
    height: ${({ isMobile }) => (!isMobile ? "600px" : "300px")};
    &:nth-child(6) {
      height: 100px;
      object-fit: cover;
      margin-bottom: 30px;
    }
    &:nth-child(11) {
      height: 100px;
      object-fit: cover;
      margin-bottom: 30px;
    }
  }
  .share {
    margin: ${({ isMobile }) => (!isMobile ? "100px 0px" : "40px 0px")};
    display: flex;
    justify-content: center;
    button {
      background-color: transparent;
      color: black;
      border: 1px solid grey;
      font-size: ${({ isMobile }) => (!isMobile ? "20px" : "12px")};
      padding: ${({ isMobile }) => (!isMobile ? "20px 60px" : "10px 30px")};
      cursor: pointer;
      svg {
        margin-right: 10px;
      }
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  span {
    font-size: ${({ isMobile }) => (!isMobile ? "15px" : "10px")};
    &:nth-child(1) {
      font-size: ${({ isMobile }) => (!isMobile ? "25px" : "15px")};
    }
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .Icons {
    margin-left: ${({ isMobile }) => (!isMobile ? "550px" : "100px")};
    display: flex;
    flex-direction: row;
  }
  svg {
    border: 1px solid grey;
    padding: ${({ isMobile }) => (!isMobile ? "10px 25px" : "5px 10px")};
  }
`;
const Ads = styled.div`
  h3 {
    color: black;
  }

  img {
    width: 90%;
    height: 250px;
    object-fit: cover;
  }
`;

const SecondarySection = styled.div`
  padding: ${({ isMobile }) => (!isMobile ? "0px 250px" : "0px 25px;")};
  display: grid;
  grid-template-columns: ${({ isMobile }) => (!isMobile ? "3fr 1fr" : "1fr")};
`;

const MostPopular = styled.div`
  color: black;
  padding: ${({ isMobile }) =>
    !isMobile ? "0px 300px;" : "0px 70px 0px 20px;"};
  margin-bottom: 100px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: relative;
  }
  div {
    width: ${({ isMobile }) => (!isMobile ? "90%" : "100%")};
    display: flex;
    flex-direction: ${({ isMobile }) => (!isMobile ? "row" : "column")};

    div {
      margin: 10px;
      display: flex;
      flex-direction: column;

      span {
        position: absolute;
        top: 10px;
        color: white;
        font-size: 13px;
        background-color: #4267b2;
        padding: 1px 10px;
        border-radius: 10px;

        &:nth-child(1) {
          background-color: transparent;
          padding: 0px;
          order: 2;
          top: 250px;
          font-size: 12px;
          color: grey;
          font-style: italic;
          margin-top: 8px;
        }
      }

      p {
        order: 1;
        margin: 0px;
        line-height: 20px;
      }
    }
  }
`;
