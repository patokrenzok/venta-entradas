import axiosIntance from '@/api/apiHelper';

class UsersApi {
  async get() {
    const response = await axiosIntance.get('/users');
    return response.data;
  }

  async getOne(id) {
    const response = await axiosIntance.get(`/users/${id}`);
    return response.data;
  }

  async create(data) {
    const response = await axiosIntance.post('/users', data);
    return response.data;
  }

  async update(data, userId) {
    const response = await axiosIntance.put(`/users/${userId}`, data);
    return response.data;
  }

  async delete(userId) {
    const response = await axiosIntance.delete(`/users/${userId}`);
    return response.data;
  }

  async enable(userId) {
    const response = await axiosIntance.post(`/users/${userId}`);
    return response.data;
  }

  async getRoles() {
    const response = await axiosIntance.get('/roles');
    return response.data;
  }
}

export default new UsersApi();
