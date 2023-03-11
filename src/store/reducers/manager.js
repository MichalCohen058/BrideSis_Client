const initialState={
    users:[],
    shads: []

}
export const managerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER": {
            return {
                users: [...state.users, action.payload],
                //details:[...state.details]
            }
        }
        case "DELETE_USER": {
            let a = state.users.filter(item => item.id != action.payload);
            return {
                users: a
            }
        }
        case "ADD_SHADCHAN": {
            return {
                shads: [...state.users, action.payload],
                //details:[...state.details]
            }
        }
        case "DELETE_SHADCHAN": {
            let a = state.shads.filter(item => item.id != action.payload);
            return {
                shads: a
            }
        }


        default: return state;
}
}