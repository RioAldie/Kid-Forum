import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RecapItem from './RecapItem';

export default function RecapCheck() {
  let recapList = [
    { name: 'tes1', isCheck: true },
    { name: 'tes2', isCheck: false },
    { name: 'tes3', isCheck: false },
  ];
  const [isChange, setIsChange] = React.useState(false);
  const [dataRecap, setDataRecap] = React.useState(recapList);

  const handleChange = async (event, label, value) => {
    let newObj = dataRecap;
    let getIndex = newObj.findIndex((obj) => obj.name === label);

    newObj[getIndex].isCheck = value;

    setDataRecap(newObj);
    setIsChange(!isChange);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {dataRecap.map((recap, i) => {
        return (
          <FormControlLabel
            label={recap.name}
            key={i}
            value={recap.isCheck}
            control={<Checkbox checked={recap.isCheck} />}
            onClick={(e) =>
              handleChange(e, recap.name, !recap.isCheck)
            }
          />
        );
      })}
    </Box>
  );
}
