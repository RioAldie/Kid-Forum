import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { target, name } = props;
  return (
    <Link to={target}>
      <Button
        sx={{
          my: 2,
          color: 'white',
          display: 'block',
          textTransform: 'none',
          fontSize: '16px',
          '&hover': {
            borderBottom: 'solid 1px #fff',
          },
        }}>
        {name}
      </Button>
    </Link>
  );
};

export default NavItem;
