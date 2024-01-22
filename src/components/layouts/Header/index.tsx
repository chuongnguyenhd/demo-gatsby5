import * as React from 'react';
import { StarIcon } from '../../core/Icons/StarIcon';
import { routes } from '../../../router/routes';
import { Link } from 'gatsby';

export const Header = () => {
  return (
    <div className="max-h-header fixed left-0 right-0 top-0 z-50 h-full bg-white shadow">
      <div className="max-w-appFull mx-auto flex h-16 w-full items-center bg-white px-2.5 sm:h-20 lg:px-[200px]">
        <div className={'mr-[19px] flex items-center gap-1'}>
          <StarIcon />
          Logo
        </div>
        <div className={'flex gap-8'}>
          {routes.map((r) => (
            <Link key={r.link} to={r.link} title={r.title}>
              {r.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
