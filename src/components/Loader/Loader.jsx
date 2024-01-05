import React from 'react';
import { Circles } from 'react-loader-spinner';
import { Box } from './LoaderStyled';

const Loader = () => {
  return (
    <Box>
      <Circles
        height="80"
        width="80"
        color="#2cc415"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};

export default Loader;
