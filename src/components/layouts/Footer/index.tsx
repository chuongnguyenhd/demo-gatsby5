import * as React from 'react';
import { Flex } from '@chakra-ui/react';
import { StarIcon } from '../../core/Icons/StarIcon';
import { routes } from '../../../router/routes';
import { Link } from 'gatsby';

export const Footer = () => {
  return (
    <div
      className={
        'max-h-footer max-w-appFull fixed bottom-0 left-0 right-0 z-50 h-full w-full border-t border-gray-200 bg-white px-[60px] py-4'
      }
    >
      <Flex className={'items-center justify-center'}>
        <Flex className={'flex-col items-center justify-center gap-2'}>
          {routes.map((r) => (
            <Link key={r.link} to={r.link} title={r.title}>
              {r.title}
            </Link>
          ))}
        </Flex>
      </Flex>
      <Flex className={'mt-2 justify-between'}>
        <Flex className={'items-center'}>
          <StarIcon />
          Logo
        </Flex>
        <Flex className={'gap-8 text-xs text-gray-500'}>
          <Link to={'#'}>Política de Privacidad</Link>
          <Link to={'#'}>Términos y Condiciones</Link>
          <Link to={'#'}>Código de Conducta</Link>
        </Flex>
      </Flex>
    </div>
  );
};
