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

function LongLatDetails({ LongitudeBasedWeatherDetails }) {
  const [isForecastClicked, setisForecastClicked] = useState(false);
  console.log("from LongLatDetails ====>", LongitudeBasedWeatherDetails);

  let detail;
  let heading;

  if (LongitudeBasedWeatherDetails.length > 0) {
    detail = LongitudeBasedWeatherDetails[0].temperature
      ? LongitudeBasedWeatherDetails[0].temperature
      : LongitudeBasedWeatherDetails[0].humidity;

    heading = LongitudeBasedWeatherDetails[0].temperature
      ? "temperature"
      : "humidity";
  }

  const handleForecastButtonOnClick = () => {
    setisForecastClicked(!isForecastClicked);
  };
  return (
    <>
      <Box>
        {LongitudeBasedWeatherDetails &&
          LongitudeBasedWeatherDetails.length > 0 && (
            <>
              <Box>
                {
                  <Typography>
                    {heading.charAt(0).toUpperCase()+heading.slice(1)} : {detail}%
                  </Typography>
                }
              </Box>
              <Button variant="contained" onClick={handleForecastButtonOnClick}>
                5 hr Forecast
              </Button>
              {isForecastClicked && LongitudeBasedWeatherDetails.length && (
                <Box>
                  {" "}
                  {LongitudeBasedWeatherDetails.map((weather) => {
                    if (weather.time !== LongitudeBasedWeatherDetails[0].time) {
                      return (
                        <Card variant="outlined" key={weather.time}>
                          <CardContent>
                            <Typography style={{ fontSize: "20px" }}>
                              <AccessTimeIcon />
                              &nbsp;&nbsp;Time : {weather.time}
                            </Typography>
                            <Typography>
                              {heading === "temperature" ? (
                                <ThermostatIcon />
                              ) : (
                                <OpacityIcon />
                              )}
                              &nbsp;&nbsp;{heading.charAt(0).toUpperCase()+heading.slice(1)} : {weather[heading]}%
                            </Typography>
                          </CardContent>
                        </Card>
                      );
                    }
                  })}
                </Box>
              )}
            </>
          )}
      </Box>
    </>
  );
}

export default LongLatDetails;
