import React from 'react';
import Image from 'next/image';
import PaymentPage from '@/components/PaymentPage';

const Username = async ({ params }) => {
  const { username } = await params; 

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
};

export default Username;


