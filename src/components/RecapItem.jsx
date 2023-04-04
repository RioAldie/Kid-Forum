import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const RecapItem = (props) => {
  const [checked, setChecked] = React.useState();
  const { recap } = props;
  return (
    <FormControlLabel
      label={recap.name}
      value={recap.isCheck}
      control={<Checkbox checked={recap.isCheck} />}
      onClick={(e) => setChecked(!checked)}
    />
  );
};

export default RecapItem;
