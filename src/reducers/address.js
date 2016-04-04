import { PERFORM_SEARCH } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case PERFORM_SEARCH:
      return action.payload.data;
  }
  return state;
}
