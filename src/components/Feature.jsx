import { Box } from '@mui/material';

const Feature = () => {
  return (
    <Box
      sx={{
        width: '80%',
        height: '500px',
        border: 'solid 1px #000',
      }}>
      <Box
        sx={{
          width: '200px',
          height: '60px',
          border: 'solid 1px #000',
        }}>
        Feature 1
      </Box>
    </Box>
  );
};

export default Feature;
