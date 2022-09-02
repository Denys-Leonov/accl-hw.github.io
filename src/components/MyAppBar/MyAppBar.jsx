import React from 'react';
import { useEffect, useState } from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import MyAreaParser from '../MyAreaParser/MyAreaParser';
import MyButtonParser from '../MyButtonParser/MyButtonParser';
import './MyAppBar.css'


const MyAppBar = ({ dataArr, setDataArr }) => {
  const packLength = 20;
  
  const [fullArr, setFullArr] = useState([]);
  const [fileName, setFileName] = useState('');

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
      // ------- тут може проскакувати помилка, коли масив dataArr не встиг оновитись
      // console.log('dataArr: ', dataArr);
      // console.log('fullArr: ', fullArr);

      setDataArr([...dataArr, ...fullArr.splice(0, packLength)]);
      setFullArr([...fullArr]);

      //-------костиль, помилка якщо проскакує то дія відбувається ще раз
      // setDataArr([
      //   ...dataArr,
      //   ...fullArr.slice(dataArr.length, dataArr.length + packLength),
      // ]);
    }
  }

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters>
          <MyButtonParser
            setDataArr={setDataArr}
            setFileName={setFileName}
            setFullArr={setFullArr}
            packLength={packLength}
          />

          <MyAreaParser
            packLength={packLength}
            setDataArr={setDataArr}
            setFullArr={setFullArr}
            setFileName={setFileName}
          />

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
