export const AuthReducer = (initalState, action) => {
    const state = initalState;
    switch(action.type){
        case "login":
            return {
                id:action.payload.id,
                username:action.payload.username,
                token:action.payload.token
            }
        default:
            return state;
    }
}