import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';

const useStyles = makeStyles({
    root: {
        "& .MuiInputBase-root.Mui-disabled ": {
            color: "black",
            fontWeight: "600",
        },
    },
});

const SearchBar = (props) => {
    const classes = useStyles();
    const { name, label, value, variant, onChange, InputProps, InputLabelProps, type, ...others } =
        props;

    return (
        <TextField
            className={classes.root}
            variant={variant ? variant : "outlined"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            InputProps={InputProps}
            {...others}
        />
    );
}

export default SearchBar;