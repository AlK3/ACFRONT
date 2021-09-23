const defaultState = {
    headerItem: '',
}
  
export const headerItemReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_HEADER_ITEM':
        return {headerItem: action.payload};
  
      default:
        return state;
    }
}