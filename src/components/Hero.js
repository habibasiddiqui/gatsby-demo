import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core';

function Hero() {
    return (
        <div className='wrapper'>
            <Grid container spacing={3}>
                
                <Grid item sm={10} md={8} >
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
            </Grid>

        </div>   
    )
}

export default Hero
