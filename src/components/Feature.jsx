import { Box, Typography } from '@mui/material';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import CardFeature from './CardFeature';

const Feature = () => {
  return (
    <Box
      sx={{
        width: '80%',
        height: '200px',
        border: 'solid 2px #B3005E',
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        flexFlow: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '50px',
        borderRadius: '8px',
        py: '20px',
      }}>
      <CardFeature />
      <CardFeature />
      <CardFeature />
      <CardFeature />
    </Box>
  );
};

export default Feature;
