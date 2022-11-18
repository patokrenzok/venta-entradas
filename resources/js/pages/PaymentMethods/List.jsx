import { Box } from '@/components/common/Box';
import { Title } from '@/components/common/Title';
import { SubTitle } from '@/components/common/SubTitle';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import PaymentMethodsApi from '@/api/PaymentMethodsApi';
import { useForm } from 'react-hook-form';
import { ListItem } from '@/components/paymentMethods/ListItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export const PaymentMethodsList = () => {
  const queryClient = useQueryClient();
  const { data: methodsAllowed } = useQuery(
    ['payment-methods-allowed'],
    PaymentMethodsApi.getAllowed
  );
  const { data, isLoading } = useQuery(
    ['payment-methods'],
    PaymentMethodsApi.get
  );
  const { mutate, isLoading: isMutateLoading } = useMutation(
    ['payment-methods-sync'],
    PaymentMethodsApi.sync
  );
  const { handleSubmit, control, resetField } = useForm();

  useEffect(() => {
    if (methodsAllowed) {
      methodsAllowed.forEach(method => {
        resetField(method.name, { defaultValue: true });
      });
    }
  }, [methodsAllowed]);

  const onSubmit = data => {
    const syncData = Object.entries(data)
      .map(([key, value]) => {
        if (value) return key;
      })
      .filter(x => x);

    if (syncData.length === 0) {
      toast.error('Al menos 1 método debe estar habilitado');
      return;
    }

    mutate(
      { payment_methods: syncData },
      {
        onSuccess: () => {
          toast.success('Configuración actualizada');
          queryClient.invalidateQueries(['payment-methods-allowed']);
        },
        onError: () => toast.error('Algo salió mal'),
      }
    );
  };

  const loading = isLoading || isMutateLoading;

  return (
    <Box isLoading={loading} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Title>Métodos de pago</Title>
      <p>Selecciona los métodos de pago que quieres utilizar</p>
      <Stack direction="column" alignItems="start">
        {data?.map(paymentMethod => (
          <ListItem
            key={paymentMethod.id}
            paymentMethod={paymentMethod}
            control={control}
          />
        ))}
      </Stack>
      <Button variant="contained" style={{ marginTop: '1rem' }}>
        Guardar configuración
      </Button>
    </Box>
  );
};
