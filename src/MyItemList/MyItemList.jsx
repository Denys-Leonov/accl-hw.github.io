import React from 'react';
import { Container, Box, Divider } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './MyItemList.css';

function MyItemList({ dataArr }) {
  const styleObj = {
    accordion: { backgroundColor: 'rgba(240, 240, 13, 0.312)', m: '3px 0' },
    typographySummary: {
      display: 'flex',
      justifyContent: 'space-between',
      flexGrow: '1',
      paddingRight: '5px',
      alignItems: 'center',
    },
    idSection: { flex: '0 0 15%' },
    summarySection: { margin: '0 5px', flex: '1 1 auto' },
    assigneeSectionHide: {
      flex: '0 0 20%',
      display: { xs: 'none', sm: 'none', md: 'block' },
    },
    assigneeSectionShow: { display: { xs: 'block', sm: 'block', md: 'none' } },
    divider: { m: '5px 0' },
  };

  return (
    <Container>
      <Box>
        {dataArr.map((item) => (
          <Accordion disableGutters key={item['uuid']} sx={styleObj.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={styleObj.typographySummary}>
                <Typography component='span' sx={styleObj.idSection}>ID: {item['Issue key']}</Typography>
                <Typography component='span' sx={styleObj.summarySection}>
                  Summary: {item.Summary}
                </Typography>
                <Typography component='span' sx={styleObj.assigneeSectionHide}>
                  Assignee: {item.Assignee}
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Description: {item.Description}</Typography>
              <Divider sx={styleObj.divider} />
              <Typography>Issue type: {item['Issue Type']}</Typography>  
              <Divider sx={styleObj.divider} />
              <Typography>Creator: {item.Creator}</Typography>
              <Divider sx={styleObj.divider} />
              <Typography>Created: {item.Created}</Typography>
              <Divider sx={[styleObj.divider, styleObj.assigneeSectionShow]} />
              <Typography sx={styleObj.assigneeSectionShow}>
                Assignee: {item.Assignee}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default MyItemList;
