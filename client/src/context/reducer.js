// inital state of the app.
const userFields = [
  'id',
  'displayName',
  'email',
  'accessToken',
  'idToken',
];

export const initialState = {
  user: userFields.reduce((acc, curr) => ({...acc, [curr]: localStorage.getItem(curr)}), {}),
  cart: null,
  banner: { show: false, message: null }
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
    case "SET_BANNER":
      return { 
        ...state,
        banner:action.banner
      }
  }
};

export default reducer;
