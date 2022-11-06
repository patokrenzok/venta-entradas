import axios from 'axios';

class AuthApi {
  login(data) {
    return axios.post('/api/login', data);
  }
}

export default new AuthApi();
