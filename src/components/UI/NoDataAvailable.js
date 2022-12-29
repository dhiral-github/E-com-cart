import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const NoDataAvailable = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center' mt={10}>
        <CircularProgress />
        <Typography variant='overline'>Something is wrong...</Typography>
      </Box>
    </div>
  )
}

export default NoDataAvailable;