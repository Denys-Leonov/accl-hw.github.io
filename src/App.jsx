import './App.css';
import MyAppBar from './components/MyAppBar/MyAppBar';
import { useState } from 'react';

import { Container, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  const [dataArr, setDataArr] = useState([]);

  return (
    <div className="App">
      <MyAppBar dataArr={dataArr} setDataArr={setDataArr} />
      <Container>
        <Box sx={{ height: '100vh', paddingTop: '65px' }}>
          <ul>
            {dataArr.map((item) => (
              <li
                key={item['uuid']}
                style={{ margin: '5px 0' }}
                onClick={() => console.log('Click on: ', item['Issue key'])}
              >
                <Accordion sx={{ backgroundColor: 'aliceblue' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        paddingRight: '5px',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ flex: '0 0 15%' }}>
                        ID: {item['Issue key']}
                      </span>
                      <span style={{ margin: '0 5px', flex: '1 1 auto' }}>
                        Summary: {item.Summary}
                      </span>
                      <span style={{ flex: '0 0 20%' }}>
                        Assignee: {item.Assignee}
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Summary: {item.Summary}</Typography>
                  </AccordionDetails>
                </Accordion>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </div>
  );
}

export default App;
