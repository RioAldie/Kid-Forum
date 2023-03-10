import { Box, Typography } from '@mui/material';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import CardFeature from './CardFeature';
import datasFeature from '../services/features';

const Feature = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px',
      }}>
      <Typography
        sx={{
          fontSize: '22px',
          fontWeight: '600',
          lineHeight: '33px',
          width: '80%',
          height: '40px',
          borderBottom: 'solid #DE002C 2px',
        }}
        color="primary">
        Alur Pengaduan
      </Typography>
      <Box
        sx={{
          width: '80%',
          height: '200px',
          border: 'solid 2px #F0A5B4',
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
        {datasFeature.map((data, i) => {
          return <CardFeature name={data.name} icon={data.icon} />;
        })}
      </Box>
    </Box>
  );
};

export default Feature;
