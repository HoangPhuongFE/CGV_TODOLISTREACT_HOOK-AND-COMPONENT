import React from 'react';
import { Container, Typography, Select, MenuItem, TextField, Icon } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ px: 15, pt: 15 }}>
      <Typography variant="h3" component="h3">About</Typography>

      <Select
        icon={<Icon>people</Icon>}
        id="the-film"
        fullWidth
      >
        <MenuItem disabled value="">
          THE FILM
        </MenuItem>
        <MenuItem value="1">
          Doraemon
        </MenuItem>
        <MenuItem value="2">
          Goku        </MenuItem>
        <MenuItem value="3">
          Batman        </MenuItem>
      </Select>

      <TextField label="See Films" fullWidth />

      <Select
        icon={<Icon>place</Icon>}
        id="nation"
        fullWidth
      >
        <MenuItem disabled value="">
          Nation
        </MenuItem>
        <MenuItem value="1">
          USA
        </MenuItem>
        <MenuItem value="2">
          VietNam
        </MenuItem>
        <MenuItem value="1">
          Korea
        </MenuItem>
      </Select>

      <TextField
        icon={<Icon>date_range</Icon>}
        id="daily-times"
        label="Daily Times"
        fullWidth
      />
    </Container>
  );
}
