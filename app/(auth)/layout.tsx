import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image
              src="/icons/logo-cs.svg"
              alt="logo"
              width={37}
              height={37}
            />
            <h1 className="text-2xl font-semibold text-black">
              Carsewa
            </h1>
          </div>

          <div>{children}</div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
