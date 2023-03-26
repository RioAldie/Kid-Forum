import { Box, Button, styled } from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';

export default function ProfileBar(props) {
  const [bar, setBar] = useState('Profile');
  const { actived, setActived } = props;

  const handleBarActive = (item) => {
    setBar(item != bar ? item : bar);
    setActived(item != bar ? item : bar);
  };

  const AllMenuProfile = ['Profile', 'Laporan'];
  const active = {
    color: '#fff',
    backgroundColor: '#FFFFFF4A',
  };
  const MenuProfile = styled(Box)({
    width: '90%',
    height: '56px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '20px',
    backgroundColor: '#FF0032',
    borderRadius: '5px',
    alignItems: 'center',
    marginTop: '20px',
  });
  const MenuItem = styled(Button)({
    width: '80px',
    height: '40px',
    color: '#FFFFFF87',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: '550',
    lineHeight: '24',
  });
  return (
    <>
      <MenuProfile>
        {AllMenuProfile.map((item) => {
          return (
            <MenuItem
              key={item}
              sx={item === bar ? active : null}
              onClick={(e) => handleBarActive(item)}>
              {item}
            </MenuItem>
          );
        })}
      </MenuProfile>
    </>
  );
}
