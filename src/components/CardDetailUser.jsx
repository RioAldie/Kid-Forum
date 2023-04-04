import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function UserDetailCard(props) {
  const { date, name, body, title } = props;
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#2196f3' }} aria-label="recipe">
            {name[0]}
          </Avatar>
        }
        title={name}
        subheader={date}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: '18px',
          }}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
