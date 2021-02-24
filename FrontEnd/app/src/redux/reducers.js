var name = (state = [], action) => {
    switch (action.type) {
        case 'updateName':
            state = action.payload.name;
            return state;
        default:
            return state
    }
}

var email = (state = [], action) => {
    switch (action.type) {
        case 'updateEmail':
            state = action.payload.email;
            return state;
        default:
            return state
    }
}


var reducers = {
    name,
    email
}

export default reducers;