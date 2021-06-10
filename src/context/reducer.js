// inital state of the app.
// inital state of the app.
const userFields = ["id", "displayName", "email", "accessToken", "idToken"];

export const initialState = {
  user: userFields.reduce(
    (acc, curr) => ({ ...acc, [curr]: localStorage.getItem(curr) }),
    {}
  ),
  term: null,
  product: [],
  results: [],
};

// helper function : will eventually get the cart total.

export const cartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

//reducer function : used to manipulate the state : add or grab data from the context

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS",
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    // Add the product to the cart

    case "FINAL_ORDERS":
      return {
        ...state,
        orders: [...state.orders, action.item],
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    // Empty the cart
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };

    // Remove the product from the cart
    case "REMOVE_ITEM":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("product can't be removed");
      }

      return {
        ...state,
        cart: newCart,
      };

    //Set the User
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_SEARCH_TERM":
      return {
        ...state,
        term: action.term,
      };

    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        results: [...state.results, action.item],
      };

    case "SET_PRODUCT":
      return {
        ...state,
        product: [...state.product, action.item],
      };

    case "SET_BANNER":
      return {
        ...state,
        banner: action.banner,
      };

    default:
      return state;
  }
};

export default reducer;
