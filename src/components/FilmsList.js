import React from "react";
import { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FilmsList() {
    const [films, setFilms] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchFilms() {
            const response = await fetch('https://6542bb1901b5e279de1f7e54.mockapi.io/CGV');
            const data = await response.json();
            setFilms(data);
        }

        fetchFilms();
    }, []);

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);

    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://6542bb1901b5e279de1f7e54.mockapi.io/CGV/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setFilms(prevFilms => prevFilms.filter(film => film.id !== id));
            } else {
                console.log('Failed to delete film');
            }
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <Grid container spacing={5} sx={{ px: 15, pt: 15 }}>
            <Grid><Typography sx={{ fontSize: '50px' }}>CGV</Typography></Grid>
            <Table>
                <TableHead sx={{ backgroundColor: 'blue' }}>
                    <TableRow >
                        <TableCell align="center" sx={{ color: 'white' }}>ID</TableCell>
                        <TableCell align="center" sx={{ color: 'white' }}>Name</TableCell>
                        <TableCell align="center" sx={{ color: 'white' }}>IMDb</TableCell>

                        <TableCell align="center" sx={{ color: 'white' }}>Category</TableCell>
                        <TableCell align="center" sx={{ color: 'white' }}>Director</TableCell>
                        <TableCell align="center" sx={{ color: 'white' }}>Perfomer</TableCell>


                        <TableCell align="center" sx={{ color: 'white' }}>Nation</TableCell>

                        <TableCell align="center" sx={{ color: 'white' }}>Actions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {films.map(film => (
                        <TableRow key={film.id}>
                            <TableCell>{film.id}</TableCell>
                            <TableCell>{film.name}</TableCell>
                            <TableCell>{film.IMDb}</TableCell>

                            <TableCell>{film.category}</TableCell>
                            <TableCell>{film.director}</TableCell>
                            <TableCell>{film.performer}</TableCell>
                            <TableCell>{film.nation}</TableCell>






                            <TableCell align="right">
                                <Button onClick={() => handleEdit(film.id)}>Edit</Button>
                                <Button onClick={() => handleDelete(film.id)}>Delete</Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Grid item xs={12} container justifyContent="center">
                <Button variant="contained" sx={{ margin: '15px' }} onClick={() => navigate('/add')}>
                    Add New Film
                </Button>
            </Grid>
        </Grid>
    )
}
export default FilmsList;