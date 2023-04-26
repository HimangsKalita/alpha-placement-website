import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  return (
    <div>


<footer class="text-center text-lg-start bg-secondary text-white ">
  

  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3 pt-5">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            <BusinessIcon/>Alpha Placement
          </h6>
          <p>
          ALPHA is an all in one placement website where students can search their desired jobs and apply for them
          </p>
        </div>
       
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="/" class="text-reset">Home</Link>
          </p>
          <p>
          <Link to="/jobs" class="text-reset">Jobs</Link>
          </p>
          <p>
          <Link to="/search" class="text-reset">Search Jobs</Link>
          </p>
          <p>
          <Link to="/" class="text-reset">Home</Link>
          </p>
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><HomeIcon/> Guwahati, Assam</p>
          <p>
            <EmailIcon/>
            arnabsarma833@gmail.com
          </p>
          <p><PhoneIcon/> + 01 234 567 88</p>
        </div>
        
      </div>
      
    </div>
  </section>
 

  
  <div class="text-center p-4">
    © 2023 Copyright: Alpha Placement 
  </div>
  
</footer>

    </div>
  )
}
