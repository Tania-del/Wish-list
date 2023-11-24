import SvgBasket from '@/icons/Basket';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { title } from 'process'
import React from 'react'
// import styled from 'styled-components';
import { styled } from '@mui/material/styles';


// const CategoryBox = styled('Box')(({ theme })) => ({
  
// })



export default function MuiCategoryList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label=" mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="All products" />
              <ListItemIcon>
               {<SvgBasket  />} 
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Phones" />
              <ListItemIcon>
               {<SvgBasket  />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Accessories" />
              <ListItemIcon>
                {<SvgBasket  />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      {/* <Divider /> */}
      
    </Box>
  );
}