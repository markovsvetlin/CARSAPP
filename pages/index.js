import Post from '../comps/Post'
import styled from 'styled-components';

const Home = ({images}) => {
const imagesArr = images.results

console.log(imagesArr)

  return (
    <PrimarySection>

<PrimaryPost>
  {imagesArr.slice(4,5).map(image=>{
    return <Post image={image}/>
  })}
  
  </PrimaryPost>
  <RightSection>
          {imagesArr.slice(5,9).map((image, index)=>{
        return <Post key={index} image={image}/>

      })}
      </RightSection>    
    </PrimarySection>
  )
}

export default Home



export async function getStaticProps() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=cars&client_id=KqKdgpKGcYsmlgKjlTsTednSV8cqHvQjyGsqo_-q-eA`
  );
  const images = await res.json();

  return {
    props: {images},
  };
}

const PrimarySection = styled.div`
display:grid;
grid-template-columns: 1fr 2fr;
grid-template-rows: 1fr;
grid-gap: 30px;
margin: 30px 300px 50px 300px;
@media (max-width: 768px) {
  grid-template-columns: 1fr;
  margin:10px;
}

`
const PrimaryPost = styled.div`
height:auto;
width:100%;
img{
width:100%;
height: 630px;
object-fit:cover;
}
span{
  position:absolute;
  left:20px;
  padding:5px;
  color:white;
  font-size:12px;
  top:530px;
  &:nth-child(1){
    position:absolute;
    color:white;
    top:30px;
    font-size:16px;
    background-color:#4267B2;
    padding:1px 10px;
    border-radius:10px;
  } 
}

P{
  position:absolute;
  bottom:2px;
  padding:13px;
  line-height:26px;
  left:10px;
  font-size:20px;
  font-weight: 800;
}


`

const RightSection = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap: 30px;
height:230px;
span{
  position:absolute;
  top:210px;
  left:20px;
  padding:5px;
  color:white;
  font-size:12px;

  &:nth-child(1){
    position:absolute;
    color:white;
    top:30px;
    font-size:16px;
    background-color:#4267B2;
    padding:1px 10px;
    border-radius:10px;
  } 
}
P{
  position:absolute;
  bottom:2px;
  padding:13px;
  line-height:26px;
  left:10px;
  font-size:20px;
  font-weight: 800;
  
}
img{
  height:300px;
  width:100%;
  object-fit:cover;
  
}

`