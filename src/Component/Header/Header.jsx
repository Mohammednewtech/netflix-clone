import React from 'react';
import './Header.css';
import NetflixLogo from '../../assets/NetflixLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className='netflex-outer-container'>
      <div className="netflix-container">
        <ul>
          <li><a href=""><img src={NetflixLogo} alt="netflix_logo" /></a></li>
          <li><a href="">Home</a></li>
          <li><a href="">TV Shows</a></li>
          <li><a href="">Movies</a></li>
          <li><a href="">Latest</a></li>
          <li><a href="">My List</a></li>
          <li><a href="">Browse by language</a></li>
        </ul>
      </div>
      <div className="netflix-icons">
        <ul>
          <li><a href=""><SearchIcon /></a></li>
          <li><a href=""><NotificationAddIcon /></a></li>
          <li><a href=""><AccountBoxIcon /></a></li>
          <li><a href=""><ArrowDropDownIcon /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;