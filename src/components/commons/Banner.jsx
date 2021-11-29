import React from 'react';
import { makeStyles } from "@mui/styles";
import { Card, CardMedia } from "@mui/material";

const useClasses = makeStyles({
    root: {
        width: '25rem',
        height: 'auto',
    },

    banner: {
            //
    }
})

const Banner = (props) => {
    const classes = useClasses();
    const { component, image, alt, ...others } = props;
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.banner}
                component={component}
                image={image}
                alt={alt}
                {...others}
            />
        </Card>
    )
}

export default Banner;