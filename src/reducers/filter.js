const filter = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      const newState = state.slice();

      // we have default state which is all
      // change it to category that we passed
      // dispatch an action accordingly
      // update the UI
      return newState;
    default:
      return state;
  }
};

export default filter;
