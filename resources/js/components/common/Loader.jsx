import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

export const Loader = () => {
  return (
    <Container
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'rgba(255,255,255,.7)',
        zIndex: 9,
      }}
    >
      <CircularProgress />
    </Container>
  );
};
