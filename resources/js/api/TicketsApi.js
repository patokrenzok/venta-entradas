import axiosIntance from '@/api/apiHelper';

class TicketsApi {
  async getTicketTypes() {
    const response = await axiosIntance.get('/ticket-types');
    return response.data;
  }

  async createTicketType(data) {
    const response = await axiosIntance.post('/ticket-types', data);
    return response.data;
  }

  async deleteTicketType(id) {
    const response = await axiosIntance.delete(`/ticket-types/${id}`);
    return response.data;
  }
}

export default new TicketsApi();
