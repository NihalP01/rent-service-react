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
    },

    gridImage: {
        display: 'flex',
        justifyContent: 'center',
    },
})

const BannerSection = ({ purpose, title1, title2, buttonText, linkName, imageUrl }) => {

    const classes = useClasses();

    return (
        <Box className={classes.root}>
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item>
                    <Commons.Banner
                        component="img"
                        image={imageUrl}
                        alt="banner"
                    />
                </Grid>
                <Grid item>
                    <Typography variant="h5" fontWeight="bold">{purpose}</Typography>
                    <Typography gutterBottom>{title1} <br /> {title2}</Typography>
                    <Button variant="contained" href={linkName}>{buttonText}</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

const ImageSection = ({ imageUrl, price, amenities, houseDesc }) => {
    const classes = useClasses();

    return (
        <Box className={classes.imageBox}>
            <Grid container spacing={2} className={classes.gridImage}>
                    <Grid item>
                        <Commons.HouseProperties
                            component="img"
                            alt="house images"
                            image={imageUrl}
                        />
                        <Typography fontWeight='bold' fontSize="18px" mt={1}>INR {price}</Typography>
                        <Typography>{amenities}</Typography>
                        <Typography>{houseDesc}</Typography>
                    </Grid> 
            </Grid>
        </Box>
    )
}

export default function BannerSec() {

    const [test, setTest] = useState([])

    const fetchUrl = '/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6'

    useEffect(() => {
        async function fetchData() {
            const request = await apis(fetchUrl)
            setTest(request?.hits)
            console.log(request?.hits)
            return request;
        }
        fetchData()
    }, [fetchUrl])


    return (
        <Box>
            <BannerSection
                purpose="Rent a home"
                title1="Rental home for"
                title2="Everyone"
                buttonText="Explore Renting"
                linkName="/search?purpose=for-rent"
                imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/269100537.jpg?k=e58a7b1ab96fa381522000c0aa8d04b4c0e6f9a097c91bffa14fe93f667a28b3&o=&hp=1"
            />
            {test.map(test => (
                <ImageSection
                    imageUrl={test.coverPhoto.url}
                    price="4000"
                    amenities="wifi | toilet | Parking"
                    houseDesc={test.title}
                />
            ))}


            <BannerSection
                purpose="Buy a home"
                title1="Buy home at"
                title2="best price"
                buttonText="Explore Buying"
                linkName="/search?purpose=for-rent"
                imageUrl="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
            />

            <ImageSection
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
                price="5000"
                amenities="wifi | toilet | food"
                houseDesc="description of the house"
            />

        </Box>
    )
}
