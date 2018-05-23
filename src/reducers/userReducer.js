const userReducer = (state = {
    name: 'Shams Sadek',
    age: 33,
    list: [
        'Walton', 'Huawei', 'iPhone'
    ]
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = { ...state, name: action.name }
            break;

        case "SET_AGE":
            state = { ...state, age: action.age }
            break;
        
        case "ADD_NAME":
            let newList = state.list
                newList.push(action.name)

            state = { ...state, list: newList}
            
            break;
    }

    return state
}

export default userReducer