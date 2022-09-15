import React from 'react';
import styled from 'styled-components'
import Home from '../../img/favicon.PNG'
import { AppBar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 3.1rem;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  width: 100%;
`

const Logo = styled.img`
  height: 30px;
  width: 30px;
  float: right;
`

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-inline-start: auto;
`

const MenuItem = styled.li`
  margin-right: 2.25rem;
  font-weight: 600;
  font-size: 18px;
  width: max-content;
  height: inherit;
`

const Navbar = () => {
  return (
    <div>
    <AppBar style={{ background:"black" }} position="fixed">
      <Container>
        <Wrapper>
          <Menu>
              <Link style= {{"textDecoration" : "none"}} to="/">
                <MenuItem
                  style = {{color: window.location.href.slice(-1) == "/" ? "#d35252" : "white"}}
                > 
                  Home
                </MenuItem>
              </Link>
              <Link style= {{"textDecoration" : "none"}} to="/about">
                <MenuItem
                  style = {{color: window.location.href.includes("/about") ? "#d35252" : "white"}}
                > 
                  About
                </MenuItem>
              </Link>
              <Link style= {{"textDecoration" : "none"}} to="/work">
                <MenuItem
                  style = {{color: window.location.href.includes("/work") ? "#d35252" : "white"}}
                > 
                  Work Experience
                </MenuItem>
              </Link>
              <Link style= {{"textDecoration" : "none"}} to="/projects">
                <MenuItem
                  style = {{color: window.location.href.includes("/projects") ? "#d35252" : "white"}}
                > 
                  Projects
                </MenuItem>
              </Link>
              <Link style= {{"textDecoration" : "none"}} to="/contact">
                <MenuItem
                  style = {{color: window.location.href.includes("/contact") ? "#d35252" : "white"}}
                > 
                  Contact Me
                </MenuItem>
              </Link>
          </Menu>
          <Left> 
            <Link to="/">
              <Logo src={Home} /> 
            </Link>
          </Left>
        </Wrapper>
      </Container>
    </AppBar>
    </div>
  );
}
export default Navbar;


{/* <div className="Navbar">
<AppBar style={{ background:"#1B1A1A" }} position="fixed">
  <Toolbar disableGutters style={{ minHeight: '55px' }}>
    <Item img title = { Home } />
    <div className="left">
      <Item title = "About" />
      <Item title = "Work Experience" />
      <Item title = "Projects" />
      <Item title = "Contact" />
    </div>  
  </Toolbar>
</AppBar>
</div> */}