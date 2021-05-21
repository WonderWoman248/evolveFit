const initialState={
    username:"",
    password:""
}

const login=(state=initialState,action)=>{
    switch(action.type){
        case ("login"):
            state = action.payload
            return state;
        default: return state;
    }
}

export default login