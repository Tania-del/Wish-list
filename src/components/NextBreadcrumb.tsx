'use client'
import React, { FC, Fragment, ReactNode } from 'react'
 
interface IBreadcrumb {
  href?: string;
  title?: string | ReactNode;
}
interface IBreadcrumbs {
  breadcrumbs: IBreadcrumb[];
  delimiter?: string | ReactNode;
  classActive?: string;
  breadcrumbsClass?: string;
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({
  breadcrumbs,
  classActive = '',
  delimiter,
  breadcrumbsClass,
}) => {
    function clsx(arg0: string, breadcrumbsClass: string | undefined): string | undefined {
        throw new Error('Function not implemented.');
    }

  return (
    <div>
      <nav className={clsx('breadcrumbs', breadcrumbsClass)}>
        {breadcrumbs.map(({ title, href }, index) => (
          <Fragment key={href}>
            {href ? (<a className={clsx('breadcrumbs-text', { [classActive]: (index === breadcrumbs.length - 1) })} href={href}>{title}</a>) : <p>{title}</p>}
            {index !== breadcrumbs.length - 1 && delimiter}
          </Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;