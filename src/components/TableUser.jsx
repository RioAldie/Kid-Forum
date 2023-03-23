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
import {
  Box,
  Button,
  ButtonGroup,
  styled,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import BoxAction from './BoxAction';
import StatusReport from './StatusReport';
import ReportModal from './ReportModal';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function UserReports(props) {
  const { reports } = props;

  const CellStyled = styled(TableCell)({
    textAlign: 'center',
    minWidth: 200,
    maxWidth: 500,
  });

  console.log(reports);
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: { xs: '100%', md: '80%' } }}>
      {reports != null && (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CellStyled>Judul</CellStyled>
              <CellStyled>Tanggal</CellStyled>
              <CellStyled>Status</CellStyled>
              <CellStyled>Isi</CellStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((row, i) => {
              return (
                <TableRow
                  key={i}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                    },
                  }}>
                  <CellStyled
                    component="th"
                    scope="row"
                    sx={{
                      fontWeight: 600,
                    }}>
                    {row.title}
                  </CellStyled>
                  <CellStyled>{row.date}</CellStyled>
                  <CellStyled>
                    <StatusReport status={row.status} />
                  </CellStyled>
                  <CellStyled>
                    <ReportModal title={row.title} body={row.body} />
                  </CellStyled>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
