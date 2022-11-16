import { TicketsTable } from '@/components/tickets/Table';
import { TicketTypeForm } from '@/components/tickets/TicketTypeForm';
import { useState } from 'react';

export const TicketsPage = () => {
  const [id, setId] = useState(null);
  return (
    <>
      <TicketTypeForm ticketTypeId={id} setTicketTypeId={setId} />
      <TicketsTable
        style={{ marginTop: '3rem' }}
        handleEdit={id => setId(id)}
      />
    </>
  );
};
