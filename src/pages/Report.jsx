import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import FormReport from '../components/FormReport';
import Services from '../components/Services';
import Sticker from '../components/Sticker';
import { db } from '../config';

const Report = () => {
  const [reportList, setReportList] = useState([]);

  const reportCollection = collection(db, 'reports');

  useEffect(() => {
    const getReportList = async () => {
      try {
        const data = await getDocs(reportCollection);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getReportList();
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0',
        width: '100%',
        overflow: 'hidden',

        justifyContent: 'space-evenly',
        gap: '50px',
      }}>
      <FormReport />
      <Sticker />
      <Services />
    </Box>
  );
};

export default Report;
