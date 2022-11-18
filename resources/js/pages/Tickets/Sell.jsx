import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Title from '@/components/common/Title';
import SubTitle from '@/components/common/SubTitle';
import { Box } from '@/components/common/Box';
import { TextField } from '@/components/common/Inputs/TextField';
import { Select } from '@/components/common/Inputs/Select';
import { useForm } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import { useGetTicketTypes } from '@/hooks/tickets/useGetTicketTypes';
import { useQuery } from 'react-query';
import PaymentMethodsApi from '@/api/PaymentMethodsApi';

function renderTicketTypes(data) {
  return data.map(item => (
    <MenuItem key={item.id} value={item.id}>
      {item.name} (${Number(item.price).toFixed(2)})
    </MenuItem>
  ));
}

export const SellTickets = () => {
  const { data: paymentMethods } = useQuery(
    ['payment-methods-allowed'],
    PaymentMethodsApi.getAllowed
  );
  const { data: ticketTypes } = useGetTicketTypes();
  const { control } = useForm();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title>Vender entradas</Title>
        </Grid>
        <Grid item xs={5}>
          <Select
            control={control}
            name="ticket_type_id"
            labelText="Tipo de entrada"
            data={ticketTypes}
            render={renderTicketTypes}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            control={control}
            name="quantity"
            labelText="Cantidad"
            required
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Agregar</Button>
        </Grid>
        <Grid item xs={12}>
          <SubTitle>Resúmen</SubTitle>
        </Grid>
      </Grid>
    </Box>
  );
};
