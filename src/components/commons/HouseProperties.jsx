import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import millify from 'millify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faThLarge } from '@fortawesome/free-solid-svg-icons'


const useClasses = makeStyles({
    root: {
        maxWidth: '33rem',
        height: 'auto',
    },

    imageCard: {
        //
    }
})

const HouseProperties = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => {
    
    const classes = useClasses();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.imageCard}
                component="img"
                height="200px"
                image={coverPhoto.url}
                alt="house images"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    INR {millify(price)}{rentFrequency && `/${rentFrequency}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {rooms} <FontAwesomeIcon icon={faBed} /> | {baths} <FontAwesomeIcon icon={faBath} /> | {millify(area)} sqft <FontAwesomeIcon icon={faThLarge} />
                </Typography>
                <Typography mt={1} variant="body2" fontWeight='bold' color="text.secondary">
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default HouseProperties;