import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { Tabs, Tab, AppBar, Toolbar, Typography } from '@material-ui/core'

const NavBar = () => {

  const navLinks = [
    {
      label: "Home",
      value: "/"
    },
    {
      label: "About",
      value: "/about"
    },
    {
      label: "Contact",
      value: "/contact-us"
    },
    {
      label: "Sign In",
      value: "/sign-in"
    },
    
  ]

  const {pathname} = useLocation()

  return(
    <AppBar position="sticky">
      <Toolbar>
        <Typography component="h1" variant="h6">BoxBox</Typography>
        <Tabs value={pathname} >
          {navLinks.map(({label, value}) => (
            <Tab key={value} label={label} value={value} component={Link} to={value} />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;