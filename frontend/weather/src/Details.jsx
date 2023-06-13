import React, { useState } from "react";
import {
  Box,
  Typography,
  InputBase,
  Button,
  Collapse,
  CardHeader,
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
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LongLat from "./LongLatDetails";

const CardStyled = styled(Card)({
  marginBottom: 10,
  backgroundColor: "#264f87",
  width: "85%",
  color: "#fff",
  borderRadius: 10,
  padding: 16,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a shadow to the card
  transition: "transform 0.3s ease-in-out", // Add transition effect for hover
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const OuterWrapperStyled = styled(Box)({
  width: "100%",
  height: "88%",
});

const TypographyStyled = styled(Typography)({
  fontSize: 18,
});

const Heading = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-left: 40%
`;

const CurrentBoxStyled = styled(Box)({
  backgroundColor: "#264f87",
  color: "#fff",
  borderRadius: 10,
  padding: 16,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a shadow to the box
})

function Details({ weatherDetails, byLongClicked }) {
  const [isForecastClicked, setisForecastClicked] = useState(false);

  return (
    <>
      {weatherDetails && Object.keys(weatherDetails).length > 0 && (
        <>
          <OuterWrapperStyled>
            <Box>
              <Box>
                <Heading >Current</Heading>
                <CurrentBoxStyled>
                  <TypographyStyled>
                    <ThermostatIcon />
                    &nbsp;&nbsp; Temperature :{" "}
                    {weatherDetails.data[0].temperature}
                  </TypographyStyled>
                  <TypographyStyled>
                    <OpacityIcon />
                    &nbsp;&nbsp; Humidity : {weatherDetails.data[0].humidity}
                  </TypographyStyled>
                  <TypographyStyled>
                    <WaterDropIcon />
                    &nbsp;&nbsp; Rain : {weatherDetails.data[0].rainIntensity}
                  </TypographyStyled>
                  <TypographyStyled>
                    <AirIcon />
                    &nbsp;&nbsp; Wind Speed : {weatherDetails.data[0].windSpeed}
                  </TypographyStyled>
                  <TypographyStyled>
                    <CloudIcon />
                    &nbsp;&nbsp; Cloud : {weatherDetails.data[0].cloudCover}%
                  </TypographyStyled>
                </CurrentBoxStyled>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  onClick={() => {
                    setisForecastClicked(!isForecastClicked);
                  }}
                  style={{ marginBottom: "20px", marginTop: 20, marginLeft : 200 }}
                >
                  Next 5 hr Forecast
                </Button>
                {isForecastClicked && (
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {weatherDetails.data.map((weather) => {
                      if (weather.time !== weatherDetails.data[0].time) {
                        return (
                          <CardStyled variant="outlined" key={weather.time}>
                            <CardContent>
                              <Typography style={{ fontSize: "20px" }}>
                                <AccessTimeIcon />
                                &nbsp;&nbsp;Time : {weather.time}
                              </Typography>
                              <Typography>
                                <ThermostatIcon />
                                &nbsp;&nbsp;Temperatuer : {weather.temperature}
                              </Typography>
                              <Typography>
                                <OpacityIcon />
                                &nbsp;&nbsp;Humidity : {weather.humidity}
                              </Typography>
                              <Typography>
                                <WaterDropIcon />
                                &nbsp;&nbsp;Rain : {weather.rainIntensity}
                              </Typography>
                              <Typography>
                                <AirIcon />
                                &nbsp;&nbsp;Wind Speed : {weather.windSpeed}
                              </Typography>
                              <Typography>
                                <CloudIcon />
                                &nbsp;&nbsp;Cloud : {weather.cloudCover}%
                              </Typography>
                            </CardContent>
                            {/* <CardActions>
                          <Button size="small">Learn More</Button>
                        </CardActions> */}
                          </CardStyled>
                        );
                      }
                    })}
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
