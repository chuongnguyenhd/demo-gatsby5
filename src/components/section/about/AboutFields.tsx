import { Box, Flex, Spinner } from '@chakra-ui/react';
import { Input } from '../../core/Form/Input';
import { Button, ButtonSizes, ButtonVariants } from '../../core/Button';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

export const AboutFields = ({ isLoading }: { isLoading: boolean }) => {
  const { reset } = useFormContext();
  console.log(isLoading);
  return (
    <Box
      className={
        'flex-center relative w-[600px] flex-col rounded-sm border border-gray-200 p-12 shadow'
      }
    >
      <Input
        required
        name="name"
        label={'Name'}
        className="px-6"
        inputProps={{
          height: '42px',
        }}
      />
      <Input
        required
        name="email"
        label={'Email'}
        className="px-6"
        inputProps={{
          height: '42px',
        }}
      />
      <Input
        required
        name="subject"
        label={'Subject'}
        className="px-6"
        inputProps={{
          height: '42px',
        }}
      />
      <Input
        required
        name="message"
        label={'Message'}
        className="px-6"
        inputProps={{
          height: '42px',
        }}
      />
      <Flex className={'mt-8 items-center justify-end gap-4'}>
        <Button
          name="Submit"
          size={ButtonSizes.SM}
          type="submit"
          variant={ButtonVariants.PRIMARY}
          className="h-fit min-h-fit w-[100px] px-4 py-2 text-sm font-medium leading-4"
        >
          Submit
        </Button>
        <Button
          name="Clear"
          size={ButtonSizes.SM}
          type="reset"
          variant={ButtonVariants.SECONDARY}
          className="h-fit min-h-fit w-[100px] px-4 py-2 text-sm font-medium leading-4"
          onClick={reset}
        >
          Clear
        </Button>
      </Flex>
      <Box
        className={classNames(
          ' bottom-0 left-0 right-0 top-0  bg-black opacity-50',
          { 'flex-center absolute': isLoading, hidden: !isLoading }
        )}
      >
        <Spinner color="red.500" />
      </Box>
    </Box>
  );
};
