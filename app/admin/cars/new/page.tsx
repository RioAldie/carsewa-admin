import CarForm from '@/components/CarForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/cars">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <CarForm />
      </section>
    </>
  );
};

export default Page;
