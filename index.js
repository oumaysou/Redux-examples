const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const initialState = {
    numOfCakes: 10,
    milk: 20,
    name: ""
}


//reducer 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, // ca permet de garder une copie du state et changer SEULEMENT la prop numOfCakes
            numOfCakes: state.numOfCakes - 1,
            name: "oussama"
        }
        default: return state
    }
}

//store

const store = createStore(reducer)
console.log('Initial state', store.getState())
store.dispatch(buyCake())
console.log('Updated state', store.getState())