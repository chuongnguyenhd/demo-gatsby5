import React, { FC, ReactElement } from 'react';
import { Button, ButtonProps } from '@chakra-ui/button';
import { css } from '@emotion/react';

interface Props extends ButtonProps {
  icon: ReactElement;
}

export const IconButton: FC<Props> = ({ icon, ...rest }) => {
  return (
    <Button
      {...rest}
      leftIcon={icon}
      padding="0"
      variant="ghost"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        backgroundColor: 'unset',
      }}
      css={css`
        .chakra-button__icon {
          margin: 0;
        }
      `}
    />
  );
};
