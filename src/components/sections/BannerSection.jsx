import React from 'react';
import { makeStyles } from '@mui/styles';
import { Commons } from '../commons/Commons';
import { Box, Typography, Grid, Button } from '@mui/material';
import { apis } from '../../network/apis';
import { useState, useEffect } from 'react';

const useClasses = makeStyles({
    root: {
        marginTop: '2rem',
        marginBottom: '2rem',
    },

    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    imageBox: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'nowrap',
    },

    gridImage: {
        display: 'flex',
        justifyContent: 'center',
    },

    imageRoot: {
        marginTop: '2rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    }
})

const ImageSection = () => {
    const classes = useClasses();

    const [test, setTest] = useState([])
    const [querry, setQuerry] = useState("")

    const fetchUrl = '/movie/popular'

    useEffect(() => {
        async function fetchData() {
            const request = await apis(fetchUrl)
            setTest(request.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])

    return (
        <Box className={classes.imageBox}>
            <Box width="100%">
                <Grid container mb={4} spacing={2} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Grid item md={4}>
                        <Commons.SearchBar
                            label="Filter by name"
                            name="searchBar"
                            type="search"
                            value={querry}
                            onChange={(e) => setQuerry(e.target.value)}
                            fullWidth
                        />                      
                    </Grid>
                    {/* <Grid item>
                        <Button variant='contained'>Search</Button>
                    </Grid> */}
                </Grid>
            </Box>
            <Grid container spacing={4} className={classes.gridImage}>
                { test.filter(test => {
                    if(querry == ""){
                        return test;
                    }else if(test.title.toLowerCase().includes(querry.toLowerCase())){
                        return test;
                    }
                })
                .map((test) => (
                    <Grid item key={test.id}>
                        <Commons.HouseProperties
                            component="img"
                            alt="movie images"
                            image={`https://image.tmdb.org/t/p/w500/${test.poster_path}`}
                        />
                        <Typography fontWeight='bold' fontSize="18px" mt={1}>{test.title.length > 30 ? `${test.title.substring(8, 30)}...` : test.title}</Typography>
                        <Typography>Release data: {test.release_date}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default function BannerSec() {
    const classes = useClasses();
    return (
        <Box className={classes.imageRoot}>
            <Typography fontWeight="bold" variant="h4" mt={2}>Popular Movies</Typography>
            <ImageSection />
        </Box>
    )
}
