import './CustomDrawer.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import { useState } from 'react';
import useLangDirection from '../useLangDirection';

function CustomDrawer() {

    function StringToSlug(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    const h2Elements = document.querySelectorAll('h2');
    const h2Array = Array.from(h2Elements).map(h2 => {
        let id = h2.id;
        if (!id) {
            id = StringToSlug(h2.textContent.trim());
            h2.setAttribute("id", id);
        }
        return [h2.textContent.trim(), `#${id}`];
    });

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const drawerAlign = useLangDirection() === 'ltr' ? 'left' : 'right';

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {h2Array.map((h2) => (
                    <ListItem key={h2[0]} disablePadding>
                        <ListItemButton component="a" href={h2[1]}>
                            <ListItemText primary={h2[0]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Fab variant="extended" onClick={toggleDrawer(true)} className='customFab' sx={{
                position: 'fixed',
                bottom: 16,
                zIndex: 1000,
            }}>
                <NavigationIcon sx={{ mr: 1 }} />
                Navigation
            </Fab>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor={drawerAlign}>
                {DrawerList}
            </Drawer>
        </>

    )
}

export default CustomDrawer;