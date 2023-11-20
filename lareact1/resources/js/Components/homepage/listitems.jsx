// Import statements

export const MainListItems = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  
    const toggleSubMenu = () => {
      setIsSubMenuOpen(!isSubMenuOpen);
    };
  
    return (
      <React.Fragment>
        <ListItemButton onClick={toggleSubMenu}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
  
        {/* Submenu for Dashboard */}
        <Collapse in={isSubMenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Submenu Item 1" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Submenu Item 2" />
            </ListItemButton>
          </List>
        </Collapse>
  
        {/* Other ListItems */}
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </React.Fragment>
    );
  };
  