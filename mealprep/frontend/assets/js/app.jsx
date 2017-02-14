const Link = require('react-router').Link
const Markdown = require('react-markdown');
const React = require('react')
const connect = require('react-redux').connect


exports = module.exports = {};

class IngredientList extends React.Component {

    render() {

        if ( ! this.props.ingredientsLoaded) {
            return <div> "loading.. " </div>
        }

        function renderIngredient(ingredient) {
            return <div key={ ingredient.id }> {ingredient.name} - {ingredient.unitPrice}</div>
        };

        // return a react div, and for each ingredient in the store, 
        // add the ingredient name and price as a sub-div
        return <div>
            {this.props.ingredients.map(renderIngredient)}
        </div>
    }
}

// This function should map the contents of the store to this.props in the class...
// nothing facny, just a function
function mapStateToProps(state) {
    return {
        ingredients: state.ingredients,
        ingredientsLoaded: state.ingredientsLoaded,
    };
};

// this is where the redux manage happens. Call connect(function)(reactClass) where the fucntion
// takes the state from the store (an object) and returns an object, the object returned
// will now be available as this.props in the class
VisibleIngredientList = connect(
     mapStateToProps
)(IngredientList);


class Main extends React.Component {

    render() {
        return <div>
            <h1 className="blue-text lighten-3"> Lets prep some meals</h1>
            <VisibleIngredientList />
        </div>
    }
}

exports.Main = Main
