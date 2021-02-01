import * as React from "react"
import Header from "../components/Header"
import '../App.css'
import RecentWork from "../components/RecentWork";
import Recent2 from '../components/Recent2';
import Hero from "../components/Hero";


const IndexPage = () => {
  return (
    
    <main >
      <title>Home Page</title>
      
      <Header />

      <Hero />

      {/* <RecentWork /> */}
      <Recent2 />
     
    </main>
  )
}

export default IndexPage
