import axiosIntance from '@/api/apiHelper';

class CompaniesApi {
  async get() {
    const response = await axiosIntance.get('/companies');
    return response.data;
  }
}

export default new CompaniesApi();
