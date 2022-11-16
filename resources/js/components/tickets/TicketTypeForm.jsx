import { Loader } from '@/components/common/Loader';
import { Grid } from '@mui/material';
import Title from '@/components/common/Title';
import { TextField } from '@/components/common/Inputs/TextField';
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/common/Inputs/Switch';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import { Box } from '@/components/common/Box';
import { useMutation, useQueryClient } from 'react-query';
import TicketsApi from '@/api/TicketsApi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useGetTicketType } from '@/hooks/tickets/useGetTicketType';
import { useUpdateTicketType } from '@/hooks/tickets/useUpdateTicketType';

export const TicketTypeForm = ({ ticketTypeId, setTicketTypeId }) => {
  const queryClient = useQueryClient();
  const { data: ticketType, isLoading: isLoadingGetTicket } =
    useGetTicketType(ticketTypeId);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: ticketType,
  });
  useUpdateTicketType(ticketType, reset);
  const { mutate, isLoading } = useMutation(
    ticketType ? TicketsApi.updateTicketType : TicketsApi.createTicketType
  );

  const onSubmit = data => {
    mutate(data, {
      onSuccess: () => {
        toast.success(
          `Entrada ${ticketType ? 'modificada' : 'creada'} exitosamente`
        );
        queryClient.invalidateQueries(['ticket-types']);
        queryClient.removeQueries(['ticket-type']);
        setTicketTypeId(null);
      },
      onError: () => toast.error('Algo salió mal'),
    });
  };

  const title = `${ticketType ? 'Modificar' : 'Crear'} entrada`;
  const loading = isLoading || isLoadingGetTicket;

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} isLoading={loading}>
      <Grid container spacing={2} padding={2} alignItems="center">
        <Grid item xs={12}>
          <Title>{title}</Title>
        </Grid>
        <Grid item xs={4}>
          <TextField
            control={control}
            labelText="Nombre"
            name="name"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            control={control}
            labelText="Precio"
            name="price"
            required
          />
        </Grid>
        <Grid item xs={3}>
          <Stack flexDirection="row" alignItems="center">
            <Switch
              control={control}
              labelText="Pública"
              name="is_public"
              fullWidth={false}
            />
            <Tooltip title="Determina si los clientes podrán comprar esta entrada en el sitio web">
              <InfoIcon color="primary" />
            </Tooltip>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            onClick={() => {
              queryClient.removeQueries(['ticket-type']);
              setTicketTypeId(null);
              reset(['name', 'price', 'is_public']);
            }}
            sx={{ marginRight: '1rem' }}
            type="button"
          >
            Cancelar
          </Button>
          <Button variant="contained">{title}</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
