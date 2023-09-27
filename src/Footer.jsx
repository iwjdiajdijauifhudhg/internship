import styled from 'styled-components'
import logo from '../public/images/marvel2.png'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #808080;
  display: flex;
  width: 97,5%;
  padding: 20px;

  span{
    margin-left: 1rem; 
    p{
      color: white;
      font-weight: 400;
      font-size: 15px;
    }
    a{
      color: white;
      text-decoration: none;
      font-weight: 400;
      font-size: 15px;
      &:hover {
        text-decoration: underline;
    }
    }
  }
`
const Box = styled.div`
  align-items: center;
`
const Logo = styled.img`
  width: 10%;
  display: block;
`

function Footer() {
    const now = new Date().getFullYear();
    return(
        <Container>
            <Logo src={logo}/>
            <Box>
              <span><a href='https://disk.yandex.ru/d/WpxkbL7Qh4AJcA'>developer.marvel.com</a></span>
              <span><p>Data provided py Marvel. {now} MARVEL</p></span>
            </Box>
        </Container>
    )
}

export default Footer