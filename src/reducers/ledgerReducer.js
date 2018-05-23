import { getMethod, postMethod } from '../api/apiMethods'

const userReducer = (state = {
    list: []
}, action) => {
    switch (action.type) {
        case "SET_ALL_LEDGER":
            state = { ...state, list: action.obj }
            break;

        case "ADD_NEW_LEDGER":
            // console.log(action.obj)

            const data = {
                name: action.obj.ledgerName,
                code: action.obj.ledgerCode,
                "projectInfo": {
                    "projectName": "BLBC",
                    "projectCode": "518"
                },
                "chartOfAccount": "Income",
            }

            postMethod('/accounts/ledger/create', data)
                .then(doc => {
                    console.log(doc)
                })

            let newList = state.list
            newList.push({
                name: action.obj.ledgerName,
                code: action.obj.ledgerCode,
                _id: 1009,
            })

            state = { ...state, list: newList }

            break;
    }

    return state
}

export default userReducer