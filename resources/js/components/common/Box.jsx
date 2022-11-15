import Paper from '@mui/material/Paper';

export const Box = ({ children, style, component, onSubmit, ...rest }) => {
  return (
    <Paper
      style={{ position: 'relative', ...style }}
      component={component}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </Paper>
  );
};
