import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Card, CardMedia, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';

const LatestBlog = () => {

    const data = useStaticQuery(graphql`
        {
        allContentfulDemoBlog {
            edges {
            node {
                title
                date
                image {
                fluid {
                    src
                }
                }
            }
            }
        }
        }
    `);
    let blogArr = data.allContentfulDemoBlog.edges;
//   console.log(data.allContentfulDemoBlog.edges);


  return (
      <div>
          <Grid container spacing={3}>
              {
                  blogArr.map(item => (
                    <Grid item sm={12} md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia className='blog-img'
                            image={item.node.image.fluid.src}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.node.title}
                            </Typography>
                            <Typography className='blog-date' color="textSecondary">
                                {item.node.date}
                            </Typography>
                            <Typography className='test-para' variant="body2"  component="p">
                                Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec nisl ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh fringilla
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                  </Grid>
                  ))
              }
              
          </Grid>
          
        
      </div>
  )
}

export default LatestBlog
