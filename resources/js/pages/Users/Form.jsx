import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Title from '@/components/common/Title';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import UsersApi from '@/api/UsersApi';
import { Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export const UserForm = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { data: roles } = useQuery({
    queryKey: ['roles'],
    queryFn: UsersApi.getRoles,
    refetchOnWindowFocus: false,
  });
  const { data: existingUser } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      if (userId) {
        return await UsersApi.getOne(userId);
      }
    },
  });

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: existingUser,
  });

  useEffect(() => {
    reset(existingUser);
  }, [existingUser]);

  const onCreate = data => {
    UsersApi.create(data)
      .then(() => {
        toast.success('Usuario creado');
        reset();
      })
      .catch(() => {
        toast.error('Algo salio mal');
      });
  };

  const onUpdate = data => {
    UsersApi.update(data, userId)
      .then(() => {
        toast.success('Actualización exitosa');
        reset();
      })
      .catch(() => {
        toast.error('Algo salio mal');
      });
  };

  const onSubmit = data => {
    if (userId) {
      onUpdate(data);
      return;
    }

    onCreate(data);
  };

  return (
    <Container maxWidth="md">
      <Paper component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container padding={2} spacing={2}>
          <Grid item xs={12}>
            <Title>Nuevo usuario</Title>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Nombre"
              autoComplete="name"
              autoFocus
              fullWidth
              {...register('name', { required: true })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Correo electrónico"
              autoComplete="email"
              fullWidth
              {...register('email', { required: true })}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="role_id">Rol</InputLabel>
              <Controller
                control={control}
                name="role_id"
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <Select
                    required
                    labelId="role_id"
                    label="Rol"
                    onBlur={onBlur}
                    onChange={onChange}
                    inputRef={ref}
                    value={value || ''}
                    name={name}
                  >
                    {roles?.length > 0 &&
                      roles.map((role, i) => (
                        <MenuItem
                          value={role.id}
                          key={role.id}
                          selected={i === 0}
                        >
                          {role.name}
                        </MenuItem>
                      ))}
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              sx={{ marginRight: '1rem' }}
              onClick={() => navigate(-1)}
            >
              Cancelar
            </Button>
            <Button variant="contained" type="submit">
              {existingUser ? 'Guardar cambios' : 'Crear Usuario'}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
