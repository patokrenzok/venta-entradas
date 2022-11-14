import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useQuery } from 'react-query';
import UsersApi from '@/api/UsersApi';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DeactivateButton } from '@/components/common/IconButtons/DeactivateButton';
import { EditButton } from '@/components/common/IconButtons/EditButton';
import { ActivateButton } from '@/components/common/IconButtons/ActivateButton';
import { useAuth } from '@/context/AuthProvider';
import { Loader } from '@/components/common/Loader';
import { Box } from '@/components/common/Box';

export const UsersList = () => {
  const { auth } = useAuth();
  const { isLoading, data } = useQuery({
    queryKey: ['users'],
    queryFn: UsersApi.get,
  });
  const navigate = useNavigate();

  const handleDeleteUser = userId => {
    UsersApi.delete(userId)
      .then(() => toast.success('Usuario desactivado exitosamente'))
      .catch(() => toast.error('Algo salio mal'));
  };

  const handleActivateUser = userId => {
    UsersApi.enable(userId)
      .then(() => toast.success('Usuario activado exitosamente'))
      .catch(() => toast.error('Algo salio mal'));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          component={Link}
          to="/users/add"
        >
          Nuevo usuario
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Box>
          {isLoading && <Loader />}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.length > 0 &&
                data.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role?.name || ''}</TableCell>
                    <TableCell>
                      {user.deleted_at ? 'Inactivo' : 'Activo'}
                    </TableCell>
                    <TableCell align="right">
                      <EditButton
                        tooltipText="Editar usuario"
                        onClick={() => navigate(`/users/add/${user.id}`)}
                      />
                      {user.deleted_at ? (
                        <ActivateButton
                          tooltipText="Habilitar usuario"
                          onClick={() => handleActivateUser(user.id)}
                        />
                      ) : (
                        <DeactivateButton
                          tooltipText="Desactivar usuario"
                          onClick={() => handleDeleteUser(user.id)}
                          disabled={auth?.id === user.id}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};
