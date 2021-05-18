// inital state of the app.

export const initialState = {
  user: null,
  cart: null,
};

// helper function : will eventually get the cart total.

export const cartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

//reducer function : used to manipulate the state : add or grab data from the context

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
  }
};

export default reducer;
