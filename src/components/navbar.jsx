import React from 'react'

//MaterialUI
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { StyledNavHashLink as Link } from './custom_mui.jsx'
import { StyledNavTypography } from './custom_mui'
import '../styles/navbar.css'

export default function NavBar(props) {
  const pages = [
    { name: 'Home', link: '/#home' },
    { name: 'Motivation', link: '/#motiv' },
    { name: 'About', link: '/#about' },
  ]

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar>
          <Container maxWidth='lg'>
            <Toolbar disableGutters>
              <Typography
                variant='h6'
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  /* letterSpacing: '.3rem', */
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
               Matthew Pumeshin Moodley
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                }}
              >
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <StyledNavTypography textAlign='center' sx={{bgcolor:'#FFF'}}>
                        <Link
                          smooth
                          to={page.link}
                          className='text-link'
                          sx={{ color: 'text.secondary', bgcolor: '#FFF' }}
                        >
                          {page.name}
                        </Link>
                      </StyledNavTypography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                variant='h5'
                component='a'
                href=''
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                }}
              ></Box>
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  /* letterSpacing: '.3rem', */
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
               Matthew Pumeshin Moodley
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: 'flex-end',
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                {pages.map((page) => (
                  <Box key={page.name} sx={{ mx: 1 }}>
                    <Link to={page.link} smooth>
                      {page.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    </React.Fragment>
  )
}
