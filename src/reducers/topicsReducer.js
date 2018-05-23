const topicsReducer = (state = {
    list: [
        { topicName: 'Mobile', des: 'This is mobile'},
        { topicName: 'Project Manager', des: 'who manage the project'},
        { topicName: 'weMail', des: 'this is a wordpress plugins'},
    ]
}, action) => {
    switch (action.type) {
        case "ADD_TOPICS":

            let newList = state.list
            newList.push(action.obj)

            state = { ...state, list: newList }
            break;
    }

    return state
}

export default topicsReducer