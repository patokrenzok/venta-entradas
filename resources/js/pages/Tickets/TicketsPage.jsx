import { TicketsTable } from '@/components/tickets/Table';
import { TicketTypeForm } from '@/components/tickets/TicketTypeForm';

export const TicketsPage = () => {
  return (
    <>
      <TicketTypeForm />
      <TicketsTable style={{ marginTop: '3rem' }} />
    </>
  );
};
