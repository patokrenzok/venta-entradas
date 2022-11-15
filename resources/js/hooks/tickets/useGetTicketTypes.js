import { useQuery } from 'react-query';
import TicketsApi from '@/api/TicketsApi';

export const useGetTicketTypes = () => {
  return useQuery(['ticket-types'], TicketsApi.getTicketTypes);
};
