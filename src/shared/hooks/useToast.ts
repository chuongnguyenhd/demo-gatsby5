import { UseToastOptions, useToast as useChakraToast } from '@chakra-ui/react';

const defaultOptions: UseToastOptions = {
  isClosable: true,
  position: 'top',
};

export const useToast = () => {
  const toast = useChakraToast();

  const infoToast = (title: string, options: UseToastOptions = {}) => {
    toast({
      ...defaultOptions,
      ...options,
      title,
      status: 'info',
    });
  };

  const errorToast = (title: string, options: UseToastOptions = {}) => {
    toast({
      ...defaultOptions,
      ...options,
      title,
      status: 'error',
    });
  };

  const successToast = (title: string, options: UseToastOptions = {}) => {
    toast({
      ...defaultOptions,
      ...options,
      title,
      status: 'success',
    });
  };

  const loadingToast = (title: string, options: UseToastOptions = {}) => {
    toast({
      ...defaultOptions,
      ...options,
      title,
      status: 'loading',
    });
  };

  return {
    infoToast,
    errorToast,
    successToast,
    loadingToast,
  };
};
