import MuiBreadcrumbs from '@/components/MuiBreadcrumbs';
import React from 'react';
import MuiCategoryList from '@/components/MuiCategoryList';
import MuiProducts from '@/components/MuiProducts';

const products = 158;

const WishListPage = () => {
  const listItems = ['All products', 'Phones', 'Accessories']

  return (
    <>
      <div className='pt-[52px] pr-[30px] pb-[0px] pl-[30px]'>
        <MuiBreadcrumbs />
        <div className='ml-[10px]'>
      <h1 className='font-extrabold	text-2xl/[24px] pb-[10px]'>Wishlist</h1>
      <p className='font-normal text-xs/[15.6px] text-grey'>{products} products</p>
        </div>
        <MuiCategoryList listItems={listItems} />
      </div>
        <MuiProducts />
    </>
  )
}

export default WishListPage;

