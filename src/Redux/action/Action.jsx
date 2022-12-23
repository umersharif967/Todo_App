export const ACTION_ADDTODO  = (data) => {
    return{
        type: "ActionTypeAddtodo",
        payload:{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const ACTION_DELETEtODO = (index) =>{
    return {
        type: "ActionTypeDelete",
        payload:{
            index: index
        }
    }
}