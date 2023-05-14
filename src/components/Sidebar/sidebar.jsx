import React, {useState} from "react";
import { useTablet } from "../../utils/media-queries";

// icon imports
import HomeIcon from "../../img/Raksha.png";
import Person2Icon from '@mui/icons-material/Person2';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactPageIcon from '@mui/icons-material/ContactPage';

// sidebar import
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const baseClass = "sidebar";

const sidebarHeight = 65;

const sidebarItems = [{
    title: "About",
    elementId: 'about',
    link: "/about",
    icon: <Person2Icon viewBox="0 -4 24 24"/>
}, {
    title: "Work",
    elementId: 'work',
    link: "/work",
    icon: <WorkIcon viewBox="0 -4 24 24"/>
}, {
    title: "Projects",
    elementId: 'projects',
    link: "/project",
    icon: <CodeIcon viewBox="0 -4 24 24"/>
}, {
    title: "Contact",
    elementId: 'contact',
    link: "/contact",
    icon: <ContactPageIcon viewBox="0 -4 24 24"/>
}]

const Sidebar = () => {
    const [selected, setSelected] = useState('intro');
    const [anchorEl, setAnchorEl] = useState(null);
    const isTablet = useTablet();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const scrollToItem = (elementId, index) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({behavior: 'smooth'});
        setSelected(index);
        setAnchorEl(null);
        console.log(elementId)
    }
    
    const scrollToItemMobile = (elementId) => {
        window.scrollTo({top: document.getElementById(elementId).offsetTop + 20,  behavior: 'smooth'} )
        handleClose();
    }

    return isTablet ? (
        <AppBar className="sidebar" style={{backgroundColor: 'black', width: '100vw', top:'0', left:'0'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, height: `${sidebarHeight}px`}} >
                    <img className={`${baseClass}-main-icon`} src={HomeIcon} alt="icon" onClick={()=> scrollToItemMobile('intro')}/>
                </Typography>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    sx={{ ml: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    sx={{padding: 0}}
                >
                    {sidebarItems.map((item, index) => {
                        return (
                            <MenuItem sx={{padding: 0}} key={index} onClick={()=> scrollToItemMobile(item.elementId)}> 
                                <div className={`${baseClass}-menu-item`} >{item.icon} {item.title}</div>
                            </MenuItem>
                        );
                    })}
                </Menu>
            </Toolbar>
        </AppBar>
    ) : (
        <div className={`${baseClass}`}>
            <div className={`${baseClass}-main`} onClick={()=> scrollToItem('intro', sidebarItems.length)}>
                <img className={`${baseClass}-main-icon`} src={HomeIcon} alt="icon" />
            </div>
            <div className={`${baseClass}-menu`}>
                {sidebarItems.map((item, index) => {
                    return (
                        <div className={`${baseClass}-menu-item ${selected === index ?`${baseClass}-menu-item-selected` : ''}`} 
                            onClick={()=> scrollToItem(item.elementId, index)}
                            key={index}
                        >
                            {item.icon} {item.title}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}; 

export default Sidebar;