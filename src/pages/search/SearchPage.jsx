import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Grid, Button } from '@mui/material';
import SearchFilter from '../../components/SearchFilter';


const useStyle = makeStyles({
    root: {
        margin: '1rem',
    },

    heading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const SearchPage = () => {
    const classes = useStyle();

    return (
        <Box className={classes.root}>
            <Box className={classes.heading}>
                <Typography fontWeight="bold" fontSize="1.5rem">Search by filters</Typography>
            </Box>
            <Box mt={2} style={{ display: 'flex', justifyContent: 'center'}}>
                <SearchFilter />
            </Box>
        </Box>
    )
}

export default SearchPage;