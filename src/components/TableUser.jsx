import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';

import StatusReport from './StatusReport';
import ReportModal from './ReportModal';

export default function UserReports(props) {
  const { reports } = props;

  const CellStyled = styled(TableCell)({
    textAlign: 'center',
    minWidth: 200,
    maxWidth: 500,
  });

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: { xs: '100%', md: '80%' } }}>
      {reports != null && (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: '#FF0032', color: '#fff' }}>
              <CellStyled sx={{ color: '#fff' }}>Judul</CellStyled>
              <CellStyled sx={{ color: '#fff' }}>Tanggal</CellStyled>
              <CellStyled sx={{ color: '#fff' }}>Status</CellStyled>
              <CellStyled sx={{ color: '#fff' }}>Isi</CellStyled>
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
