import { useQuery } from 'react-query';
import TicketsApi from '@/api/TicketsApi';
import { useEffect } from 'react';

export const useGetTicketType = ticketTypeId => {
  const query = useQuery({
    queryKey: ['ticket-type', ticketTypeId],
    queryFn: () => TicketsApi.getTicketType(ticketTypeId),
    enabled: false,
  });

  useEffect(() => {
    ticketTypeId && query.refetch();
  }, [ticketTypeId]);

  return query;
};
