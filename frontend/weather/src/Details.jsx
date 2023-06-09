import React, { useState } from "react";
import {
  Box,
  Typography,
  InputBase,
  Button,
  Collapse,
  CardHeader ,
  styled,
} from "@mui/material";
import OpacityIcon from "@mui/icons-material/Opacity";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LongLat from "./LongLat";

const CardStyled = styled(Card)({

  backgroundColor : 'pink',
  marginBottom  : '10px',
  
});

const OuterWrapperStyled = styled(Box)({
  width  : "100%",
  height: '88%',
})

function Details({ weatherDetails  , byLongClicked }) {
  const [isForecastClicked, setisForecastClicked] = useState(false);

  return (
    <>
      {weatherDetails && Object.keys(weatherDetails).length > 0 && (
        <>
        <OuterWrapperStyled>
          <Box >
          <Box >
            <Typography>Current</Typography>
            <Typography>
              <ThermostatIcon />&nbsp;&nbsp;
              Temperature : {weatherDetails.data[0].temperature}
            </Typography>
            <Typography>
              <OpacityIcon />&nbsp;&nbsp;
              Humidity : {weatherDetails.data[0].humidity}
            </Typography>
            <Typography>
              <WaterDropIcon />&nbsp;&nbsp;
              Rain : {weatherDetails.data[0].rainIntensity}
            </Typography>
            <Typography>
              <AirIcon />&nbsp;&nbsp;
              Wind Speed : {weatherDetails.data[0].windSpeed}
            </Typography>
            <Typography>
              <CloudIcon />&nbsp;&nbsp;
              Cloud : {weatherDetails.data[0].cloudCover}%
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={() => {
                setisForecastClicked(!isForecastClicked);
              }}
              style={{marginBottom : '20px' , marginTop : 20}}
            >
              Next 5 hr Forecast
            </Button>
            {isForecastClicked && (
              <Box >
                {weatherDetails.data.map((weather) => {
                  if (weather.time !== weatherDetails.data[0].time) {
                    return (
                      <CardStyled variant="outlined" key={weather.time}>
                        <CardContent>
                          <Typography style={{fontSize : '20px'}}><AccessTimeIcon/>&nbsp;&nbsp;Time : {weather.time}</Typography>
                          <Typography><ThermostatIcon/>&nbsp;&nbsp;Temperatuer : {weather.temperature}</Typography>
                          <Typography><OpacityIcon/>&nbsp;&nbsp;Humidity : {weather.humidity}</Typography>
                          <Typography><WaterDropIcon/>&nbsp;&nbsp;Rain : {weather.rainIntensity}</Typography>
                          <Typography><AirIcon/>&nbsp;&nbsp;Wind Speed : {weather.windSpeed}</Typography>
                          <Typography><CloudIcon/>&nbsp;&nbsp;Cloud : {weather.cloudCover}%</Typography>
                        </CardContent>
                        {/* <CardActions>
                          <Button size="small">Learn More</Button>
                        </CardActions> */}
                      </CardStyled>
                    );
                  }
                })}
                hloo
              </Box>
            )}
          </Box>
          </Box>
          </OuterWrapperStyled>
        </>
      )}
    </>
  );
}

export default Details;
