import React, { useState } from "react";
import { Box, Typography, InputBase, Button, styled } from "@mui/material";
import { getWeatherInfoFromBackend } from "./apis/api";

const ContainerBoxStyled = styled(Box)({
  backgroundColor: "#44586f",
  padding: 10,
});

const InputStyled = styled(InputBase)({
  color: "#FFFFFF",
  fontSize: 18,
  marginRight: 180,
});

const ButtonStyled = styled(Button)({
  backgroundColor: "#e67e22",
  width: 150,
});

function Input({setweatherDetails}) {
  const [city, setcity] = useState("");
 

  const handleOnChange = (e) => {
    setcity(e.target.value);
  };

  const getWeatherInfo = async () => {
    let result = await getWeatherInfoFromBackend(city);
    setweatherDetails(result);
  };

  return (
    <>
      <ContainerBoxStyled>
        <InputStyled placeholder="enter city name" onChange={handleOnChange} />
        <ButtonStyled variant="contained" onClick={getWeatherInfo}>
          Get Weather
        </ButtonStyled>
      </ContainerBoxStyled>
    </>
  );
}

export default Input;
