
let reporter = store => next => action => {

  try {
    let result = next(action);
    console.log('__ACTION__', action);
    console.log('__STATE__', store.getState());
    return result;
  }
  catch (error) {
    error.action = action;
    console.log('__ACTION__', action);
    console.error('__ERROR__', error.message);
    return error;
  }

};

export default reporter;