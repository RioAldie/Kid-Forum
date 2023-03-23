import {
  Box,
  Button,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';

import { useEffect, useState } from 'react';

import UserReports from '../components/TableUser';
import { db } from '../config';

export default function Profile() {
  const [reportList, setReportList] = useState([]);
  const userId = localStorage.getItem('user-active');
  const reportCollection = collection(db, 'reports');
  useEffect(() => {
    const getReportList = async () => {
      try {
        const data = await getDocs(reportCollection);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const userFiltered = filteredData.filter((data) => {
          return userId == data.uid;
        });

        console.log(userFiltered);
        setReportList(userFiltered);
      } catch (err) {
        console.error(err);
      }
    };

    getReportList();
  }, []);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          maxHeight: '200vh',
          bgcolor: '#F3F3F4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box
          sx={{
            width: {
              md: '80%',
              sm: '90%',
              xs: '95%',
            },
            mb: '20px',
            pb: '40px',
            bgcolor: '#fff',
            mt: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
          }}>
          <UserReports reports={reportList} />
        </Box>
      </Box>
    </>
  );
}
