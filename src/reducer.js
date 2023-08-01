export const initialState = {
    basket: [],
}; // This is the initial state of the basket

// Selector

export const getBasketTotal=(basket) =>
    basket?.reduce((amount,item)=>item.price+amount,0);


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