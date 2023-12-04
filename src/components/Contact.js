import React from 'react';
import { Container, Typography, TextField, Select, MenuItem, Button, Box } from '@mui/material';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container sx={{ px: 15, pt: 15 }}>
      <Typography variant="h3" component="h3">Contact us</Typography>

      <form onSubmit={handleSubmit}>
        <TextField id="your-name" label="Your Name" fullWidth />
        <TextField id="your-phone" label="Your Phone" fullWidth />
        <TextField id="email" label="Email" fullWidth />
        <Select id="favorite-nation" fullWidth>
          <MenuItem disabled value="">
            Choose your favorite nation
          </MenuItem>
          <MenuItem value="1">USA</MenuItem>
          <MenuItem value="2">Vietnam</MenuItem>
          <MenuItem value="3">Korea</MenuItem>
          <MenuItem value="4">Japan</MenuItem>
        </Select>
        <TextField
          id="your-context"
          label="Your context"
          multiline
          rows={4}
          fullWidth
        />
        <Box mt={2}>
          <Button variant="contained" type="submit">Submit</Button>
        </Box>
      </form>
    </Container>
  );
}
