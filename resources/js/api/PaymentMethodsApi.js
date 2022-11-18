import axiosIntance from '@/api/apiHelper';

class PaymentMethodsApi {
  async get() {
    const response = await axiosIntance.get('/payment-methods');
    return response.data;
  }

  async getAllowed() {
    const response = await axiosIntance.get('/payment-methods-allowed');
    return response.data;
  }

  async sync(data) {
    const response = await axiosIntance.post('/payment-methods', data);
    return response.data;
  }
}

export default new PaymentMethodsApi();
