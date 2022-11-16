import { useEffect } from 'react';

export const useUpdateTicketType = (ticketType, reset) => {
  useEffect(() => {
    if (ticketType) {
      ticketType.is_public = Boolean(ticketType.is_public);
      reset(ticketType);
    } else {
      reset(['name', 'price', 'is_public']);
    }
  }, [ticketType]);
};
