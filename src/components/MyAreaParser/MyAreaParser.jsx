import React, { useState } from 'react';
import Papa from 'papaparse';
import { Box, Typography } from '@mui/material';
import './MyAreaParser.css'

function MyAreaParser({ packLength, setDataArr, setFullArr, setFileName }) {
  const [drag, setDrag] = useState(false);

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dradLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  const parseOptions = {
    header: true,
    skipEmptyLines: true,
  };

  function dropHandler(e) {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    Papa.parse(e.dataTransfer.files[0], {
      ...parseOptions,
      complete: (results) => {
        const firstPackage = results.data.splice(0, packLength);
        setFullArr(results.data);
        setDataArr(firstPackage);
      },
    });
    setFileName(e.dataTransfer.files[0].name);
    setDrag(false);
  }

  return (
    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      {drag ? (
        <Typography
          onDragStart={dragStartHandler}
          onDragLeave={dradLeaveHandler}
          onDragOver={dragStartHandler}
          onDrop={dropHandler}
          className="drop area"
        >
          Drop your files to upload
        </Typography>
      ) : (
        <Typography
          className="drop empty"
          onDragStart={dragStartHandler}
          onDragLeave={dradLeaveHandler}
          onDragOver={dragStartHandler}
        >
          Drag your files to upload
        </Typography>
      )}
    </Box>
  );
}

export default MyAreaParser;
