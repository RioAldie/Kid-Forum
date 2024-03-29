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
import { Button, ButtonGroup, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import BoxAction from './BoxAction';
import StatusReport from './StatusReport';
import ReportModal from './ReportModal';
import Loading from './Loading';
import ClientModal from './ClientModal';
import Recaption from './Recaption';
import RecapCtxProvider from '../context/RecapContext';

export default function BasicTable() {
  const [reportList, setReportList] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const reportCollection = collection(db, 'reports');

  const CellStyled = styled(TableCell)({
    textAlign: 'center',
    minWidth: 200,
    maxWidth: 500,
  });

  const handleDelete = async (id) => {
    const reportDoc = doc(db, 'reports', id);
    setIsLoading(true);
    await deleteDoc(reportDoc)
      .then(() => setIsChange(!isChange))
      .finally(() => setIsLoading(false));
  };
  const handleUpdate = async (id, status) => {
    const reportDoc = doc(db, 'reports', id);
    setIsLoading(true);
    await updateDoc(reportDoc, { status: status })
      .then(() => setIsChange(!isChange))
      .finally(() => setIsLoading(false));
  };
  const sortingDataByNewest = (data) => {
    const sorted = data.sort(
      (a, b) => parseFloat(b.index) - parseFloat(a.index)
    );

    setReportList(sorted);
  };

  useEffect(() => {
    const getReportList = async () => {
      try {
        const data = await getDocs(reportCollection);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        sortingDataByNewest(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getReportList();
  }, [isChange]);

  return (
    <TableContainer component={Paper}>
      <Loading open={isLoading} />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <CellStyled>No</CellStyled>
            <CellStyled>Judul</CellStyled>
            <CellStyled>Biodata</CellStyled>
            <CellStyled>Status</CellStyled>
            <CellStyled>Isi</CellStyled>
            <CellStyled>Action</CellStyled>
            <CellStyled>Tanggapi</CellStyled>
            <CellStyled>Rekap</CellStyled>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            flexDirection: 'column-reverse',
          }}>
          {reportList.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}>
              <CellStyled>{i + 1}</CellStyled>
              <CellStyled
                component="th"
                scope="row"
                sx={{
                  fontWeight: 600,
                }}>
                {row.title}
              </CellStyled>
              <CellStyled>
                <ClientModal props={row} />
              </CellStyled>
              <CellStyled>
                <StatusReport status={row.status} />
              </CellStyled>
              <CellStyled>
                <ReportModal
                  title={row.title}
                  body={row.body}
                  date={row.date}
                  name={row.name}
                />
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
              <CellStyled>
                <RecapCtxProvider>
                  <Recaption recap={row.recapList} id={row.id} />
                </RecapCtxProvider>
              </CellStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>{' '}
    </TableContainer>
  );
}
