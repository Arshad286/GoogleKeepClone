import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material'

const NavList = () => {

    const navlist = [
        { id: 1, name: 'Notes', icons: <Lightbulb /> ,route: '/' },
        { id: 2, name: "Archive", icons: <Archive /> ,route: '/archive' },
        { id: 3, name: "Delete", icons: <Delete /> , route: '/delete' },

    ]

    return (
        <List>
            {
                navlist.map(list => (
                    <ListItem button key={list.id}>
                        <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}>
                            <ListItemIcon>
                                {list.icons}
                            </ListItemIcon>
                            <ListItemText primary={list.name} />
                        </Link>

                    </ListItem>

                ))}
        </List>
    )
}

export default NavList