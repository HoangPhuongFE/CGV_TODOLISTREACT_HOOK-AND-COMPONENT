import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Grid, CardMedia, Box } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import DescriptionIcon from '@mui/icons-material/Description';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function DetailNews() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    async function fetchFilmDetails() {
      try {
        const response = await fetch(`https://65485c2bdd8ebcd4ab22ca99.mockapi.io/news/${id}`);
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching film details: ", error);
      }
    }

    fetchFilmDetails();
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card sx={{ maxWidth: 1000, mx: 'auto', padding: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              image={news.img}
              alt={news.name}
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography variant="h3" sx={{ mb: 2 }}>CGV NEWS</Typography>
              <Box display="flex" alignItems="center" sx={{ my: 2 }}>
                <BadgeIcon sx={{ mr: 1 }} />
                <Typography variant="h4">{news.name}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <DescriptionIcon sx={{ mr: 1 }} />
                <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                  {news.content}
                </Typography>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
