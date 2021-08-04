import { SET_COMPANIES, SET_CURRENT_COMPANY, IS_LOADING, DELETE_TENANT, ADD_TENANT } from './type'



let initialState = {
    companies: [{ id: 25, name: 'kompany' }],
    isLoading: false,
    currentCompany: [
        {
            clients: [],
            accounts: [],
            addressId: 10654,
            streetId: 45,
            houseId: 89,
            streetName: "Западносибирская",
            building: "12",
            corpus: "1",
            flat: "1",
        }
    ],
}

const accountReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_COMPANIES:
            return {
                ...state,
                companies: [...action.data]
            }
        case SET_CURRENT_COMPANY:
            return {
                ...state,
                currentCompany: [...action.id]
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,

            }
        case ADD_TENANT:
            return {
                ...state,
                currentCompany: state.currentCompany.map(c => {
                    if (c.addressId === action.payload.addressId) {
                        c.clients = [...c.clients, { ...action.payload }]
                    }
                    return c
                })
            }
        case DELETE_TENANT:
            return {
                ...state,
                currentCompany: state.currentCompany.map(c => {
                    if (c.clients.length) {
                        c.clients = c.clients.filter(client => client.bindId !== action.id)
                    }
                    return c
                })
            }
        default:
            return state;
    }
}



export default accountReducer