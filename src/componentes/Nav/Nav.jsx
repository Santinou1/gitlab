import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink, Link } from 'react-router-dom';

import LogOut from '../LogOut/LogOut';

import './Nav.scss'

const logoMarca = "https://bromteck.com/tv/wp-content/uploads/2021/02/logo_600_76_blue.png"
const avatar = "https://www.geekmi.news/__export/1652041486799/sites/debate/img/2022/05/08/geekmi_news_-_2022-05-08t142129_149.jpg_172596871.jpg" 

function Nav() {


  /* -- evento para que al alhcer scroll se desvanezca el nav */
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 0) {
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  };
  useEffect (() =>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.addEventListener("scroll",transitionNavBar);
  },[]);


  return (
    <div className= {`nav ${show && "nav__bg"}`} >
      <div className='nav__contents'>
        <div className='left'>
          {/*-- imagen del logo de la marca -- */}
          <NavLink to="/"> <img className='nav__logo'src={logoMarca} alt='logo'/></NavLink>
          <ul className='links'>
            <NavLink className='link' to="/homeScreen"><li>Movie</li></NavLink>
            <NavLink className='link' to="/homeScreen"><li><span>Tv Show</span></li></NavLink>
            <NavLink className='link' to="/homeScreen"><li><span>Radio</span></li></NavLink>
          </ul>
        </div>
        <div className='right'>
          <SearchIcon className="icon"/>
          <NotificationsIcon className="icon"/>
          {/*--imagen del avatar--*/}
          <img className='nav__avatar'
          src={avatar}
          alt='avatar'
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon"/>
            <div className="option">
              <Link className='span' to="/profile"><span>Profile</span></Link>
              <Link className='span' to="/account"><span>Setting</span></Link>
              <Link className='span' to="/" ><span onClick={()=>LogOut()}>Logout</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav