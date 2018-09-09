import React from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const InlineError = ({ text }) => (
  <FormHelperText style={{ color: '#e74c3c' }}>{text}</FormHelperText>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InlineError;
