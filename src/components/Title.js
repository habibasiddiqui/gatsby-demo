import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core';

function Title({title}) {
    return (
        <div>
            {/* <Grid container > */}
                {/* <Grid item sm={1} md={1}></Grid> */}
                {/* <Grid className='title-div' item sm={10} md={9}> */}
                    <Typography className='heading' variant='h4' gutterBottom>
                        {title}
                        <Typography variant='subtitle1'>
                            An optional subtitle of the section
                        </Typography>
                    </Typography>
                {/* </Grid>
            </Grid> */}
            
        </div>
    )
}

export default Title
