import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box, Button, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TopicIcon from '@mui/icons-material/Topic';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

export default function News() {
    const navigate = useNavigate();
    const itemsPerPage = 6;
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1);
    const [noOfPages, setNoOfPages] = useState(0);

    useEffect(() => {
        async function fetchFilms() {
            const response = await fetch('https://65485c2bdd8ebcd4ab22ca99.mockapi.io/news');
            const data = await response.json();
            setFilms(data);
            setNoOfPages(Math.ceil(data.length / itemsPerPage));
        }
        fetchFilms();
    }, []);

    const handleRedirect = (id) => {
        navigate(`/detailnews/${id}`);
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    // Get the films to be displayed on the current page
    const filmsToShow = films.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <>
            <Grid container spacing={5} sx={{ px: 15, pt: 15 }}>
                {
                    filmsToShow.map(film => (
                        <Grid item xs={12} sm={6} md={4} key={film.id}>
                            <Card sx={{ height: '460px' }}>
                                <CardMedia
                                    component='img'
                                    image={film.img}
                                    height='300'
                                />
                                <CardContent>
                                   
                                    <Box display="flex" alignItems="center">
                                        <BubbleChartIcon sx={{ margin: "10px 20px" }} />
                                        <Typography>{film.name}</Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="flex-end">
                                        <Button onClick={() => handleRedirect(film.id)}>Detail</Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
            {/* Pagination control */}
            <Box display="flex" justifyContent="center" my={3}>
                <Pagination
                    count={noOfPages}
                    page={page}
                    onChange={handleChangePage}
                    defaultPage={1}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                />
            </Box>
        </>
    );
}
