import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div>
       <footer className="netflix-footer">
        <div className="footericon">
          <FacebookIcon />
          <InstagramIcon  className='instagram'/>
          <YouTubeIcon />
        </div>
    <div class="footer-content">
          <div className="firstDscription">
            <ul>
              <li><a href="">Audio description</a></li>
              <li><a href="">Investor relation</a></li>
              <li><a href="">legal notice</a></li>
            </ul>
          </div>
          <div className="secondDscription">
          <ul>
              <li><a href="">Help center</a></li>
              <li><a href="">Jobes</a></li>
              <li><a href="">Cookies preference</a></li>
            </ul>
          </div>
          <div className="thirdDscription">
          <ul>
              <li><a href="">Gift card</a></li>
              <li><a href="">term of use</a></li>
              <li><a href="">corporate information</a></li>
            </ul>
          </div>
          <div className="fourthDscription">
          <ul>
              <li><a href="">Media center</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Contact us</a></li>
            </ul>
          </div>
    </div>
     <div className='serviceadicon'>
       <p>Service Code</p>
       <div className="copyrightfooter">
          &copy; 1997-2025 All Right reserved Inc.
       </div>
     </div>
</footer>
    </div>
  )
}

export default Footer
