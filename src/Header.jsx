import styled from 'styled-components'
import logo from '../public/images/marvel.png'

const Container = styled.div`
  background-color: #F0141E;
  display: flex;
  width: 97,5%;
  padding: 20px;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 5%;
`

const Menu = styled.div`
  span{
    margin-left: 1rem; 
    a{
      color: yellow;
      text-decoration: none;
      font-weight: 500;
      font-size: 25px;
      &:hover {
        text-decoration: underline;
    }
    }
  }
`

function Header() {
    return(
        <Container>
        <Logo src={logo}/>
        <Menu>
          <span><a href='https://www.youtube.com/watch?v=Sagg08DrO5U'>Characters</a></span>
          <span><a href='https://www.youtube.com/watch?v=Sagg08DrO5U'>Comics</a></span>
          <span><a href='https://www.youtube.com/watch?v=Sagg08DrO5U'>Series</a></span>
        </Menu>
      </Container>
    )
}

export default Header