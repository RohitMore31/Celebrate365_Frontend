
export const addMemeber=(data)=>{
    console.log(data);
    return({
        action:"ADD_NEW_MEMBER",
        data:data
    })
}

export const updateMemeber=(data)=>{
    console.log(data);
    return({
        action:"UPDATE_MEMBER",
        data:data
    })
}