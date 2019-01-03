import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    // setTimeout(()=>{},2000)
    return axios.post('/api/users', userData);
  }
}
