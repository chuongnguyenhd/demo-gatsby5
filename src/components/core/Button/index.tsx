import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';
import classNames from 'classnames';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DESTRUCTIVE = 'destructive',
  DANGER = 'danger',
  OUTLINE = 'outline',
  TEXT = 'text',
}

export enum ButtonSizes {
  SM = 'small',
  MD = 'medium',
  LG = 'large',
  FIT = 'fit',
}

interface ButtonProps extends Omit<ChakraButtonProps, 'size' | 'className'> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
}

const getButtonBaseClasses = {
  [ButtonVariants.PRIMARY]: () => ({
    base: '!bg-primary-500 !border-primary-500 !text-white',
    hover: 'hover:!bg-white hover:!border-primary-500 hover:!text-primary-500',
  }),
  [ButtonVariants.SECONDARY]: () => ({
    base: 'bg-white border-gray-100 text-gray-900 shadow-[0_1px_2px_0px_#1018280F]',
    hover: 'hover:text-primary-500 hover:border-gray-100',
  }),
  [ButtonVariants.DESTRUCTIVE]: () => ({
    base: 'bg-error-50 border-error-50 text-error-600',
    hover: 'hover:bg-white hover:border-error-600 hover:text-error-600',
  }),
  [ButtonVariants.DANGER]: () => ({
    base: 'bg-error-600 border-error-600 text-white',
    hover: '!hover:bg-white !hover:border-error-600 !hove r:text-error-600',
  }),
  [ButtonVariants.OUTLINE]: () => ({
    base: 'bg-white border-primary-500 text-primary-500',
    hover: 'hover:border-white hover:bg-primary-500 hover:text-white',
  }),
  [ButtonVariants.TEXT]: () => ({
    base: 'border-none bg-transparent text-primary-500 min-w-fit',
    hover: 'hover:text-gray-300',
  }),
};

const getButtonSizeClasses = {
  [ButtonSizes.FIT]: () => ' min-w-fit min-h-fit text-sm',
  [ButtonSizes.SM]: () => 'min-w-[156px] min-h-[36px] text-sm',
  [ButtonSizes.MD]: () => 'min-w-[160px] min-h-[40px] text-sm',
  [ButtonSizes.LG]: () => 'min-w-[174px] min-h-[40px] text-base',
};

export const Button: FC<ButtonProps> = ({
  name,
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.MD,
  className,
  ...rest
}) => {
  const { isDisabled, isLoading } = rest;

  const { base, hover } =
    getButtonBaseClasses[variant]?.() ||
    getButtonBaseClasses[ButtonVariants.PRIMARY]();
  const btnSize =
    getButtonSizeClasses[size]?.() || getButtonSizeClasses[ButtonSizes.MD]();

  return (
    <ChakraButton
      {...rest}
      className={classNames(
        twMerge(['rounded border font-medium', base, btnSize, className]),
        {
          [hover]: !isDisabled && !isLoading,
        }
      )}
    >
      {name}
    </ChakraButton>
  );
};
