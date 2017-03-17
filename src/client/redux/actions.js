import fetch from 'isomorphic-fetch';

/*
 * action types
 */

export const FETCH_SOMETHING_PENDING = 'FETCH_SOMETHING_PENDING';
export const FETCH_SOMETHING_SUCCESS = 'FETCH_SOMETHING_SUCCESS';
export const FETCH_SOMETHING_ERROR = 'FETCH_SOMETHING_ERROR';

/*
 * action creators
 */

export function fetchSomething() {
  return dispatch => {
    dispatch(fetchSomethingPending())
    return fetch(`http://geo.irceline.be/sos/api/v1/stations`)
      .then(response => response.json())
      .then(json => dispatch(fetchSomethingSuccess(json)))
      .catch(err => dispatch(fetchSomethingError(err)))
  }
}

export function fetchSomethingPending() {
  return { type: FETCH_SOMETHING_PENDING };
}

export function fetchSomethingError(error) {
  return { type: FETCH_SOMETHING_ERROR, error };
}

export function fetchSomethingSuccess(data) {
  return { type: FETCH_SOMETHING_SUCCESS, data };
}