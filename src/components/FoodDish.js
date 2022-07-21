import React from 'react'
import { Grid } from '@mui/material';
import  { Paper } from "@mui/material" ;


const FoodDish = ({ label, image, calories, ingredients }) => (

    <Grid item xs={12} sm={6} md={ 4 } >
        <Paper className='paper' >
            <h2>{label}</h2>
            <img src={image} alt={ label } />
            <h3>{`${Math.trunc(calories)}`} calories</h3>
            <h4>ingredients</h4>
            <ul>
                {
                    ingredients.map((ingredients, index) =>{
                        const{ text } = ingredients;
                        return(
                            <li key={index} >&nbsp;&nbsp;{ text }</li>
                        )
                    } )
                }
            </ul>
        </Paper>
    </Grid>

);

export default FoodDish;