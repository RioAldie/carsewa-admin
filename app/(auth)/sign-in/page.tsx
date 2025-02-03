'use client';

import AuthForm from '@/components/AuthForm';
import { signInSchema } from '@/lib/validation';
import React from 'react';

const Page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: '',
        password: '',
      }}
      onSubmit={function (data: {
        email: string;
        password: string;
      }): Promise<{ success: boolean; error?: string }> {
        throw new Error('Function not implemented.');
      }}
    />
  );
};

export default Page;
