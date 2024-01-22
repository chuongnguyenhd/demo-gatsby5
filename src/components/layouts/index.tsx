import { Header } from './Header';
import { Footer } from './Footer';
import * as React from 'react';
import { FC, PropsWithChildren } from 'react';

export const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div
        className={
          'h-content mb-[182px] mt-20 overflow-y-auto overflow-x-hidden py-4'
        }
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
