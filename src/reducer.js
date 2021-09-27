export const initialState ={
    basket: [],
    user:null,
};
export const  getBasketTotal =(basket)=>
    basket?.reduce((amount,item)=>
    item.price +amount,0)
    


const reducer=(state,action)=>{
    
    
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "Add_To_Basket":
            // Logic for adding item to basket  
            return {
                ...state,
                basket:[...state.basket,action.item]

            };
           
        case "Remove_From_Basket":
            // Logic for Removing item from basket

            // We Clone the basket
            let newBasket=[...state.basket]

            // WE check to See if Product exists
            const index =state.basket.findIndex((basketItem) =>basketItem.id ===action.id);
            

            // item exists in basket,remove it
            if(index>=0){
            newBasket.splice(index,1)
            }
            else{
                console.warn(`Can't remove product id: ${action.id} as its is not available here`);
            }
            return {...state,basket:newBasket};
          
        default:
            return state;
            
    }
}
export default reducer;