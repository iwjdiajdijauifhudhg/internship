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

const Logo = styled.img`
  width: 8%;
`

function Footer() {
    const date = 2022
    return(
        <Container>
            <Logo src={logo}/>
            <span><a href='https://disk.yandex.ru/d/WpxkbL7Qh4AJcA'>developer.marvel.com</a></span>
            <p>{date}</p>
        </Container>
    )
}

export default Footer