import React from "react";
import { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Pagination } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useNavigate } from 'react-router-dom';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import TopicIcon from '@mui/icons-material/Topic';

export default function FilmsPresentation() {
    const navigate = useNavigate();
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Số lượng sản phẩm trên mỗi trang

    useEffect(() => {
        async function fetchFilms() {
            const response = await fetch('https://6542bb1901b5e279de1f7e54.mockapi.io/CGV');
            const data = await response.json();
            setFilms(data);
        }

        fetchFilms();
    }, []);

    const handleRedirect = (id) => {
        navigate(`/detail/${id}`);
    };

    // Tính số thứ tự bắt đầu cho các sản phẩm trên trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = films.slice(indexOfFirstItem, indexOfLastItem);
    const pageCount = Math.ceil(films.length / itemsPerPage);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Grid container spacing={5} sx={{ px: 15, pt: 15 }}>
            {currentItems.map((film, index) => {
                // Tính số thứ tự cho mỗi sản phẩm
                const itemNumber = indexOfFirstItem + index + 1;
                return (
                    <Grid item xs={12} sm={6} md={4} key={film.id}>
                        <Card sx={{ height: '420px' }}>
                            <CardMedia
                                component='img'
                                image={film.poster}
                                height='300'
                            />
                            <CardContent>
                                <Box display="flex" alignItems="center">
                                    <Typography sx={{ width: '30px' }}>{itemNumber}.</Typography>
                                    <CallMissedOutgoingIcon sx={{ margin: "0 20px" }} />
                                    <Typography>{film.name}</Typography>
                                    <DragHandleIcon 
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => handleRedirect(film.id)}
                                    />
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <TopicIcon sx={{margin: '20px'}}/>
                                    <Typography>{film.category}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
            <Grid item xs={12} container justifyContent="center" sx={{ pt: 4 }}>
                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handleChangePage}
                    color="primary"
                />
            </Grid>
        </Grid>
    );
}
