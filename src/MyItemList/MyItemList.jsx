import React from 'react';
import { Container, Box, Divider } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './MyItemList.css'

function MyItemList({ dataArr }) {
  const styleObj = {
    accordion: { backgroundColor: 'rgba(240, 240, 13, 0.312)', m: '3px 0' },
    typography: {
      display: 'flex',
      justifyContent: 'space-between',
      flexGrow: '1',
      paddingRight: '5px',
      alignItems: 'center',
    },
    idSection: { flex: '0 0 15%' },
    summarySection: { margin: '0 5px', flex: '1 1 auto' },
    assigneeSectionHide: { flex: '0 0 20%', display: {xs: 'none', sm: 'none', md: 'block'} },
    assigneeSectionShow: { display: {xs: 'block', sm: 'block', md: 'none'} },
    divider: { m: '5px 0'}
  };

  return (
    <Container>
      <Box>
        {dataArr.map((item) => (
          <Accordion disableGutters key={item['uuid']} sx={styleObj.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={styleObj.typography}>
                <span style={styleObj.idSection}>ID: {item['Issue key']}</span>
                <span style={styleObj.summarySection} >
                  Summary: {item.Summary}
                </span>
                {/* <span style={styleObj.assigneeSection} className='assigneeHide'> */}
                <Typography sx={styleObj.assigneeSectionHide} >
                  Assignee: {item.Assignee}
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Summary: {item.Summary}</Typography>
              
              <Typography sx={styleObj.assigneeSectionShow}><Divider sx={styleObj.divider}/>Assignee: {item.Assignee}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default MyItemList;
