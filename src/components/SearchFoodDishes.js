import React, { Fragment, useState } from "react";
import { Grid } from "@mui/material";
import AnyFoodDishes from "./AnyFoodDishes";
import PredefinedFoodDishes from "./PredefinedFoodDishes";
import FoodDishes from "./FoodDishes";
import { getApiUrl } from "./../constants";

const SearchFoodDishes = () => {
  const [hits, setHits] = useState();

  const getData = (query) => {
    query &&
      fetch(getApiUrl(query))
        .then((data) => data.json())
        .then((res) => setHits(res.hits))
        .catch((err) => console.log(err));
  };

  console.log(hits);

  return (
    <Fragment>
      <div className="root">
        <Grid container direction="column" spaicing={3} justify="center">
          <AnyFoodDishes getData={getData} />
          <PredefinedFoodDishes getData={getData} setHits={setHits} />
        </Grid>
      </div>

      {hits && <FoodDishes hits={hits} />}
    </Fragment>
  );
};

export default SearchFoodDishes;
