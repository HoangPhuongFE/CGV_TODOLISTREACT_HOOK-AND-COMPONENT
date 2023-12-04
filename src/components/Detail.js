import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Grid, CardMedia, Box, Modal, Button } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import DescriptionIcon from '@mui/icons-material/Description';
import GradeIcon from '@mui/icons-material/Grade';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Youtube from './Youtube';
import CloseIcon from '@mui/icons-material/Close';

export default function Detail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    async function fetchFilmDetails() {
      try {
        // api film 
        const response = await fetch(`https://6542bb1901b5e279de1f7e54.mockapi.io/CGV/${id}`);
        const data = await response.json();
        setFilm(data);
        setVideoUrl(data.clip);
      } catch (error) {
        console.error("Error fetching film details: ", error);
      }
    }

    fetchFilmDetails();
  }, [id]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  if (!film) {
    return <div>Loading...</div>;
  }

  return (

    <Card sx={{ px: 15, pt: 15 }}>
      <Grid container spacing={2}>

        {/* Image and YouTubeIcon on the Right */}
        <Grid item xs={6} sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CardMedia
              component="img"
              image={film.poster}
              alt={film.name}
              sx={{ height: '50', width: '50', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)', objectFit: 'cover' }}
            />
          <YouTubeIcon onClick={handleOpen}
                    sx={{
                        color: "red",
                        border: "1px solid red",
                        borderRadius: '50%',
                        height: "50px",
                        width: '50px',
                        position: "absolute",
                        bottom: '0', // Set the bottom to 0
                        left: '50%',
                        transform: 'translate(-50%, 50%)', // Adjust the vertical translate to 50%
                    }}
                />
          </Box>
        </Grid>

        {/* Name, Intro, and Rating on the Left */}
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', padding: '2rem' }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <BadgeIcon />
                <Typography variant='h4' sx={{ px: 3 }}>Name: {film.name}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <DescriptionIcon />
                <Typography variant='body1' sx={{ textAlign: 'justify', px: 3 }} >Intro: {film.intro}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <GradeIcon />
                <Typography variant='body2' sx={{ px: 3 }}>Đánh giá: {film.IMDb}</Typography>
              </Box>
            </CardContent>
          </Box>
        </Grid>

      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
            maxWidth: '80%',
            maxHeight: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Youtube videoUrl={videoUrl} />
          <Button
            sx={{
              position: 'absolute',
              top: '5px',
              right: '5px',
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
        </Box>
      </Modal>
    </Card>

  );
}
