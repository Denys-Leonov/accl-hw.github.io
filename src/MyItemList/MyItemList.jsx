import React from 'react';
import { Container, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import MySummary from '../components/MySummary/MySummary';
import MyDetails from '../components/MyDetails/MyDetails';

function MyItemList({ dataArr }) {
  const styleObj = {
    accordion: { backgroundColor: 'rgba(240, 240, 13, 0.312)', m: '3px 0px' },
  };

  return (
    <Container>
      <Box>
        {dataArr.map((item) => (
          <Accordion disableGutters key={item['uuid']} sx={styleObj.accordion}>
            <MySummary item={item} />
              <MyDetails item={item} />
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default MyItemList;
