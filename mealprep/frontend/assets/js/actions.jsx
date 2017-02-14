exports = module.exports = {};

exports.BEGIN_LOAD = 'BEGIN_LOAD'
exports.LOAD_INGREDIENTS_SUCCESS = 'LOAD_INGREDIENTS_SUCCESS'


// to be called when the ingredients load from the API...
// when the object returned by this function is sent to the reducer, the
// reducer should put the 'ingredients' in the store.
exports.loadIngredientsSuccess = (ingredients) => {
    return {
        type: exports.LOAD_INGREDIENTS_SUCCESS,
        ingredients: ingredients,
    }
}

// to be called when the page loads
exports.beginLoad = () => {

    const success = (data) => {
        console.log("pre load success dispatch", data)
        window.store.dispatch(exports.loadIngredientsSuccess(data.results))
    }

    $.ajax('http://localhost:8000/api/v1/ingredients.json/', {
        success: success,
    })


    // Probably add other AJAX loading to other endpoints in this function

    return {
        type: exports.BEGIN_LOAD,
    }
}
