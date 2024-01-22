// Step 1: Import React
import * as React from 'react';
import { PageProps } from 'gatsby';
import { PublicLayout } from '../components/layouts';
import { Form } from '../components/core/Form';
import * as yup from 'yup';
import { useToast } from '../shared/hooks/useToast';
import { AboutFields } from '../components/section/about/AboutFields';
import { useState } from 'react';

interface FormValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"$\-%#\^\*&\+=~`'/{}|]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email address'
    ),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  const { successToast, errorToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (value: FormValue) => {
    setIsLoading(true);
    await fetch('https://sheetdb.io/api/v1/89rwi9htllpy6', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        headers: {
          Authorization: 'Bearer 8u92odwtnk5nto5rv08x5jiiq58ck2p5so42ft51',
        },
      },
      body: JSON.stringify({
        data: [
          {
            id: 'INCREMENT',
            name: value.name,
            email: value.email,
            subject: value.subject,
            message: value.message,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.created === 1) {
          successToast('Submit successfully!!!');
        } else {
          errorToast('Submit failed!!!');
        }
        setIsLoading(false);
      });
  };

  return (
    <PublicLayout>
      <div className={'flex-center'}>
        <Form
          onSubmit={submitHandler}
          options={{
            values: {
              name: '',
              email: '',
              subject: '',
              message: '',
            },
          }}
          schema={schema}
        >
          <AboutFields isLoading={isLoading} />
        </Form>
      </div>
    </PublicLayout>
  );
};
export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default AboutPage;
