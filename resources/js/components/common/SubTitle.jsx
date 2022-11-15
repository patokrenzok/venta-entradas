import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function SubTitle(props) {
  return (
    <Typography component="h3" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

SubTitle.propTypes = {
  children: PropTypes.node,
};

export default SubTitle;
