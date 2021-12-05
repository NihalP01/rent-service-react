import React from 'react';
import { makeStyles } from '@mui/styles';
import { Commons } from '../commons/Commons';
import { Box, Typography, Grid, Button } from '@mui/material';
import { apis } from '../../network/apis';
import { useState, useEffect } from 'react';
import HouseProperties from "../commons/HouseProperties"
import { Link } from "react-router-dom";

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

    test: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
                    <Button variant="contained" href='/search-property'>{buttonText}</Button>
                </Grid>
            </Grid>
        </Box>
    )
}


const BannerSec = () => {
    const classes = useClasses();

    const [data, setData] = useState([])

    const [property, setProperty] = useState([])

    const propertyForRent = '/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10'
    const propertyForSale = '/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10'

    useEffect(() => {
        async function fetchData() {
            const request = await apis(propertyForRent)
            setData(request?.hits)
            return request;
        }
        fetchData()
    }, [propertyForRent])

    useEffect(() => {
        async function fetchData() {
            const request = await apis(propertyForSale)
            setProperty(request?.hits)
            return request;
        }
        fetchData()
    }, [propertyForSale])


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

            <Box m="2rem">
                <Grid container spacing={2} className={classes.gridImage}>
                    {data.map((property) => (
                        <Grid item key={property.id}>
                            <HouseProperties property={property} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <BannerSection
                purpose="Buy a home"
                title1="Buy home at"
                title2="best price"
                buttonText="Explore Buying"
                linkName="/search?purpose=for-rent"
                imageUrl="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
            />

            <Box m="2rem">
                <Grid container spacing={2} className={classes.gridImage}>
                    {property.map((property) => (
                        <Grid item key={property.id}>
                            <HouseProperties property={property} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default BannerSec;