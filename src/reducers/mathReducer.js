const mathReducer = (state = {
    value: 1
}, action) => {
    switch (action.type) {
        case "ADD":
            state = { ...state, value: state.value + action.payload }
            break;
        case "SUBTRACT":
            state = { ...state, value: state.value - action.payload }
            break;
    }

    return state
}

export default mathReducer