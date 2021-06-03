import styled from 'styled-components';


const Post = ({image}) => {
    console.log(image)
    return (
       <PostContainer>
           <span>Vehicle</span>
           <img src={image.urls.small} />
       <span>Rickie Baroch - June 6, 2019</span>
       <p>Lbasdasdas das das da d asd asd asd asdsad asd sa</p>
       
       </PostContainer>
            
        
    )
}

const PostContainer = styled.div`
position: relative;

`


export default Post
