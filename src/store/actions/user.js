export const saveUser = (currentUser) => {
    return {
        type: "SAVE_USER",
        payload: currentUser
    }
}


export const updateUser=(user)=>{
    return{
    type:"UPDATE_USER",
    payload:user
}
}

