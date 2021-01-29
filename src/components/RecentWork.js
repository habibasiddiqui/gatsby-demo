import React from 'react';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/7.jpg';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton'; 
import { Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

  
function RecentWork() {

    const classes = useStyles();

    const tileData = [
        {
            img: one,
            title: 'Project Title 1',
            cols: 2
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
            cols: 2
        },
        {
            img: five,
            title: 'Project Title 5',
            cols: 2
        },
        {
            img: six,
            title: 'Project Title 6',
        }
        
    ]

    return (
        <div >
            <Grid container spacing={3}>
                <Grid item sm={2} md={1}></Grid>

                <Grid item sm={8} md={10} >
                <hr className='heading-divider' />
                {/* <Divider className='heading-divider' /> */}

                <Typography className='heading' variant='h4' gutterBottom>
                    Recent Work
                    <Typography variant='subtitle1'>
                        A subtitle of your choice
                    </Typography>
                </Typography>

                <GridList cellHeight={400} cols={3} >
              
                {tileData.map((tile) => (
                <GridListTile key={tile.img}  cols={tile.cols || 1} className='container'>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar className='overlay'
                    title={tile.title}
                    
                    />
                </GridListTile>
                ))}
            </GridList>
                </Grid>

                <Grid item sm={2} md={1}></Grid>
            </Grid>
            
        </div>
    )
}

export default RecentWork
