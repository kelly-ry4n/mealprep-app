const React = require('react')
const ReactDOM = require('react-dom')
const app = require('./app')
const Redux = require('redux')
const ReduxThunk = require('redux-thunk')
const ReactRedux = require('react-redux')
const $ = require('jquery')
const ReactRouter = require('react-router')

const Router = ReactRouter.Router
const Route = ReactRouter.Route
const browserHistory = ReactRouter.browerHistory

const Provider = require('react-redux').Provider
const actions = require('./actions')

reducers = require('./reducers.jsx')

console.log("reduxThunk", ReduxThunk)

window.store = Redux.createStore(
    reducers.exampleReducer,
    Redux.applyMiddleware(ReduxThunk.default)
)

// window.store = Redux.applyMiddleware(ReduxThunk)(Redux.createStore)(reducers.exampleReducer)


require('../scss/example/example.scss')
require('../scss/materialize/sass/materialize.scss')
require('../scss/materialize/js/bin/materialize.min.js')
require('materialize-css')
require('../html/index.html')


ReactDOM.render(
    <Provider store={ window.store } >
        <app.Main />
    </Provider>,
    document.getElementById('appContainer'),
)

$(document).ready( () => {
    console.log("ready")
    store.dispatch(actions.beginLoad)

})

