import { AppBar, Toolbar, Typography, Button, IconButton, Popover, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [accountAnchorEl, setAccountAnchorEl] = useState(null);

    const isMenuOpen = Boolean(menuAnchorEl);
    const isAccountOpen = Boolean(accountAnchorEl);

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const handleAccountClick = (event) => {
        setAccountAnchorEl(event.currentTarget);
    };

    const handleAccountClose = () => {
        setAccountAnchorEl(null);
    };

    return (
        <AppBar sx={{ backgroundColor: 'blue', color: "#086699" }}>
            <Toolbar>
                <IconButton
                    sx={{ color: 'inherit' }}
                    onMouseEnter={handleMenuClick}
                    aria-controls="menu-popover"
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen ? 'true' : undefined}
                >
                    <MenuIcon />
                </IconButton>

                <Popover
                    id="menu-popover"
                    open={isMenuOpen}
                    anchorEl={menuAnchorEl}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Stack direction="column" spacing={1}>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/news">News</Button>
                        <Button color="inherit" component={Link} to="/about">About</Button>
                        <Button color="inherit" component={Link} to="/contact">Contact</Button>
                        <Button color="inherit" component={Link} to="/list">FilmsList</Button>
                    </Stack>
                </Popover>

                <Typography variant="h3" fontWeight='bold' fontStyle={'italic'} sx={{ flexGrow: 1, textAlign: 'center' }}>
                    CGV
                </Typography>

                <div>
                    <Button
                        sx={{ color: 'black' }}
                        startIcon={<PersonIcon />}
                        onClick={handleAccountClick}
                        aria-controls="account-popover"
                        aria-haspopup="true"
                        aria-expanded={isAccountOpen ? 'true' : undefined}
                    >
                        ĐĂNG NHẬP/ĐĂNG KÝ
                    </Button>

                    <Popover
                        id="account-popover"
                        open={isAccountOpen}
                        anchorEl={accountAnchorEl}
                        onClose={handleAccountClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <Stack direction="column" spacing={1}>
                            <Button color="inherit" component={Link} to="/login">Đăng nhập</Button>
                            <Button color="inherit" component={Link} to="/register">Đăng ký</Button>
                        </Stack>
                    </Popover>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
