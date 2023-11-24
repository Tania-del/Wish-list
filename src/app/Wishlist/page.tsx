import CategoryList from '@/components/MuiCategoryList';
import MuiBreadcrumbs from '@/components/MuiBreadcrumbs';
import React from 'react';
import MuiCategoryList from '@/components/MuiCategoryList';

const products = 158;

const WishListPage = () => {
  return (
    <>
      <div style={{ paddingTop: '52px', paddingRight: '30px', paddingBottom: '73px', paddingLeft: '30px'}}>
        <MuiBreadcrumbs />
        <div style={{ marginLeft: '16px'}}>
      <h1 style={{ fontWeight: '800', fontSize: '24px', lineHeight: '24px', paddingBottom: '10px'}}>Wishlist</h1>
      <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '15.6px', color: '#999999' }}>{products} products</p>
        </div>
      <MuiCategoryList />
      </div>
    </>
  )
}

export default WishListPage;