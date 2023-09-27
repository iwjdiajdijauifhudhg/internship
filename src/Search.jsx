import styled from 'styled-components'
import deadpool from '../public/images/Deadpool.png'

const Button = styled.button`
    background-color: #EFAD4D;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    width: 200px;
    height: 40px;
`

const InputBar = styled.input`
    width: 1550px;
    height: 40px;
    border: 2px solid #D3D3D3;
    padding-left: 10px;
`

const Container = styled.div`
    margin-left: 45px;
    margin-top: 20px;
    p{
      font-weight: 700;
      font-size: 40px;
      color: #18191A;
    }
    span{
      font-weight: 200;
      font-size: 20px;
      color: #3C4142 ;
    }
`

const Box = styled.div`
    display: flex;
`

const Card = styled.div`
    margin-top: 30px;
    border: 2px solid #D3D3D3;
    width: 320px;
    height: 300px;
    p{
        margin-left: 10px;
        margin-top: 15px;
        color: red;
        font-weight: 600;
        font-size: 20px;
    }

    span{
        margin-left: 10px;
        color: #3C4142;
        font-weight: 300;
        font-size: 15px;
    }
`

const Pic = styled.img`
    width: 320px;
    height: 200px;
`

function Search() {
    return(
        <Container>
            <Box>
                <p>Characters</p>
                <span>(6969)</span>
            </Box>
            <InputBar placeholder="Search for Characters by Name"></InputBar>
            <Button>SEARCH</Button>
            <Card>
                <Pic src={deadpool}></Pic>
                <p>Deadpool</p>
                <span>Merc with a Mouth</span>
            </Card>
        </Container>
    )
}

export default Search