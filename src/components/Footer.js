import React from 'react'
import { Grid } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';

function Footer() {
    return (
        <div className='footer'>
            <Grid container spacing={3} justify='center' >
                <Grid item sm={12} md={9} className='footer-text'>
                    &copy; Stackbit. All rights reserved. This Jamstack site was taken from 
                    <a href='#' className='link' >Stackbit</a> . 
                    Create yours <a href='#' className='link'>now</a>
                </Grid>

                <Grid item sm={12} md={3} className='footer-icons'>
                    <TwitterIcon className='icons'/>
                    <InstagramIcon className='icons' />
                    <LinkedInIcon className='icons' />
                    <LanguageIcon className='icons' />
                </Grid>
            </Grid>


        </div>
    )
}

export default Footer
