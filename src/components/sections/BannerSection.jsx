import React from 'react';
import { makeStyles } from '@mui/styles';
import { Commons } from '../commons/Commons';
import { Box, Typography, Grid, Button } from '@mui/material';
import { apis } from '../../network/apis';
import { useState, useEffect } from 'react';
import millify from 'millify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faThLarge } from '@fortawesome/free-solid-svg-icons'

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
    test: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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

const ImageSection = ({ }) => {
    const classes = useClasses();

    const [test, setTest] = useState([])

    const fetchUrl = '/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8'

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
        <Box className={classes.imageBox}>
            <Grid container spacing={3} className={classes.gridImage}>
                {test.map((test) => (
                    <Grid item key={test.id}>
                        <Commons.HouseProperties
                            component="img"
                            alt="house images"
                            image={test.coverPhoto.url}
                        />
                        <Typography mt={2} fontWeight="bold" fontSize="18px">{test.title.length > 30 ? `${test.title.substring(0, 30)}...` : test.title}</Typography>
                        <Typography>{test.rooms} <FontAwesomeIcon icon={faBed} /> | {test.baths} <FontAwesomeIcon icon={faBath} /> | {millify(test.area)} sqft <FontAwesomeIcon icon={faThLarge} /> </Typography>
                        <Typography fontWeight='bold' mt={1}>INR {millify(test.price)}{test.rentFrequency && `/${test.rentFrequency}`}</Typography>

                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default function BannerSec() {

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

            <ImageSection />

            <BannerSection
                purpose="Buy a home"
                title1="Buy home at"
                title2="best price"
                buttonText="Explore Buying"
                linkName="/search?purpose=for-rent"
                imageUrl="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
            />

            {/* <ImageSection
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
                price="5000"
                amenities="wifi | toilet | food"
                houseDesc="description of the house"
            /> */}

        </Box>
    )
}