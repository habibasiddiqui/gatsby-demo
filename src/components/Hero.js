import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core';

function Hero() {
    return (
        <div className='wrapper'>
            <Grid container spacing={3}>
                <Grid item sm={1} md={2}></Grid>
                
                <Grid item sm={10} md={9} >
                    <Typography variant='h3' className='home-title' gutterBottom>
                        Hi, I'm Stackbit Exto Portfolio Theme.
                        <Typography variant='subtitle1'>
                        This section can contain a subtitle or tagline. 
                        The recommended length is one to three sentences, 
                        but can be changed as you prefer.
                    </Typography>
                    </Typography>
                    <Button variant='outlined' className='button'>Let's Talk</Button>

                </Grid>

                <Grid item sm={1} md={1}></Grid>
            </Grid>
            
        </div>
    )
}

export default Hero
