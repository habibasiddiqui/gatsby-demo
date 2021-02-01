import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core';

function Title({title}) {
    return (
        <div className='title-wrapper'>
            <Grid container  >
                <Grid className='title-div' item sm={10} md={8}>
                    <Typography className='heading' variant='h4' gutterBottom>
                        {title}
                        {/* Recent Works */}
                        <Typography variant='subtitle1'>
                            An optional subtitle of the section
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Title
