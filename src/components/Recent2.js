import React from 'react';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/7.jpg';
import { Grid } from '@material-ui/core';

function Recent2() {
    const tileData = [
        {
            img: one,
            title: 'Project Title 1',
        },
        {
            img: two,
            title: 'Project Title 2',
        },
        {
            img: three,
            title: 'Project Title 3',
        },
        {
            img: four,
            title: 'Project Title 4',
        },
        {
            img: five,
            title: 'Project Title 5',
        },
        {
            img: six,
            title: 'Project Title 6',
        }
        
    ]

    return (
        <div>
        <Grid container spacing={3}>
            <Grid item sm={2} md={2}></Grid>

            <Grid item sm={8} md={8} >
                <Grid conatiner spacing={3} cols={3}>
                    
                </Grid>
            </Grid>

            <Grid item sm={2} md={2}></Grid>
        </Grid>
        </div>

    )
}