import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';
import { useGetTicketTypes } from '@/hooks/tickets/useGetTicketTypes';
import { Box } from '@/components/common/Box';
import Grid from '@mui/material/Grid';
import { DeleteButton } from '@/components/common/IconButtons/DeleteButton';
import { EditButton } from '@/components/common/IconButtons/EditButton';
import { useMutation, useQueryClient } from 'react-query';
import TicketsApi from '@/api/TicketsApi';
import { toast } from 'react-toastify';
import { useIsSuperAdmin } from '@/hooks/useIsSuperAdmin';

export const TicketsTable = ({ handleEdit, ...rest }) => {
  const isSuperAdmin = useIsSuperAdmin();
  const { data: ticketTypes, isLoading } = useGetTicketTypes();
  const { mutate, isLoading: isMutateLoading } = useMutation(
    TicketsApi.deleteTicketType
  );
  const queryClient = useQueryClient();

  const handleDelete = id => {
    mutate(id, {
      onSuccess: () => {
        queryClient.setQueryData(['ticket-types'], prev => {
          prev.splice(
            prev.findIndex(x => x.id === id),
            1
          );
          return prev;
        });
        toast.success('Entrada eliminada exitosamente');
      },
      onError: () => toast.error('Algo salió mal'),
    });
  };

  const loading = isLoading || isMutateLoading;

  return (
    <Box {...rest} isLoading={loading}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Tipo</TableCell>
                {isSuperAdmin && <TableCell>Empresa</TableCell>}
                <TableCell width="115px">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ticketTypes?.length > 0 &&
                ticketTypes.map(ticketType => (
                  <TableRow key={ticketType.id}>
                    <TableCell>{ticketType.id}</TableCell>
                    <TableCell>{ticketType.name}</TableCell>
                    <TableCell>
                      ${Number(ticketType.price).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      {ticketType.is_public ? 'Pública' : 'Privada'}
                    </TableCell>
                    {isSuperAdmin && (
                      <TableCell>{ticketType.company?.name}</TableCell>
                    )}
                    <TableCell align="right">
                      <EditButton
                        tooltipText="Editar entrada"
                        onClick={() => handleEdit(ticketType.id)}
                      />
                      <DeleteButton
                        tooltipText="Eliminar entrada"
                        onClick={() => handleDelete(ticketType.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
  );
};
