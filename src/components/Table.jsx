import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config';
import { Box, Button, ButtonGroup, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import BoxAction from './BoxAction';
import StatusReport from './StatusReport';
import ReportModal from './ReportModal';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable() {
  const [reportList, setReportList] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const reportCollection = collection(db, 'reports');

  const CellStyled = styled(TableCell)({
    textAlign: 'center',
    minWidth: 200,
    maxWidth: 500,
  });

  const handleDelete = async (id) => {
    const reportDoc = doc(db, 'reports', id);

    await deleteDoc(reportDoc).finally(() => setIsChange(!isChange));
  };
  const handleUpdate = async (id, status) => {
    const reportDoc = doc(db, 'reports', id);

    await updateDoc(reportDoc, { status: status }).finally(() =>
      setIsChange(!isChange)
    );
  };

  useEffect(() => {
    const getReportList = async () => {
      try {
        const data = await getDocs(reportCollection);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setReportList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getReportList();
  }, [isChange]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <CellStyled>Judul</CellStyled>
            <CellStyled>Nama</CellStyled>
            <CellStyled>Email</CellStyled>
            <CellStyled>Telepon</CellStyled>
            <CellStyled>Tanggal</CellStyled>
            <CellStyled>Status</CellStyled>
            <CellStyled>Isi</CellStyled>
            <CellStyled>Action</CellStyled>
            <CellStyled>Tanggapi</CellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportList.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}>
              <CellStyled
                component="th"
                scope="row"
                sx={{
                  fontWeight: 600,
                }}>
                {row.title}
              </CellStyled>
              <CellStyled>{row.name}</CellStyled>
              <CellStyled>{row.email}</CellStyled>
              <CellStyled>{row.phone}</CellStyled>
              <CellStyled>{row.date}</CellStyled>
              <CellStyled>
                <StatusReport status={row.status} />
              </CellStyled>
              <CellStyled>
                <ReportModal title={row.title} body={row.body} />
              </CellStyled>
              <CellStyled>
                <BoxAction phone={row.phone} email={row.email} />
              </CellStyled>
              <CellStyled>
                <ButtonGroup
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '15px',
                    justifyContent: 'center',
                  }}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      bgcolor: '#4caf50',
                    }}
                    onClick={() => handleUpdate(row.id, 'terima')}>
                    <CheckIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleUpdate(row.id, 'tolak')}>
                    <DoNotDisturbIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(row.id)}>
                    <DeleteIcon />
                  </Button>
                </ButtonGroup>
              </CellStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
