/* eslint-disable @next/next/no-img-element */
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'


const createData = (photo: string, code: number, name: string, stock: string, qty: number, price: [number, number]) => {
    return { photo, code, name, stock, qty, price }
 }

const image = '/images/productImg.jpeg'
const titles = ['Photo', 'Product code', 'Name', 'Stock', 'QTY', 'Price']
const rows = [
    createData(image, 5894684854, 'Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black', 'NY', 56, [48, 15.45]),
    
    createData(image, 5894684854, 'Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black', 'Washington', 56, [48, 15.45]),
     
     createData(image, 5894684854, 'Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black', 'Kyiv', 56, [48, 15.45])
 ]


const MuiProducts = () => {
  return (
    <div>
          <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead >
                      <TableRow>
                          {titles.map((title) => (
                              <TableCell sx={{
                                  borderBottom: 'none',
                                  color: 'dark.main',
                                  textAlign: 'start',
                                  fontSize: '12px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: '15.6px',
                                  padding: '0px',
                              }} key={title}>
                                  {title}
                              </TableCell>
                          ))}
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map((row) => (
                          <>
                          <TableRow key={row.name} sx={{ paddingTop: '5px'}}/>
                              <TableCell sx={{ padding: '0px'}}>
                                <img src={row.photo} alt="Product photo" />
                          </TableCell>
                              <TableCell sx={{ padding: '0px' }}>{row.code}</TableCell>
                              <TableCell sx={{ padding: '0px' }}>{row.name}</TableCell>
                              <TableCell sx={{ padding: '0px' }}>{row.stock}</TableCell>
                              <TableCell sx={{ padding: '0px' }}>{row.qty}</TableCell>
                              <TableCell sx={{ padding: '0px' }}>{row.price}</TableCell>
                          </>
                      ))}
                  </TableBody>
              </Table>
      </TableContainer>
    </div>
  )
}

export default MuiProducts
