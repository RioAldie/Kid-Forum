import { Box, Paper, Typography } from '@mui/material';
import CardFeature from './CardFeature';
import datasFeature from '../services/features';
import ButtonGoRed from './ButtonGoRed';

const Feature = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px',
        gap: '30px',
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
      <Paper
        sx={{
          width: '80%',
          minHeight: '200px',

          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          flexFlow: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          mt: '50px',
          borderRadius: '8px',
          py: '20px',
        }}
        elevation={2}>
        {datasFeature.map((data, i) => {
          return (
            <CardFeature name={data.name} icon={data.icon} key={i} />
          );
        })}
      </Paper>

      <ButtonGoRed />
    </Box>
  );
};

export default Feature;
