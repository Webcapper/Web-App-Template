var name = (state = [], action) => {
    switch (action.type) {
        case 'updateName':
            state = action.payload.name;
            return state;
        default:
            return state
    }
}

var roll = (state = [], action) => {
    switch (action.type) {
        case 'updateRoll':
            state = action.payload.roll;
            return state;
        default:
            return state
    }
}

var id = (state = [], action) => {
    switch (action.type) {
        case 'updateId':
            state = action.payload.id;
            return state;
        default:
            return state
    }
}

var reducers = {
    name,
    roll,
    id
}

export default reducers;