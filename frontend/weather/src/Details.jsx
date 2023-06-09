import React from "react";
import { Box, Typography, InputBase, Button, styled } from "@mui/material";
import OpacityIcon from "@mui/icons-material/Opacity";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import CloudIcon from "@mui/icons-material/Cloud";
// import CloudRainIcon from '@material-ui/icons/CloudRain';
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";

function Details({ weatherDetails }) {
  return (
    <>
      {weatherDetails && Object.keys(weatherDetails).length > 0 && (
        <>
          <Box>
            <Typography>
              <ThermostatIcon />
              {weatherDetails.data[0].temperature}
            </Typography>
            <Typography>
              <OpacityIcon />
              {weatherDetails.data[0].humidity}
            </Typography>
            <Typography>
              <WaterDropIcon />
              {weatherDetails.data[0].rainIntensity}
            </Typography>
            <Typography>
              <AirIcon />
              {weatherDetails.data[0].windSpeed}
            </Typography>
            <Typography>
              <CloudIcon />
              {weatherDetails.data[0].cloudCover}
            </Typography>
          </Box>
        </>
      )}
    </>
  );
}

export default Details;
