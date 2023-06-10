import React, { useState } from "react";
import { Box, Typography, InputBase, Button, styled } from "@mui/material";
import { getWeatherInfoFromBackend } from "./apis/api";
import Searchicons from "@mui/icons-material/Search";


const ContainerBoxStyled = styled(Box)({
  backgroundColor: "#44586f",
  padding: 10,
  display: "flex",
});

const ButtonStyled = styled(Button)({
  backgroundColor: "#e67e22",
  width: "30%",
  marginLeft: "15px",
});

const SearchContainerStyle = styled(Box)`
  background: #fff;
  width: 60%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputBaseStyle = styled(InputBase)`
  padding-left: 20px;
  width: 200%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

function Input({ setweatherDetails , setbyLongClicked }) {
  const [city, setcity] = useState("");

  const handleOnChange = (e) => {
    setcity(e.target.value);
  };

  const getWeatherInfo = async () => {
    let result = await getWeatherInfoFromBackend(city);
    setweatherDetails(result);
  };

  const handleOnClick = ()=>{
    setbyLongClicked(true)
  }

  return (
    <>
      <ContainerBoxStyled>
        <SearchContainerStyle>
          <InputBaseStyle
            placeholder="Enter City Name"
            onChange={handleOnChange}
          />
          <SearchIconWrapper>
            <Searchicons
              onClick={getWeatherInfo}
              style={{ cursor: "pointer" }}
            />
          </SearchIconWrapper>
        </SearchContainerStyle>
        <ButtonStyled
          variant="contained"
          onClick={handleOnClick }
        >
          By Long & Lat ?
        </ButtonStyled>
      </ContainerBoxStyled>
    </>
  );
}

export default Input;
