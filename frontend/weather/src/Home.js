import React, { useState } from 'react'
import { Box, Typography, styled } from '@mui/material';
import Sunrise from './images/bg.jpg'
import Night from './images/night.jpg'
import Details from './Details';
import Input from './Input';
import LongLatDetails from "./LongLatDetails";
import LongLatInput from './LongLatInput';


const OuterComponentStyled = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%',
})

const ImageBoxStyled = styled(Box)({
    // backgroundImage: `url(${Sunrise})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

const getCurrentHour = () => {
    const date = new Date();
    return date.getHours();
};

const getImageUrl = () => {
    const currentHour = getCurrentHour();
    const isDaytime = currentHour >= 6 && currentHour < 18;
    return isDaytime ? Sunrise : Night;
};

function Home() {
    const [weatherDetails, setweatherDetails] = useState({});
    const [byLongClicked, setbyLongClicked] = useState(false)

    const imageUrl = getImageUrl();

    return (


        <OuterComponentStyled >
            <ImageBoxStyled style={{ backgroundImage: `url(${imageUrl})` }}>
            </ImageBoxStyled>
            <Box style={{ width: '73%', height: '80%', overflow: 'auto' }}>
                {byLongClicked ? <LongLatInput/> :  <Input setweatherDetails={setweatherDetails} setbyLongClicked={setbyLongClicked} byLongClicked={byLongClicked}/>}
                {byLongClicked ? <LongLatDetails /> : <Details weatherDetails={weatherDetails} byLongClicked={byLongClicked} />
                
                }
            </Box>
        </OuterComponentStyled>

    )
}

export default Home