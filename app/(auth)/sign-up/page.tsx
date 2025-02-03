'use client';

import AuthForm from '@/components/AuthForm';
import { signUpSchema } from '@/lib/validation';
import React from 'react';

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: '',
        password: '',
        username: '',
      }}
      onSubmit={function (data: {
        email: string;
        password: string;
        username: string;
      }): Promise<{ success: boolean; error?: string }> {
        throw new Error('Function not implemented.');
      }}
    />
  );
};

export default Page;
