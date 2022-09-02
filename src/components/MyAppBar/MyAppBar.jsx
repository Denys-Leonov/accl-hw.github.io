import React from 'react';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import CSVReader from 'react-csv-reader';
import { AppBar, Container, Toolbar, Button } from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    margin: '0 -24px',
  },
}));

const MyAppBar = ({ dataArr, setDataArr }) => {
  const packLength = 20;

  const classes = useStyles();
  const [fullArr, setFullArr] = useState([]);

  const [fileName, setFileName] = useState('');
  const [drag, setDrag] = useState(false);

  function handleCSV(data, info) {
    document.documentElement.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    const firstPackage = data.splice(0,packLength)
    setFullArr(data);
    setDataArr(firstPackage);
    // setDataArr(data.slice(0, packLength));
    setFileName(info['name']);
  }
  
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return function () {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  function handleScroll() {
    const SCROLL_VAR =
      document.documentElement.scrollHeight -
      document.documentElement.scrollTop -
      window.innerHeight;

    if (SCROLL_VAR < 100) {
      // ------- перша реалізація, проскакує помилка, коли масив dataArr не встиг оновитись
      console.log('dataArr: ', dataArr)
      console.log('fullArr: ', fullArr)
      // setDataArr([...dataArr, ...fullArr.splice(0, 20)])
      // setFullArr([...fullArr])

      
      
      //-------друга реалізація, помилка якщо проскакує то дія відбувається ще раз

      setDataArr([
        ...dataArr,
        ...fullArr.slice(dataArr.length, dataArr.length + packLength),
      ]);
    }
  }

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
        setFullArr(results.data);
        setDataArr(results.data.slice(0, packLength));
      },
    });
    setFileName(e.dataTransfer.files[0].name);
    setDrag(false);
  }

  return (
    <AppBar position="fixed" color="primary">
      <Container>
        <Toolbar className={classes.toolbar}>
          <Button variant="contained" color="success" component="label">
            <CSVReader onFileLoaded={handleCSV} parserOptions={parseOptions} />
            Click to upload files
          </Button>

          {drag ? (
            <div
              onDragStart={dragStartHandler}
              onDragLeave={dradLeaveHandler}
              onDragOver={dragStartHandler}
              onDrop={dropHandler}
              className="drop area"
            >
              Drop your files to upload
            </div>
          ) : (
            <div
              className="drop empty"
              onDragStart={dragStartHandler}
              onDragLeave={dradLeaveHandler}
              onDragOver={dragStartHandler}
            >
              Drag your files to upload
            </div>
          )}
          {fileName && (
            <div className="fileName">
              <FileOpenIcon />
              <span>{fileName}</span>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyAppBar;
