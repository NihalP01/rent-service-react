import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardMedia } from '@mui/material';

const useClasses = makeStyles({
    root: {
        maxWidth: '23rem',
        height: '14rem',
    },

    imageCard: {
        //
    }
})

const HouseProperties = (props) => {
    const classes = useClasses();
    const { component, image, alt, ...others } = props;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.imageCard}
                component={component}
                image={image}
                alt={alt}
                {...others}
            />
        </Card>
    )
}

export default HouseProperties;