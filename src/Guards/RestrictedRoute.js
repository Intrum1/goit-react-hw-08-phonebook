import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from '../Redux/selectors';

export const PublicRoute = ({ children }) => {
  const token = useSelector(selectToken);
  return !token ? children : <Navigate to="/contacts" />;
};
PublicRoute.propTypes = {
  children: PropTypes.node,
};
