import React from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { anyFoodDishes } from "../constants";

const AnyFoodDishes = ({ getData }) => {
  const [query, setQuery] = useState();

  const getFoods = () => {
    const title = document
      .querySelector("#AnyFoodDishes")
      .value.toLowerCase()
      .trim();
    if (query !== title) {
      setQuery(title);
      getData(title);
    }
  };

  return (
    <Grid item xs={12} sm={6}>
      <Paper className="paper">
        <Autocomplete
          id="AnyFoodDishes"
          freeSolo
          options={anyFoodDishes.map((foodDish) => foodDish.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Food"
              margin="normal"
              variant="outlined"
            />
          )}
        />

        <IconButton onClick={() => getFoods()}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
};

export default AnyFoodDishes;
