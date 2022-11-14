import Paper from '@mui/material/Paper';

export const Box = ({ children, style, ...rest }) => {
  return (
    <Paper {...rest} style={{ position: 'relative', ...style }}>
      {children}
    </Paper>
  );
};
