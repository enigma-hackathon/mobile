const MATCHING_FOUND = 'lokly/MATCHING_FOUND';
const initialState = { };

export function matchingFound(match) {
  return {
    action: MATCHING_FOUND,
    payload: match,
  }
}

export default (state=initialState, action) => {
  switch (action.type) {
    case MATCHING_FOUND:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}