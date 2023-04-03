import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack
      spacing={2}
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
