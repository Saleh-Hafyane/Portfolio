"use client"
import PortfolioProjects from "./components/PortfolioProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
export default function Home() {
  const [darkMode,setDarkMode]= useState(false)
  
  return (
    <main className={darkMode ? "dark" : ""} >
      <div className='bg-blue-50 dark:bg-gray-900 dark:text-white px-10'>
      <Header darkMode = {darkMode} setDarkMode={setDarkMode}/>
      <PortfolioProjects />
      <Contact/>
      <Footer />
      </div>
      
    </main>
  );
}
