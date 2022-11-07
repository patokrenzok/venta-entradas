import axiosIntance from '@/api/apiHelper';

class AuthApi {
  login(data) {
    return axiosIntance.post('/login', data);
  }

  me() {
    return axiosIntance.get('/me');
  }
}

export default new AuthApi();
