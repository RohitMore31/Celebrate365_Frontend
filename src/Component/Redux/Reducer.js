
let intistate=[{
    id:"31",
    name:"rohit",
    lname:"more",
    dob:"31/01/1998"
}]

export default Reducer = (state=intistate,action)=>{
    switch (action.type) {
        case "ADD_NEW_MEMBER":
            let x = [...intistate];
            x.push(action.data);
            state=x;
            return state;
            // break;

        case "UPDATE_MEMBER":
            return state;
            // break;
    
        default:
            return state;
            // break;
    }
}