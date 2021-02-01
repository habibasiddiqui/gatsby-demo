import React from 'react';
import { Grid } from '@material-ui/core';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

function Testimonials() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={12} md={3}>
                    <div>
                        <FormatQuoteRoundedIcon className='quotes' />
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default Testimonials
