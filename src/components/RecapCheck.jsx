import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config';
import Loading from './Loading';
import { RecapCtx } from '../context/RecapContext';

export default function RecapCheck(props) {
  const { setOpen } = React.useContext(RecapCtx);
  const { recaption, id } = props;
  const [isChange, setIsChange] = React.useState(false);
  const [dataRecap, setDataRecap] = React.useState(recaption);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (label, value) => {
    let newObj = dataRecap;
    let getIndex = newObj.findIndex((obj) => obj.name == label);

    newObj[getIndex].isCheck = value;

    setDataRecap(newObj);
    setIsChange(!isChange);
  };
  const handleUpdate = async (id) => {
    setIsLoading(true);
    const movieDoc = doc(db, 'reports', id);
    await updateDoc(movieDoc, { recapList: dataRecap }).then(() => {
      setIsLoading(false);
      setOpen(false);
    });
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <Loading open={isLoading} />
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
        <Button variant="outlined" onClick={() => setOpen(false)}>
          <ClearIcon />
        </Button>
        <Button variant="contained" onClick={() => handleUpdate(id)}>
          <DoneIcon />
        </Button>
      </Box>
    </Box>
  );
}
