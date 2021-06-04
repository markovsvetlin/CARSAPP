import Post from "../comps/Post"



const Detail = ({images}) => {
    const textContent = 'dasdsd asd dsadsad sad sad asd sad asd asdasd asdasdqweqwe qwe qwe qwf rsd qawd qw  das dsa dsa dsa dsad sad asd asd asd asd sd sad asd saasd asd sad asd asd asd as dasd asd asd asd asd sad a'

    console.log(images)
    return (
        <div>
            <Post image={images} text={textContent} />
        </div>
    )
}

export default Detail

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
  
    return {
      props: {
          images: images
      } 
    };
  }