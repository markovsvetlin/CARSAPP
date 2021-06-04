import styled from 'styled-components';


const Post = ({image, text}) => {
    
    return (
       <PostContainer>
        <img src={image.urls.small} />
        <div className='LeftSide'>
       <span>Rickie Baroch - June 6, 2019</span>
       <span>Vehicle</span>
       <p>Lbasdasdas das das da d asd asd asd </p>
       <p>{text}</p>
       </div>
      
       </PostContainer>
            
        
    )
}

const PostContainer = styled.div`
position:relative
`


export default Post
