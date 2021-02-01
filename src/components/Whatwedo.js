import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

function Whatwedo() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                    <div className="service-paper" >
                        <h2 className="service-num">1.</h2>
                        <h2  className="service-name">Service Title</h2>
                        <p  className="service-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec nisl ligula, cursus id molestie vel, maximus aliquet risus. 
                            Vivamus in nibh fringilla, fringilla.</p>
                    
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <div className="service-paper" >
                        <h2 className="service-num">2.</h2>
                        <h2  className="service-name">Service Title</h2>
                        <p  className="service-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec nisl ligula, cursus id molestie vel, maximus aliquet risus. 
                            Vivamus in nibh fringilla, fringilla.</p>
                    
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <div className="service-paper" >
                        <h2 className="service-num">3.</h2>
                        <h2  className="service-name">Service Title</h2>
                        <p  className="service-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec nisl ligula, cursus id molestie vel, maximus aliquet risus. 
                            Vivamus in nibh fringilla, fringilla.</p>
                    
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <div className="service-paper" >
                        <h2 className="service-num">4.</h2>
                        <h2  className="service-name">Service Title</h2>
                        <p  className="service-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec nisl ligula, cursus id molestie vel, maximus aliquet risus. 
                            Vivamus in nibh fringilla, fringilla.</p>
                    
                    </div>
                </Grid>
            </Grid>
            

        </div>
    )
}

export default Whatwedo
