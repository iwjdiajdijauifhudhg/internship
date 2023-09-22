import logo from './marvel.png'
import styled from 'styled-components'

const Header = styled.div`
  background-color: #F0141E;
  diplay: flex;
  align-items: center;
  justify-content: space-between;
  width: 97,5%;
  margun: 0 auto;
  padding: 20px;
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
