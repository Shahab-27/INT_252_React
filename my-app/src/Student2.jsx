import React from 'react';
import Email from './email';
import Contact from './Contact';

function Student2({ temp1 }) {
  return (
    <>
      <p>Name : {temp1.name}</p>
      <p>Registration Number : {temp1.reg}</p>
      <p>Email :</p>
      <Email email1="abc1@gmail.com" email2="abc2@gmail.com" email3="abc3@gmail.com" />
      <p>Student's Contact No:</p>
      <Contact cont1="0547-123" cont2="0547-1244" cont3="0547-1233" />
    </>
  );
}

export default Student2;