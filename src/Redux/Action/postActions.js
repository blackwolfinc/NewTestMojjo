import { FETCH_POST, NEW_POST } from './types';

function fetchPosts() {
  return (dispatch) => {
    fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POST,
        payload: posts
      }));
  }
}



export { fetchPosts };