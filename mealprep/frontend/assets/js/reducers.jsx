const actions = require('./actions.jsx')

// the initial state is the state of the application during the initial mounting of the component
const initalState = {
    ingredients: [],
    ingredientsLoaded: false,
    preppedMealTypes: [],
    preppedMealTypesLoaded: false,
    preppedMeals: [],
    preppedMealsLoaded: false,
    ingredientQuantities: [],
    ingredientQuantitiesLoaded: false,
}



exampleReducer = (state=initalState, action) => {

    switch (action.type) {

        // this action is dispatched in the success callback of the BEGIN_LOAD action...
        // after the ajax call is successful, the initial ingredients list will be
        // updated to be the ingredients from the ajax call
        case actions.LOAD_INGREDIENTS_SUCCESS:
            console.log("load success", action.ingredients)
            return Object.assign( {}, state,
                    {
                        ingredients: action.ingredients,
                        ingredientsLoaded: true,
                    }
            )

        default:
            return state
    }
}

module.exports = {
    exampleReducer: exampleReducer,
}
