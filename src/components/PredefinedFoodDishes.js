import React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { predefinedFoodDishes } from "../constants";
import ToggleButton from "@mui/material/ToggleButton";

const PredefinedFoodDishes = ({ getData, setHits }) => {
  const getFoods = (title) => {
    predefinedFoodDishes.map(foodDish=>{
      foodDish.selected = foodDish.title === title ? !foodDish.selected : false;
      return !foodDish.selected ? setHits()
      : getData(document.querySelector(`#${ title } `).value.toLowerCase().trim());
    })
};
    
  
  return (
    <Grid>
      <Paper className="paper">
        {predefinedFoodDishes.map((foodDish) => {
          const { title, selected } = foodDish;
          return (
            <ToggleButton
              key={title}
              id={title}
              value={title}
              selected={selected}
              onClick={() => getFoods(title)}
            >
              {title}
            </ToggleButton>
          );
        })}
      </Paper>
    </Grid>
  )

      }
export default PredefinedFoodDishes;
