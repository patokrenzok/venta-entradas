import { Grid } from '@mui/material';
import Title from '@/components/common/Title';
import { Box } from '@/components/common/Box';
import { useForm } from 'react-hook-form';
import { TextField } from '@/components/common/Inputs/TextField';
import { Switch } from '@/components/common/Inputs/Switch';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import Stack from '@mui/material/Stack';
import { useMutation } from 'react-query';
import TicketsApi from '@/api/TicketsApi';
import { toast } from 'react-toastify';
import { Loader } from '@/components/common/Loader';

export const TicketTypeForm = () => {
  const { mutate, isLoading } = useMutation(TicketsApi.createTicketType);
  const { control, handleSubmit } = useForm();

  const onSubmit = data => {
    data.is_public = !data.is_public;
    mutate(data, {
      onSuccess: () => toast.success('Entrada creada exitosamente'),
      onError: () => toast.error('Algo salió mal'),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      <Grid container spacing={2} padding={2}>
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
        <Stack direction="row" alignItems="center" padding={2}>
          <Switch control={control} labelText="Privado" name="is_public" />
          <Tooltip title="Esta opción permite crear entradas que no estarán disponibles para comprar por el público">
            <InfoIcon style={{ color: '#1876d2' }} />
          </Tooltip>
        </Stack>
        <Grid item xs={12}>
          <Button variant="contained">Crear entrada</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
