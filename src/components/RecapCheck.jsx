import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';

export default function RecapCheck(props) {
  const { recaption } = props;
  const [isChange, setIsChange] = React.useState(false);
  const [dataRecap, setDataRecap] = React.useState(recaption);

  const handleChange = (label, value) => {
    let newObj = dataRecap;
    let getIndex = newObj.findIndex((obj) => obj.name == label);

    newObj[getIndex].isCheck = value;

    setDataRecap(newObj);
    setIsChange(!isChange);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <Typography variant="h6">Tindak Lanjut</Typography>
      {dataRecap.map((recap, i) => {
        return (
          <FormControlLabel
            label={recap.name}
            key={i}
            value={recap.isCheck}
            control={<Checkbox checked={recap.isCheck} />}
            onClick={(e) => handleChange(recap.name, !recap.isCheck)}
          />
        );
      })}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '20px',
        }}>
        <Button variant="outlined">
          <ClearIcon />
        </Button>
        <Button variant="contained">
          <DoneIcon />
        </Button>
      </Box>
    </Box>
  );
}
