import * as React from "react"
import Header from "../components/Header"
import '../App.css'
import RecentWork from "../components/RecentWork";
import Recent2 from '../components/Recent2';
import Hero from "../components/Hero";
import Title from "../components/Title";
import { Grid } from "@material-ui/core";
import Whatwedo from "../components/Whatwedo";


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

    </main>
  )
}

export default IndexPage
