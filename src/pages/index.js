import * as React from "react";
import Header from "../components/Header";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recent2 from '../components/Recent2';
import Hero from "../components/Hero";
import Title from "../components/Title";
import { Grid, Button } from "@material-ui/core";
import Whatwedo from "../components/Whatwedo";
import Testimonials from "../components/Testimonials";
import LatestBlog from "../components/LatestBlog";
import Footer from "../components/Footer";


const IndexPage = () => {
  return (
    
    <main >
      <title>Home Page</title>
      <Header />

      <Grid container spacing={3}>
        <Grid item sm={1} md={2}></Grid>
        <Grid item sm={10} md={10}>
          <Hero />
        </Grid>
        {/* <Grid item sm={1} md={1}></Grid> */}
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={1} md={2}></Grid>
        <Grid item sm={10} md={10}>
          <Title title="Recent Work"/>
        </Grid>
        {/* <Grid item sm={1} md={1}></Grid> */}
      </Grid>
      
      <Grid container spacing={3}>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={10} md={10}>
          <Recent2 />
        </Grid>
        <Grid item sm={1} md={1}></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={1} md={2}></Grid>
        <Grid item sm={10} md={10}>
          <Title title="What We Do"/>
        </Grid>
        {/* <Grid item sm={1} md={1}></Grid> */}
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={10} md={10}>
          <Whatwedo />
        </Grid>
        {/* <Grid item sm={1} md={1}></Grid> */}
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={1} md={2}></Grid>
        <Grid item sm={10} md={10}>
          <Title title="Testimonials"/>
        </Grid>
        {/* <Grid item sm={1} md={1}></Grid> */}
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={10} md={10}>
          <Testimonials />
        </Grid>
        <Grid item sm={1} md={1}></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={1} md={2}></Grid>
        <Grid item sm={10} md={10}>
          <Title title="Latest from the Blog"/>
        </Grid>
        {/* <Grid item sm={1} md={1}></Grid> */}
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={10} md={10}>
          <LatestBlog />
        </Grid>
        <Grid item sm={1} md={1}></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={1} md={2}></Grid>
        <Grid item sm={10} md={10}>
          <Button className='button'>View Blog</Button>
        </Grid>
        {/* <Grid item sm={1} md={1}></Grid> */}
      </Grid>

      {/* <Grid container spacing={3}>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={10} md={10}> */}
          <Footer />
        {/* </Grid>
        <Grid item sm={1} md={1}></Grid>
      </Grid> */}


      

    </main>
  )
}

export default IndexPage
