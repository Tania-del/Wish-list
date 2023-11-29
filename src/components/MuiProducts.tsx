/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";

const createData = (
  photo: string,
  code: number,
  name: string,
  stock: string,
  qty: number,
  price: [number, number]
) => {
  return { photo, code, name, stock, qty, price };
};

const image = "/images/productImg.jpeg";
const titles = ["Photo", "Product code", "Name", "Stock", "QTY", "Price"];
const rows = [
  createData(
    image,
    5894684854,
    "Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black",
    "NY",
    56,
    [48, 15.45]
  ),

  createData(
    image,
    5894684854,
    "Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black",
    "Washington",
    56,
    [48, 15.45]
  ),

  createData(
    image,
    5894684854,
    "Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black",
    "Kyiv",
    56,
    [48, 15.45]
  ),

  createData(
    image,
    5894684854,
    "Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black",
    "NY",
    56,
    [48, 15.45]
  ),

  createData(
    image,
    5894684854,
    "Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black",
    "Washington",
    56,
    [48, 15.45]
  ),

  createData(
    image,
    5894684854,
    "Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black",
    "Kyiv",
    56,
    [48, 15.45]
  ),
];

const MuiProducts = () => {
  return (
    <div className="pl-[10px] pr-[10px]">
      <TableContainer sx={{ maxHeight: "490px" }}>
        <Table
          sx={{
            minWidth: 650,
            borderCollapse: "separate",
            borderSpacing: "20px 10px",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{}}>
              {titles.map((title, index) => (
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "dark.main",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "15.6px",
                    padding: "2.5px 10px",
                    whiteSpace: "nowrap",
                    textAlign: index === 2 ? "start" : "center",
                  }}
                  key={title}
                >
                  {title}
                </TableCell>
              ))}
                          <TableCell sx={{ borderBottom: 'unset'}}></TableCell>
                          <TableCell>dfndfkgs</TableCell>
                      </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <>
                <TableRow
                  key={row.name}
                  sx={{ padding: "0px", color: "dark.main" }}
                >
                  <TableCell
                    sx={{ padding: "0", width: "100px", borderBottom: "unset" }}
                  >
                    <img src={row.photo} alt="Product photo" />
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0px 10px",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "15.6px",
                      borderBottom: "unset",
                    }}
                  >
                    {row.code}
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0px 10px",
                      color: "inherit",
                      borderBottom: "unset",
                      fontSize: "12px",
                      fontWeight: 700,
                                lineHeight: "15.6px",
                      maxWidth: '597px',
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0px 10px",
                      color: "inherit",
                      borderBottom: "unset",
                      lineHeight: "15.6px",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    {row.stock}
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0px 10px",
                      color: "inherit",
                      borderBottom: "unset",
                      textAlign: "center",
                    }}
                  >
                    {row.qty}
                    <span className="font-bold"> qty.</span>
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0px",
                      color: "inherit",
                      borderBottom: "unset",
                      textAlign: "center",
                                fontWeight: 700,
                      maxWidth: '47px'
                    }}
                  >
                    {`${row.price[0]} €`}
                    <br />
                    <span className="font-normal">{`${row.price[1]} $`}</span>
                  </TableCell>

                  <TableCell
                    sx={{ borderBottom: "unset" }}
                  >
                    <Button
                      disableRipple
                      variant="outlined"
                      sx={[
                        {
                          maxWidth: "88px",
                          padding: "9px 14px 9px 14px",
                          backgroundColor: "white.main",
                          border: "1px solid blue.main",
                          color: "blue.main",
                          fontSize: "11px",
                          lineHeight: "15.6px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          textTransform: "unset",
                        },
                        {
                          "&:hover": {
                            backgroundColor: "blue.main",
                            color: "white.main",
                          },
                        },
                      ]}
                    >
                      Add to card
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MuiProducts;
