import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography } from '@material-ui/core';
import Title from './Title';

function Recent2() {


    const data = useStaticQuery(graphql`
        {
        allContentfulDemo2 {
            edges {
            node {
                image {
                fluid {
                    src
                }
                }
                title
            }
            }
        }
        }
    `);

    console.log('array', data.allContentfulDemo2.edges);
 
    let imgArr = data.allContentfulDemo2.edges;
    console.log(imgArr);

    let imgData = imgArr.map((item) => {
        return { 
            img: item.node.image.fluid.src,
            title: item.node.title
        }
    });
    
    console.log(imgData);
    
    return (
         
                    <Grid container spacing={3} >

                        <Grid item xs={12} sm={7} md={7} className='container'>
                            {/* <div className='container' > */}
                                <img className='recent-img' src={imgData[6].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{imgData[6].title}</h4>
                                </div>
                            {/* </div> */}
                        </Grid> 

                        <Grid item xs={12} sm={5} md={5} className='container'>
                            {/* <div className='container' > */}
                                <img className='recent-img' src={imgData[5].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{imgData[5].title}</h4>
                                </div>
                            {/* </div> */}
                        </Grid> 

                        <Grid item xs={12} sm={5} md={5}  >
                            <div className='container' >
                                <img className='recent-img' src={imgData[4].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{imgData[4].title}</h4>
                                </div>
                            </div>
                        </Grid> 

                        <Grid item xs={12} sm={7} md={7}  >
                            <div className='container' >
                                <img className='recent-img' src={imgData[3].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{imgData[3].title}</h4>
                                </div>
                            </div>
                        </Grid> 

                        <Grid item xs={12} sm={7} md={7} >
                            <div className='container' >
                                <img className='recent-img' src={imgData[2].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{imgData[2].title}</h4>
                                </div>
                            </div>
                        </Grid> 
                        
                        <Grid item xs={12} sm={5} md={5} >
                            <div className='container' >
                                <img className='recent-img' src={imgData[0].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{imgData[0].title}</h4>
                                </div>
                            </div>
                        </Grid> 

                        {/* <Grid item xs={12} sm={5} md={5} className='container' >
                                <img className='recent-img' src={imgData[0].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{imgData[0].title}</h4>
                                </div>
                        </Grid> */}

                    </Grid>               

    )
}

export default Recent2;
