import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Story16Icon from '@atlaskit/icon-object/glyph/story/16';
import Bug16Icon from '@atlaskit/icon-object/glyph/bug/16';
import Task16Icon from '@atlaskit/icon-object/glyph/task/16';
import Epic16Icon from '@atlaskit/icon-object/glyph/epic/16';
import Changes16Icon from '@atlaskit/icon-object/glyph/changes/16';
import Code16Icon from '@atlaskit/icon-object/glyph/code/16';
import Incident16Icon from '@atlaskit/icon-object/glyph/incident/16';

function MySummary({ item }) {
  const tasks = {
    Story: <Story16Icon />,
    Bug: <Bug16Icon />,
    Task: <Task16Icon />,
    Epic: <Epic16Icon />,
    'Test Execution': <Changes16Icon />,
    Test: <Code16Icon />,
    'Automation Test': <Incident16Icon />,
  };

  const styleObj = {
    typographySummary: {
      display: 'flex',
      justifyContent: 'space-between',
      flexGrow: '1',
      paddingRight: '5px',
      alignItems: 'center',
    },
    idSection: {
      flex: { sm: '0 0 17%', md: '0 0 9%' },
      whiteSpace: 'nowrap',      
    },
    summarySection: { margin: '0 5px', flex: '1 1 auto' },
    assigneeSectionHide: {
      flex: '0 0 20%',
      display: { xs: 'none', md: 'block' },
    },
  };

  return (
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography sx={styleObj.typographySummary}>
        <Typography component="span" sx={styleObj.idSection}>
          <strong>
            ID:
            {item['Issue key']}
          </strong>
        </Typography>
        <Typography component="span" sx={styleObj.summarySection}>
          {tasks[item['Issue Type']]} <strong>Summary:</strong> {item.Summary}
        </Typography>
        <Typography component="span" sx={styleObj.assigneeSectionHide}>
          <strong>Assignee:</strong> {item.Assignee}
        </Typography>
      </Typography>
    </AccordionSummary>
  );
}

export default MySummary;
