import {
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Collapse
} from "@mui/material";
import { ReactElement, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AppBar from "@/components/app-bar";
import Main from "@/components/main";
import { drawerWidth } from "@/constants";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface IProps {
  children: ReactElement
}

const subLeveledMenus = [
  {
    title: 'Bands',
    subMenus: [
      { title: 'Alphabetical', url: '/bands/alphabetical' },
      { title: 'Country', url: '/bands/country' },
      { title: 'Genre', url: '/bands/genre' },
    ]
  },
  {
    title: 'Labels',
    subMenus: [
      { title: 'Alphabetical', url: '/labels/alphabetical' },
      { title: 'Country', url: '/labels/country' },
    ]
  },
];

const miscMenus = [
  { title: 'R.I.P.', url: '/rip' },
  { title: 'Random Band', url: '/bands/random' },
  { title: 'Users Ranking', url: '/rankings' },
  { title: 'News Archive', url: '/news' },
];

const contributionMenus = [
  { title: 'Reports', url: '/reports' },
  { title: 'Contribute/To Do', url: '/contribute' },
];

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight({ children }: IProps) {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<{
    [key: string]: boolean
  }>({
    'Bands': false,
    'Labels': false,
  });

  const handleClick = (key: string) => {
    setOpenSubMenu({[key]: !openSubMenu[key]});
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Persistent drawer
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={[open && { display: 'none' }]}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <Box height='50px' />
        {children}
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {subLeveledMenus.map((menuItem) => (
            <>
              <ListItemButton key={menuItem.title} onClick={() => handleClick(menuItem.title)}>
                <ListItemText primary={menuItem.title} />
                {openSubMenu[menuItem.title] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {menuItem.subMenus.map((subMenu) => (
                <Collapse key={subMenu.title} in={openSubMenu[menuItem.title]} timeout="auto" unmountOnExit>
                  <Link to={subMenu.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={subMenu.title} />
                      </ListItemButton>
                    </List>
                  </Link>
                </Collapse>
              ))}
            </>
          ))}
        </List>
        <Divider />
        <List>
          {miscMenus.map((menuItem) => (
            <ListItem key={menuItem.title} disablePadding>
              <ListItemButton>
                <ListItemIcon />
                <ListItemText primary={menuItem.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {contributionMenus.map((menuItem) => (
            <ListItem key={menuItem.title} disablePadding>
              <ListItemButton>
                <ListItemIcon />
                <ListItemText primary={menuItem.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}