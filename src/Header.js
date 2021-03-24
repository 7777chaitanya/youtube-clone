import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        
            
        <div className="header" >
            <div className="header__left">
                <MenuIcon />

                <img 
                    className="header__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                    alt="youtube-logo"
                />
            </div>
            
            <div className="header__center">
                <input type="text" placeholder='Search' className="header__searchBox" />
                <SearchIcon className="header__inputButton" />
                <MicIcon className="header__mic" />
            </div>

            <div className="header__right">
                <VideoCallIcon className="header__icons" />
                <AppsIcon className="header__icons" />
                <NotificationsIcon className="header__icons" />
                <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/56331036?s=460&v=4" />
            </div>   

            
            
            
        </div>
        

    )
}

export default Header
