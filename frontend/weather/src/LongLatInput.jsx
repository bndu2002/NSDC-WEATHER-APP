import React, { useState } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getLongDetailsFromBackend } from "./apis/api";

const ContainerBoxStyled = styled(Box)({
  backgroundColor: "#44586f",
  padding: 10,
});

const ButtonStyled = styled(Button)({
  marginTop: "5px",
  width: "30%",
  marginLeft: "36%",
  backgroundColor: "#e67e22",
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

function LongLatInput() {
  const [query, setQuery] = useState({
    location: "",
    fields: "",
    timesteps: "",
    units: " ",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const getWeather = async () => {
    let { location, fields, timesteps, units } = query;
    let result = await getLongDetailsFromBackend(
      location,
      fields,
      timesteps,
      units
    );
    console.log('result from longLatInput')
  };

  return (
    <>
      <ContainerBoxStyled>
        <Box style={{ display: "flex", marginBottom: "3px" }}>
          <SearchContainerStyle>
            <InputBaseStyle
              placeholder="Longitude or Latitude"
              name="location"
              value={query.location}
              onChange={handleOnChange}
            />
          </SearchContainerStyle>
          <SearchContainerStyle>
            <InputBaseStyle
               placeholder="Units"
              onChange= {handleOnChange}
              value= {query.units}
              name= "units"
            />
          </SearchContainerStyle>
        </Box>
        <Box style={{ display: "flex" }}>
          <SearchContainerStyle>
            <InputBaseStyle
              placeholder="Time Stamps"
              name="timesteps"
              onChange={handleOnChange}
              value={query.timesteps}
            />
          </SearchContainerStyle>
          <SearchContainerStyle>
            <InputBaseStyle
              placeholder="Fields"
              onChange={handleOnChange}
              name="fields"
              value={query.fields}
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
