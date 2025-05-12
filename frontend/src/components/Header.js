import './Header.css';
import logo from '../treelogo.svg';
import { Link } from "react-router-dom";
import { Button, AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar className="" position="sticky">
                <Toolbar>
                    <div className="headerFlex">
                        <Box className="headerFlexInner">
                            <Link to="/">
                                <Box
                                    component="img"
                                    className="headerLogo"
                                    alt="logo"
                                    title="CO2-footprint"
                                    src={logo}
                                />
                            </Link>
                            <Typography variant="h5" component="div">
                                CO2-Footprint
                            </Typography>
                        </Box>
                        <Box className="headerFlexInner" sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Button variant="contained" disableElevation component={Link} to='/'>Startseite</Button>
                            <Button variant="contained" disableElevation component={Link} to='/about'>Über uns</Button>
                            <Button variant="contained" disableElevation component={Link} to='/participate'>Mitmachen</Button>
                        </Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuItem onClick={handleCloseNavMenu} component={Link} to='/'>
                                Startseite
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} component={Link} to='/about'>
                                Über uns
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} component={Link} to='/participate'>
                                Mitmachen
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;