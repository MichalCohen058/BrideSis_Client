export const addShadchan=(shadchan)=>{
    return{
        type:"ADD_SHADCHAN",
        payload:shadchan
    }
    }
    
    export const deleteShadchan=(shadchanId)=>{
        return{
        type:"DELETE_SHADCHAN",
        payload:shadchanId
    }
    }
    export const addUser=(user)=>{
        return{
            type:"ADD_USER",
            payload:user
        }
        }
        
        export const deleteUser=(userId)=>{
            return{
            type:"DELETE_USER",
            payload:userId
        }
        }