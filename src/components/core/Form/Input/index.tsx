import { FC, ReactNode, useState } from 'react';
import {
  FormLabel,
  InputProps,
  TextProps,
  Input as ChakraInput,
  Text,
  Button,
} from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import * as React from 'react';
import classNames from 'classnames';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface Props {
  name: string;
  required?: boolean;
  label?: string;
  defaultValue?: string | number;
  inputProps?: InputProps;
  errorProps?: TextProps;
  placeholder?: string;
  iconPrefix?: ReactNode;
  onIconPrefixClick?: () => void;
  iconSuffix?: ReactNode;
  onIconSuffixClick?: () => void;
  variant?: 'flushed' | 'filled' | 'unstyled' | 'outline';
  className?: string;
}

export const Input: FC<Props> = ({
  name,
  required,
  label,
  defaultValue,
  inputProps,
  placeholder,
  errorProps,
  iconPrefix,
  onIconPrefixClick,
  iconSuffix,
  onIconSuffixClick,
  className,
}) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { invalid, error },
      }) => {
        return (
          <div className={className}>
            {label && (
              <FormLabel
                htmlFor={inputProps?.id}
                className={classNames(
                  'mb-1.5 text-sm font-bold leading-5 text-gray-900',
                  {
                    'cursor-not-allowed opacity-40': inputProps?.isDisabled,
                    'cursor-default opacity-100': !inputProps?.isDisabled,
                  }
                )}
              >
                {label}
                {required && (
                  <span className="text-primary-500 mb-1">&nbsp;*</span>
                )}
              </FormLabel>
            )}

            <div className="relative">
              {/* Prefix Icon */}
              <span
                className={classNames(
                  'icon absolute left-3.5 top-1/2 -translate-y-1/2',
                  {
                    'cursor-pointer': Boolean(onIconPrefixClick),
                  }
                )}
                onClick={() => {
                  onIconPrefixClick && onIconPrefixClick();
                }}
              >
                {iconPrefix}
              </span>

              {/* Content */}
              {inputProps?.type === 'password' ? (
                <>
                  <ChakraInput
                    {...inputProps}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    _placeholder={{ color: 'gray.900', opacity: 0.6 }}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    pr="4rem"
                    isInvalid={invalid}
                    paddingLeft={iconPrefix ? `${14 * 2 + 24}px` : 0}
                    boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                  />
                  <div className="absolute right-0 top-0">
                    <Button
                      variant="ghost"
                      onClick={() => setShowPassword((prev) => !prev)}
                      _hover={{ backgroundColor: 'inherit' }}
                    >
                      {showPassword ? (
                        <ViewIcon color="primary.500" />
                      ) : (
                        <ViewOffIcon color="primary.500" />
                      )}
                    </Button>
                  </div>
                </>
              ) : (
                <ChakraInput
                  {...inputProps}
                  placeholder={placeholder}
                  _placeholder={{ color: 'gray.900', opacity: 0.6 }}
                  value={value || ''}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  isInvalid={invalid}
                  paddingLeft={iconPrefix ? `${14 * 2 + 24}px` : '14px'}
                  paddingRight={iconSuffix ? `${14 * 2 + 24}px` : '14px'}
                />
              )}

              {/* Suffix Icon */}
              {inputProps?.type !== 'password' && (
                <span
                  className={classNames(
                    'icon absolute right-3.5 top-1/2 -translate-y-1/2',
                    { 'cursor-pointer': Boolean(onIconSuffixClick) }
                  )}
                  onClick={() => {
                    onIconSuffixClick && onIconSuffixClick();
                  }}
                >
                  {iconSuffix}
                </span>
              )}
            </div>

            <Text
              color="red.600"
              mt={invalid ? '4px' : '0'}
              mb={invalid ? '1rem' : '0'}
              fontSize="12px"
              h="auto"
              textAlign="start"
              minHeight="16px"
              {...errorProps}
            >
              {invalid && error?.message}
            </Text>
          </div>
        );
      }}
    />
  );
};
