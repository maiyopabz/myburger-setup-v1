import React from 'react';
import classes from './burgerIngredient.css';

const burgerIngredient = (props) => {
    let burgerIngredient = null; 

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className= {classes.Seeds1}></div>
                    <div className= {classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
                break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
                break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
                break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
                break;
        default:     
            ingredient: null;
    }
};

export default burgerIngredient;