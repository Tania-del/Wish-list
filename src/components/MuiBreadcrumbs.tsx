'use client'
import SvgArrowsvg from "@/icons/ArrowSvg";
import SvgVector from "@/icons/Vector";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const MuiBreadcrumbs = () => {
  return (
    <Box sx={{marginBottom: '10px', marginLeft: '10px'}}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb" separator={<SvgArrowsvg />}>
        <Link underline="none" color="inherit" href="/">
          {<SvgVector className="mr-[5px]" />}
        </Link>
        <Link underline="none" color="inherit" href="/Wishlist" style={{
          fontSize: '12px',
          color: '#999999',
          }}>
          Wishlist
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
