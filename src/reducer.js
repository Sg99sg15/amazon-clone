
export const initialState = {
    basket: [],
    user:null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {

    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
                };
            // logic for adding items to basket
            break;
        case 'REMOVE_FROM_BASKET':
        // Logic for Removing items from basket....

        // clone the basket
        let newBasket = [...state.basket];   
        // We check to see if product exits 
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        if(index >= 0) {
            // item exits in basket, Remove It...
            newBasket.splice(index, 1);
        }else{
            console.warn(`cant remove product (id: ${action.id}) as its not in basket!)`
            );
        }

        return {
            ...state, 
            basket: newBasket,
        };
        // logic for removing item from basket
        break;
        default:
            return state;
    }
}
export default reducer;