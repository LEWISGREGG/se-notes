"use client"
import Bulb from "@/components/ui/bulb";
import Banner from "./Banner";
import Navbar from "./Navbar";
import "./globals.css";



function Home() {
  return (
  <div>
<Navbar/>
<Banner/>
<Bulb/>
</div>
  )
}

export default Home