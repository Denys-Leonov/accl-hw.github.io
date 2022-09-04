import React from 'react';
import CSVReader from 'react-csv-reader';
import { Button, Typography } from '@mui/material';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import './MyButtonParser.css';

function MyButtonParser({ packLength, setDataArr, setFullArr, setFileName }) {
  const parseOptions = {
    header: true,
    skipEmptyLines: true,
  };

  function handleCSV(data, info) {
    console.log(data);
    document.documentElement.scrollTop = 0;
    const firstPackage = data.splice(0, packLength);
    setFullArr(data);
    setDataArr(firstPackage);
    setFileName(info['name']);
  }

  return (
    <Button
      variant="contained"
      color="success"
      component="label"
      sx={{ maxHeight: '34px' }}
    >
      <CSVReader onFileLoaded={handleCSV} parserOptions={parseOptions} />
      <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
        Click to upload files
      </Typography>

      <UploadFileRoundedIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
    </Button>
  );
}

export default MyButtonParser;
