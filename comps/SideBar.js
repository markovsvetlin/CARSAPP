import Post from '../comps/Post'
import styled from 'styled-components'

const tags = ['dasd', 'dasdas', 'adqeqwr', 'dqwqwr', 'ddqwqrqw', 'sdaqe','asdas', 'sdasd', 'dsadqesd', 'dsadd', 'dsadasd', 'dasdsa']


const SideBar = ({images, text}) => {
    return (
        <div style={{marginLeft:28, display:'flex', flexDirection:'column'}}>
        <Character>
            {images.slice(0,1).map(image => <Post image={image} text={text}/>)}
            <button>Continue reading</button>
          
        </Character>
        <PopularPosts>
            <h3>Popular posts</h3>
        {images.slice(1,7).map(image => <Post image={image}/>)}
        </PopularPosts>
        <TagsContainer>
        <h3>Tags</h3>
        <Tags>
            {tags.map(tag=> <div>
                <span>{tag}</span>
            </div>)}
            </Tags>
        </TagsContainer>
        
        
        </div>
    )
}

export default SideBar


const Character = styled.div`
position: relative;

flex-direction:column;
span{
    
    color:red;
    &:nth-child(2){
        display:none;
       
      } 
}
img{
    width:100%;
}

button{
    width:100%;
    color:white;
    background-color:black;
    height:70px;
    border-radius:15px;
}
.LeftSide {
    display:flex;
    flex-direction:column;

    span{
        order:3;
        font-size:12px;
        color:grey;
        margin-left:35px;
    }
    p{
        order:3;
        line-height:20px;
        color:grey;
        margin-bottom:20px;
        
        &:nth-child(3){
            order:1;
            font-size:17px;
            font-weight:bold;
            color:black;
            margin-left:15px;
            margin-bottom:10px;
        }
        
    }
}

`
const PopularPosts = styled.div`

margin-top:50px;
.LeftSide {
    display:flex;
    flex-direction:column;
}

span{
    position:absolute;
      color:white;
      top:10px;
      left:20px;
      font-size:16px;
      background-color:#4267B2;
      padding:1px 10px;
      border-radius:10px;
    &:nth-child(1){
    position:static;
    background-color:transparent;
    order:2;
    color:black;
    padding-bottom:50px;
    padding-left:0px;
    font-size:12px;
    } 
  }

  p{
      margin-top:10px;
      margin-bottom:0px;
      order:1;
      color:black;
      &:nth-child(4){
       display:none;
        } 
  }
h3{
    color:black;
}
img{
    width:100%;
    max-height:250px;
    object-fit:cover;
    border-radius:10px;
}

`
const TagsContainer = styled.div`

h3{
    color:black;
}


`
const Tags = styled.div`

display:grid;
grid-template-columns: 1fr 1fr 1fr;
height:200px;

color:black;
span{
    background-color:lightgrey;
    padding:10px;

    margin-bottom:30px;
}

`