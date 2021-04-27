import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';

const middleware = [];

if (__DEV__) {
  middleware.push(createLogger({}));
}

middleware.push(thunk);
middleware.push(promise);

export default middleware;
