import React from 'react'
import MainNews from './MainNews'
import MostPopular from './MostPopular'
import Tags from './Tags'

function NewsSection() {
  return (
    <div className="container-fluid pb-4 pt-4 paddding">
    <div className="container paddding">
        <div className="row mx-0">
            <MainNews/>
            <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
              <Tags/>
             {/* <MostPopular/>  */}
             
            </div>
        </div>
        {/* <div className="row mx-0">
    <div className="col-12 text-center pb-4 pt-4">
        <a href="#" className="btn_mange_pagging"><i className="fa fa-long-arrow-left"></i>&nbsp;&nbsp; Previous</a>
        <a href="#" className="btn_pagging">1</a>
        <a href="#" className="btn_pagging">2</a>
        <a href="#" className="btn_pagging">3</a>
        <a href="#" className="btn_pagging">...</a>
        <a href="#" className="btn_mange_pagging">Next <i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp; </a>
     </div>
</div> */}
    </div>
</div>
  )
}

export default NewsSection