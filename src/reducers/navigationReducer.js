// src/reducers/navigationReducer.js
const initialState = {
    activeItem: 'Home',
  };
  
  const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_ITEM':
        return { ...state, activeItem: action.payload };
      default:
        return state;
    }
  };
  
  export default navigationReducer;
  