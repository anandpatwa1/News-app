import React from 'react'

function Navbar() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 fh5co_padding_menu">
                        <img src="images/logo.png" alt="img" className="fh5co_logo_width" />
                    </div>
                    <div className="col-12 col-md-9 align-self-center fh5co_mediya_right">
                        {/* <div className="text-center d-inline-block">
                            <a href="https://www.linkedin.com/in/anand-patwa-5ab598258" target="_blank"  className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-search"></i></div></a>
                        </div> */}
                        <div className="text-center d-inline-block">
                            <a href="https://www.linkedin.com/in/anand-patwa-5ab598258" target="_blank"  className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-linkedin"></i></div></a>
                        </div>
                        <div className="text-center d-inline-block">
                            <a href="https://www.linkedin.com/in/anand-patwa-5ab598258" target="_blank" className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-twitter"></i></div></a>
                        </div>
                        <div className="text-center d-inline-block">
                            <a href="https://www.linkedin.com/in/anand-patwa-5ab598258" target="_blank" className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-facebook"></i></div></a>
                        </div>
                        {/* <div className="d-inline-block text-center"><img src="images/country.png" alt="img" className="fh5co_country_width"/></div> */}
                        <div className="d-inline-block text-center dd_position_relative ">
                            <select className="form-control fh5co_text_select_option">
                                <option>हिन्दी </option>
                                <option>English </option>
                            </select>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar