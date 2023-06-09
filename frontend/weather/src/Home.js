import React, { useState } from 'react'
import { Box, Typography, styled } from '@mui/material';
import Sunrise from './images/bg.jpg'
import Details from './Details';
import Input from './Input';


const OuterComponentStyled = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'

})

const ImageBoxStyled = styled(Box)({
    backgroundImage: `url(${Sunrise})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

function Home() {
    const [weatherDetails, setweatherDetails] = useState({});

    return (
        <OuterComponentStyled>
            <ImageBoxStyled>
            </ImageBoxStyled>
            <Box style={{width : '73%' , height : '80%'}}>
                <Input setweatherDetails={setweatherDetails}/>
                <Details weatherDetails={weatherDetails}/>
            </Box>
        </OuterComponentStyled>
    )
}

export default Home