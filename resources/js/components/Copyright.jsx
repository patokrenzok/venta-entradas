import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Copyright = () => (
  <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    sx={{ mt: 8, mb: 4 }}
  >
    {'Copyright © '}
    <Link
      color="inherit"
      href="https://crystal-desarrollo.com"
      target="_blank"
      rel="noreferrer"
    >
      Crystal Desarrollo 💎
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
