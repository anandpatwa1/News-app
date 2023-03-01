import React from 'react'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import FooterMain from '../components/FooterMain'
import Navbar from '../components/Navbar'
import NewsSection from '../components/newsSection/NewsSection'
import Topics from '../components/Topics'
import Tranding from '../components/Tranding'
import TrandingTop from '../components/TrandingTop'

function MainPage() {
  return (
   <>
<Navbar/>

<Topics/>
{/* <TrandingTop/> */}
<NewsSection/>
<Tranding/>
<FooterMain/>
<Footer/>
<BackToTop/>
   </>
  )
}

export default MainPage