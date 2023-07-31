export const initialState = {
    basket: [],
}; // This is the initial state of the basket

const reducer =(state, action) => {
    console.log(action.type);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket,action.item]
                
            };
            
        default:
            return state;
            console.log("def")
    }
}

export default reducer;