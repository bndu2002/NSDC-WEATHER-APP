import React, { useState } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getLongDetailsFromBackend } from "./apis/api";

const ContainerBoxStyled = styled(Box)({
  backgroundColor: "#44586f",
  padding: 10,
  display: "flex",
});

const ButtonStyled = styled(Button)({
  width: "30%",
  marginLeft: "26%",
  backgroundColor: "#e67e22",
});

const SearchContainerStyle = styled(Box)`
  background: #fff;
  border-radius: 2px;
  width: 149%;
  margin-left: 5%;
`;

const InputBaseStyle = styled(InputBase)({
  paddingLeft: "20px",
  width: "100%",
  fontSize: "unset",
});

function LongLatInput({ setLongitudeBasedWeatherDetails }) {
  const [query, setQuery] = useState({
    location: "",
    fields: "",
    timesteps: "",
    units: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const getWeather = async () => {
    let { location, fields } = query;
    let { data } = await getLongDetailsFromBackend(location, fields);
    setLongitudeBasedWeatherDetails(data);
    console.log("result from longLatInput", data);
  };

  return (
    <>
      <ContainerBoxStyled>
        <Box style={{ marginBottom: "3px" }}>
          <SearchContainerStyle style={{ marginBottom: "3px" }}>
            <InputBaseStyle
              placeholder="Longitude OR Latitude"
              name="location"
              value={query.location}
              onChange={handleOnChange}
            />
          </SearchContainerStyle>
          <SearchContainerStyle>
            <InputBaseStyle
              placeholder="Enter Humidity OR Temperature"
              name="fields"
              value={query.fields}
              onChange={handleOnChange}
            />
          </SearchContainerStyle>
        </Box>
        <ButtonStyled variant="contained" onClick={getWeather}>
          Get Details
        </ButtonStyled>
      </ContainerBoxStyled>
    </>
  );
}

export default LongLatInput;
