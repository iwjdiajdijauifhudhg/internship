import logo from './marvel.png'
import styled from 'styled-components'

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
      font-weight: 400;
      font-size: 25px;
      &:hover {
        text-decoration: underline;
    }
    }
  }
`

function App() {
  return (
    <>
      <Header>
        <Logo src={logo}/>
        <Menu>
          <span><a href='https://www.youtube.com/watch?v=Sagg08DrO5U'>Characters</a></span>
          <span><a href='https://www.youtube.com/watch?v=Sagg08DrO5U'>Comics</a></span>
          <span><a href='https://www.youtube.com/watch?v=Sagg08DrO5U'>Series</a></span>
        </Menu>
      </Header>
    </>
  )
}

export default App
