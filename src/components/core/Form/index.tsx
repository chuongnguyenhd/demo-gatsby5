import { yupResolver } from '@hookform/resolvers/yup';
import { BaseSyntheticEvent, FormEvent, ReactElement } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  UseFormProps,
  useForm,
} from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { AnyObjectSchema } from 'yup';
import * as React from 'react';

export type FormHandlers = ReturnType<typeof useForm>;

export type SubmitEvent = BaseSyntheticEvent<object, unknown, unknown> | Event;

interface Props<T extends FieldValues> {
  children: ReactElement[] | ReactElement;
  onSubmit: (
    values: T,
    event?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    handlers?: FormHandlers
  ) => void | Promise<void> | ReturnType<SubmitHandler<T>>;
  onReset?: () => void | Promise<void>;
  onSubmitError?: SubmitErrorHandler<T>;
  options: UseFormProps<T>;
  schema: AnyObjectSchema;
  formId?: string;
}

export const Form = <T extends FieldValues>({
  children,
  onSubmit,
  onReset,
  onSubmitError,
  options,
  schema,
  formId,
}: Props<T>) => {
  const resolver = schema ? yupResolver(schema) : undefined;
  const methods = useForm<T>({ ...options, resolver });

  const { handleSubmit } = methods;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit((values, event) => {
      onSubmit(values, event, methods as FormHandlers);
    }, onSubmitError)(e);
  };

  const reset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onReset && onReset();
  };

  return (
    <form id={formId} onSubmit={submit} onReset={reset}>
      <FormProvider {...methods}>{children}</FormProvider>
    </form>
  );
};
