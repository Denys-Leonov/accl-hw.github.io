import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Highest from '../../Icons/highest.svg';
import High from '../../Icons/high.svg';
import Medium from '../../Icons/medium.svg';
import Low from '../../Icons/low.svg';
import Lowest from '../../Icons/lowest.svg';

function MyDetails({ item }) {
  const priority = {
    Highest,
    High,
    Medium,
    Low,
    Lowest,
  };

  const tasks = {
    Story: (
      <svg width="96" height="96" viewBox="0 0 24 24" role="presentation">
        <path
          fill="#36B37E"
          d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm12.647 19.515l1.29-1.528L12 13.82l-4.939 4.167c-.022.018-.061.005-.061.166V6.688C7 6.348 7.412 6 8 6h8c.587 0 1 .349 1 .688v11.465c0-.162-.04-.147-.063-.166l-1.29 1.528C16.885 20.56 19 19.821 19 18.153V6.688C19 5.162 17.623 4 16 4H8C6.376 4 5 5.161 5 6.688v11.465c0 1.668 2.113 2.407 3.351 1.362L12 16.437l3.647 3.078z"
        ></path>
      </svg>
    ),
    Bug: (
      <svg width="96" height="96" viewBox="0 0 24 24" role="presentation">
        <path
          fill="#FF5630"
          // fillRule="evenodd"
          d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9 17a5 5 0 100-10 5 5 0 000 10z"
        ></path>
      </svg>
    ),
    Task: (
      <svg width="96" height="96" viewBox="0 0 24 24" role="presentation">
        <path
          fill="#2684FF"
          // fillRule="evenodd"
          d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm3 4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6zm0 2v12h12V6H6z"
        ></path>
      </svg>
    ),
    Epic: (
      <svg width="96" height="96" viewBox="0 0 24 24" role="presentation">
        <path
          fill="#6554C0"
          // fillRule="evenodd"
          d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm15.188 9.4h-3.063V4.8a1.807 1.807 0 00-3.16-1.192l-.197.21c-.095.114-.095.114-.324.397a678.151 678.151 0 00-2.976 3.699l-.093.117C5.188 12.03 5 12.274 5 12.8c0 1.01.819 1.599 1.77 1.76l.168.014h2.937V19.2c0 .997.815 1.8 1.813 1.8.43 0 .963-.236 1.52-.793l.073-.083.28-.35a1306.403 1306.403 0 002.973-3.744l.049-.061a403.17 403.17 0 002.21-2.815c.315-.407.562-.729.734-.96.095-.127.169-.229.223-.306.042-.062.042-.062.085-.13.05-.046.05-.046.165-.558 0-.997-.815-1.8-1.813-1.8zm-5.063 2V5.317a357.977 357.977 0 00-.863 1.066 626.68 626.68 0 00-2.23 2.778l-.047.058-.046.059c-1.573 1.973-2.217 2.788-2.596 3.296h4.532v6.106l.122-.154a1304.666 1304.666 0 002.969-3.736l.048-.061A400.017 400.017 0 0017.62 11.4h-4.495z"
        ></path>
      </svg>
    ),
    'Test Execution': (
      <svg width="96" height="96" viewBox="0 0 24 24" role="presentation">
        <path
          fill="#FFAB00"
          // fillRule="evenodd"
          d="M16.587 15H5a1 1 0 000 2h11.591l-1.298 1.296a1.001 1.001 0 001.414 1.416l3.005-3.001a1.002 1.002 0 000-1.415l-3.005-3.003a.999.999 0 10-1.414 1.414L16.587 15zM7.418 7l1.294-1.293a.999.999 0 10-1.414-1.414L4.293 7.296a1 1 0 000 1.415l3.005 3a1 1 0 001.414-1.415L7.414 9H19a1 1 0 000-2H7.418zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"
        ></path>
      </svg>
    ),
    Test: (
      <svg width="96" height="96" viewBox="0 0 24 24" role="presentation">
        <path
          fill="#6554C0"
          // fillRule="evenodd"
          d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm5.583 7.002l-4.29 4.287a1 1 0 000 1.415l4.291 4.285a.999.999 0 001.414-.002 1.002 1.002 0 00-.001-1.414l-3.582-3.576 3.582-3.58a1.002 1.002 0 00-.707-1.708.993.993 0 00-.707.293zm5.41-.013a.999.999 0 00.002 1.413l3.59 3.587-3.59 3.588a1.001 1.001 0 001.414 1.415l4.298-4.296a1 1 0 000-1.415l-4.3-4.293a.994.994 0 00-1.414.001z"
        ></path>
      </svg>
    ),
    'Automation Test': (
      <svg width="96" height="96" viewBox="0 0 24 24" role="presentation">
        <path
          fill="#FF5630"
          // fillRule="evenodd"
          d="M8.829 12l-.906 3h8.154l-.906-3H8.83zm.604-2h5.134l-1.61-5.332a1 1 0 00-1.914 0L9.433 10zM17 17H6a1 1 0 00-1 1v2h14v-2a1 1 0 00-1-1h-1zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"
        ></path>
      </svg>
    ),
  };

  const styleObj = {
    assigneeSectionShow: { display: { xs: 'block', md: 'none' } },
    gridImg: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <AccordionDetails>
      <Grid container spacing={1}>
        <Grid xs={12} sm={2} sx={styleObj.gridImg}>
          {tasks[item['Issue Type']]}
        </Grid>
        <Grid xs={12} sm={10}>
          <Grid container spacing={0}>
            <Grid xs={12} sm={12} md={12}>
              <Typography>
                <strong>Description:</strong> {item.Description}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography>
                <strong>Issue type:</strong> {item['Issue Type']}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography>
                <strong> Priority:</strong> {item.Priority}
                <img
                  style={{ marginLeft: '5px' }}
                  src={priority[item.Priority]}
                  alt={item.Priority}
                  width="20px"
                  height="20px"
                />
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography>
                <strong>Creator:</strong> {item.Creator}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography>
                <strong>Created:</strong> {item.Created}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography sx={styleObj.assigneeSectionShow}>
                <strong>Assignee:</strong> {item.Assignee}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AccordionDetails>
  );
}

export default MyDetails;
