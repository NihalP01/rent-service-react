import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Grid, Select, MenuItem, TextField, FormControl, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import { filterData, getFilterValues } from '../staticData/filterData';

const useClasses = makeStyles({
    root: {

    },
})

const SearchFilter = () => {
    const classes = useClasses();

    const [filters, setFilters] = useState(filterData)

    const SearchProperties = (filterValues) => {
        console.log(filterValues);
    }

    return (
        <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
            {filters.map((filter) => (
                <Grid item m={1} md={2} key={filter.queryName}>
                    <FormControl fullWidth>
                        <Typography gutterBottom>{filter.placeholder}</Typography>
                        <TextField
                            id="outlined-select-currency"
                            select
                            InputLabelProps={{ shrink: false }}
                            sx={{ boxShadow: "0px 0px 6px grey", background: "white" }}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            onChange={(e) => SearchProperties({ [filter.queryName]: e.target.value })}
                            variant="outlined"
                            fullWidth
                        >
                            {filter.items.map((item) => (
                                <MenuItem value={item.value} key={item.value}>{item.name}</MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                </Grid>
            ))}
        </Grid>
    )
}

export default SearchFilter;