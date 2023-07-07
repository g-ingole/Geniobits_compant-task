import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
export const Footer = () => {
    return (
        <div>
            <section style={{ backgroundColor: "black", height: "600px" }}>

                <div className='container' style={{ paddingTop: "100px" }}>

                    <div className='row text-white'>

                        <div className='col-lg-4' style={{ textAlign: "left" }}>
                            <h4 className='mb-4' id='element'>ZUHAUS</h4>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore</p>
                            <a>Read More  </a>
                        </div>
                        <div className='col-lg-4' style={{ textAlign: "left" }}>
                            <h4 className='mb-4'>Contact Us</h4>
                            <p><LocationOnIcon /> <span> 774 NE 84th St Miami, FL 33879</span></p>
                            <p><CallIcon /> <span>Call us FREE +1 (800) 990 8877   </span></p>
                            <p><EmailIcon /> <span>zuhaus@qodeinteractive.com</span></p>
                            <a>Contact Us </a>
                        </div>
                        <div className='col-lg-4' style={{ textAlign: "left" }}>
                            <h4 className='mb-4'>Reach Out Us</h4>
                            <p> Don’t forget to follow us on:</p>
                            <div className='icons'>
                                <TwitterIcon />
                                <FacebookIcon />
                                <InstagramIcon />
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}
