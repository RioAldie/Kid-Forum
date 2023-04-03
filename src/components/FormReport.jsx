import {
  Alert,
  Box,
  Button,
  FormControl,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { db } from '../config';
import { StatusCtx } from '../context/StatusContext';
import AlertNotif from './AlertNotif';
import Loading from './Loading';

const FormReport = () => {
  const { status, setStatus } = useContext(StatusCtx);
  const [err, setErr] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('female');
  const [isLoading, setIsLoading] = useState(false);
  const [age, setAge] = useState(1);
  const [job, setJob] = useState('');
  const [adress, setAdrress] = useState('');
  const [degree, setDegree] = useState('');
  const [location, setLocation] = useState('');
  const [relation, setRelation] = useState('');

  const userEmail = JSON.parse(localStorage.getItem('user-email'));
  const handleStatus = () => {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let dates = new Date().getTime();
    const date = `${day}-${month}-${year}`;
    const dataReport = {
      name,
      email: userEmail,
      title,
      body,
      phone: `62${phone}`,
      date: date,
      status: 'pending',
      uid: localStorage.getItem('user-active'),
      adress,
      age,
      degree,
      location,
      relation,
      gender,
      job,
      index: dates,
    };
    console.log('report: ', dataReport);

    console.log('index', dates);
    handleSubmitReport(dataReport);
  };

  const reportsCollectionRef = collection(db, 'reports');

  const resetForm = () => {
    setName('');
    setBody('');

    setPhone('');
    setTitle('');
  };
  const titles = [
    'Kekerasan Fisik',
    'Serangan Psikis',
    'Kekerasan Seksual',
    'Kasus Ekploitasi',
    'Penelantaran Anak',
    'Pembullyan',
    'Lainnya',
  ];
  const degrees = [
    'SD/MI',
    'SMP sederajat',
    'SMA sederajat',
    'D3/Sarjana',
  ];
  const jobs = [
    'Pegawai',
    'Wiraswasta',
    'Wirausaha',
    'Belum Bekerja',
    'Pelajar',
    'Lainnya',
  ];
  const handleSubmitReport = async (dataReport) => {
    try {
      if (
        dataReport.title === '' ||
        dataReport.name === '' ||
        dataReport.body === '' ||
        dataReport.phone === ''
      ) {
        return setErr(true);
      }
      setIsLoading(true);
      await addDoc(reportsCollectionRef, dataReport)
        .then((res) => {
          setStatus(true);
          resetForm();
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: {
          lg: '800px',
          xs: '350px',
        },
        border: 'solid 2px #bfbfbf',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '50px',
        height: '1200px',
        padding: '10px',
        borderRadius: '8px',
      }}
      id="form-report">
      <AlertNotif status={status} />
      <Loading open={isLoading} />
      <Typography
        variant="h6"
        sx={{
          maxWidth: '100%',
          height: '60px',
          bgcolor: '#ff0032',
          color: '#fff',
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
        }}>
        Form Pengaduan
      </Typography>
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '50px',
          height: '600px',
        }}>
        {err && (
          <Alert severity="warning">Tolong di isi Semua!</Alert>
        )}

        <TextField
          fullWidth
          id="name"
          label="Nama"
          type="text"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <TextField
          fullWidth
          id="age"
          label="Umur"
          type="number"
          variant="outlined"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          required
        />
        <RadioGroup
          defaultValue="female"
          name="controlled-radio-buttons-group"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          sx={{
            my: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
          <Typography>Gender :</Typography>
          <Radio value="wanita" sx={{ color: '#000' }} />
          <Typography>Wanita</Typography>
          <Radio value="pria" />
          <Typography>Pria</Typography>
        </RadioGroup>
        <TextField
          fullWidth
          id="adrress"
          label="Alamat"
          type="text"
          variant="outlined"
          onChange={(e) => setAdrress(e.target.value)}
          value={adress}
          required
        />
        <TextField
          fullWidth
          id="role"
          select
          label="Tema Laporan"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          helperText="Pilih Tema Laporanmu">
          {titles.map((role, i) => (
            <MenuItem color="grey" key={i} value={role}>
              {role}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          id="degree"
          select
          label="Pendidikan Terakhir"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}>
          {degrees.map((degree, i) => (
            <MenuItem color="grey" key={i} value={degree}>
              {degree}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          id="degree"
          select
          label="Pekerjaan"
          value={job}
          onChange={(e) => setJob(e.target.value)}>
          {jobs.map((job, i) => (
            <MenuItem color="grey" key={i} value={job}>
              {job}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outline-basic"
          label="Isi Laporan anda"
          type={'text'}
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        />
        <TextField
          fullWidth
          id="location"
          label="Tempat Kejadian"
          type="text"
          variant="outlined"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          required
        />
        <TextField
          fullWidth
          id="Relation"
          label="Hubungan anda dengan Tersangka/Korban"
          type="text"
          variant="outlined"
          onChange={(e) => setRelation(e.target.value)}
          value={relation}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
          }}>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: { xs: '50px', md: '100px' },
              height: '100%',
              background: '#ff0032',
              color: '#fff',
              justifyContent: 'center',
              borderRadius: '3px',
            }}>
            +62
          </Typography>
          <TextField
            fullWidth
            id="No HP"
            label="No. HP/WA"
            type="number"
            variant="outlined"
            onChange={(e) => setPhone(`${e.target.value}`)}
            value={phone}
            required
          />
        </Box>

        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="filled"
          value={userEmail}
          required
        />
        <Button
          variant="contained"
          sx={{
            height: '70px',
          }}
          onClick={() => handleStatus()}>
          Lapor!
        </Button>
      </FormControl>
    </Box>
  );
};

export default FormReport;
