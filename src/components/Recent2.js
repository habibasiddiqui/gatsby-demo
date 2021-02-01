import React from 'react';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import { Grid, Typography } from '@material-ui/core';
import Title from './Title';

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
        <div  className='wrapper'>
            <Grid container spacing={3}>
                <Grid item sm={1} md={1}></Grid>


                <Grid item sm={10} md={10} >
                <Title title="Recent Works"/>

                    <Grid container spacing={3} >
                        <Grid item xs={12} sm={7} md={7} >
                            <div className='container' >
                                <img className='recent-img' src={tileData[0].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{tileData[0].title}</h4>
                                </div>
                            </div>
                        </Grid> 

                        <Grid item xs={12} sm={5} md={5} className='container'>
                            {/* <div className='container' >
                                <img className='recent-img' src={tileData[1].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{tileData[1].title}</h4>
                                </div>
                            </div> */}
                                <img className='recent-img' src={tileData[1].img} />

                        </Grid> 

                        <Grid item xs={12} sm={5} md={5} className='container'>
                            <div className='container' >
                                <img className='recent-img' src={tileData[2].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{tileData[2].title}</h4>
                                </div>
                            </div>
                        </Grid> 

                        <Grid item xs={12} sm={7} md={7} className='container'>
                            <div className='container' >
                                <img className='recent-img' src={tileData[3].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{tileData[3].title}</h4>
                                </div>
                            </div>
                        </Grid> 

                        <Grid item xs={12} sm={7} md={7} className='container'>
                            <div className='container' >
                                <img className='recent-img' src={tileData[4].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{tileData[4].title}</h4>
                                </div>
                            </div>
                        </Grid> 
                        
                        <Grid item xs={12} sm={5} md={5} className='container' >
                            <div className='container' >
                                <img className='recent-img' src={tileData[5].img} />
                                <div className='overlay'>
                                    <h4 className='recent-img-title'>{tileData[5].title}</h4>
                                </div>
                            </div>
                        </Grid> 

                    </Grid>
                </Grid>


                <Grid item sm={1} md={1}></Grid>
            </Grid>
        </div>

    )
}

export default Recent2;
