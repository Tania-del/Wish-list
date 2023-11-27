'use client'
import SvgBasket from '@/icons/Basket';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListItemTextProps } from '@mui/material';
import React, { useState } from 'react'
import { styled } from '@mui/system';
import { clsx } from 'clsx';


type listItemsType = {
  listItems: string[]
}
interface StyledListItemTextProps extends ListItemTextProps {
  isActive?: boolean;
}


const ListItemTitle = styled(ListItemText)<StyledListItemTextProps>(({ theme, isActive })  => ({
  '& .MuiTypography-root': {
    // color: isActive ? theme.palette.white.main : theme.palette.dark.main,
    fontSize: '11px',
    fontWeight: 700,
    fontStyle: 'normal',    
  },

  //  '&:active .MuiTypography-root': {
  //   color: theme.palette.white.main,
  // },
}))

type TTab = 0 | 1 | 2;

export default function MuiCategoryList({ listItems }: listItemsType) {
  const [tab, setTab] = useState<TTab>(0)

  return (
    <Box sx={{
      width: '100%',
      maxWidth: 385,
   
    }}>
      <nav aria-label="main mailbox folders">
        <List sx={{
          margin: '20px 0 20px 0',
          padding: '0',
          display: 'flex',
          gap: '20px'
        }}>
          {listItems.map((item, index) => (
          <ListItem key={item} disablePadding sx={{ width: 'auto'}}>
              <ListItemButton sx={[{
                paddingTop: '8px',
                paddingRight: '10px',
                paddingBottom: '8px',
                paddingLeft: '10px',
                display: 'flex',
                gap: '12px',
                borderRadius: '4px',
                maxWidth: '115px',
                backgroundColor: tab === index ? 'gray.dark' : 'gray.lightGray',
                color: tab === index ? '#FFF' : 'gray.main',
                
              }, {
                '&:hover': {
                  backgroundColor: 'gray.dark',
                  color: '#fff',
              }}]}
                disableRipple
                onClick={() => setTab(index as TTab )}
              >
                <ListItemTitle
                  isActive={tab === index as TTab}
                  primary={item}
                  sx={{
                    flex: 'unset',
                    margin: 0,
                  }}
                />
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    color: 'inherit'
                  }}
                >
                  <SvgBasket />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
           ))}
        </List>
      </nav>
      {/* <Divider /> */}
      
    </Box>
  );
}
