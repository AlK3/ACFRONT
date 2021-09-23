const defaultState = {
    load: false,
}
  
export const loadReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_LOAD':
        return {load: action.payload};
  
      default:
        return state;
    }
}