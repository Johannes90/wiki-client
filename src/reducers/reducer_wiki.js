import { FETCH_WIKI } from '../actions/index';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_WIKI:
      return Object.assign({}, state, {
        pages: action.payload.query.pages
      })
  }
  return state;
}
