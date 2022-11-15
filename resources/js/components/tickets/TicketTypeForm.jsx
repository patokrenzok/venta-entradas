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

export const TicketTypeForm = () => {
  const { mutate, isLoading } = useMutation(TicketsApi.createTicketType);
  const { control, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const onSubmit = data => {
    mutate(data, {
      onSuccess: ticketType => {
        queryClient.setQueryData(['ticket-types'], prev =>
          prev.concat(ticketType)
        );
        reset();
        toast.success('Entrada creada exitosamente');
      },
      onError: () => toast.error('Algo salió mal'),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      <Grid container spacing={2} padding={2} alignItems="center">
        <Grid item xs={12}>
          <Title>Crear entrada</Title>
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
        <Grid item xs={2}>
          <Switch control={control} labelText="Pública" name="is_public" />
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="Determina si los clientes podrán comprar esta entrada en el sitio web">
            <InfoIcon color="primary" />
          </Tooltip>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Crear entrada</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
