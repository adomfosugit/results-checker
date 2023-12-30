
import React from 'react'

import { createClient } from 'contentful'
import CardList from '@/components/CardList';
import { usePaystackPayment } from 'react-paystack';
import { Button } from '@/components/ui/button';



type Props = {}
// function to decrypt url
function decryptAndSplit(encodedString:string) {
  try {
    // Replace %20 with a space, %2B with a plus sign, %40 with @, and %7C with |.
    const decryptedString = decodeURIComponent(encodedString.replace(/%20/g, ' ').replace(/%2B/g, ' ').replace(/%40/g, '@').replace(/%7C/g, '|'));

    // Split the decrypted string into three sets using || as the reference separator.
    const sets = decryptedString.split('||');
    
    return sets;
  } catch (error) {
    console.error('Error decrypting and splitting string:', error);
    return null;
  }
}


const client = createClient({
  space:'vdysvln6f42f',
  accessToken:'FI5O3H2xz7liH6YRs8-GqBFLUgEC-u7KwgdiB8rqHik'
})
async function getData(cardType:string,quantity:number) {
  const res = await client.getEntries({
    content_type:'checker',
    'fields.sold': 'false',
    'fields.checkertype': cardType,
    limit:quantity
   })
  return res;
}

// PAYSTACK
const config = {
  reference: (new Date()).getTime(),
  username: 'Kweku',
  email: 'adomfosu2000@gmail.com',
  amount: `{0.15 * 100}`,
  //publicKey: 'pk_live_7b0117b105694184900ff75ce52987cae7c1b04f',
  publicKey: 'pk_test_1156b935d863b0c6d92a19b3678d034562cf062a',
  currency: 'GHS'
};

// you can call this function anything
const onSuccess = (reference:string) => {
// Implementation for whatever you want to do with reference and after success call.
console.log(reference);
};

// you can call this function anything
const onClose = () => {
// implementation for  whatever you want to do when the Paystack dialog closed.
console.log('closed')
}

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div className='btn-container'>
        <button  type = 'button' className='btn' onClick={() => {
            initializePayment(onSuccess, onClose)
        }}>Pay with Paystack</button>
    </div>
  );
};





const page = async ({params:{buy}} ) => {
  const sets = decryptAndSplit(buy);

  const data = await getData( sets[0], sets[2],)
  const {items} = data

  return (
    <div className='pt-24 h-screen flex items-center justify-center'>
        <PaystackHookExample />
    </div>
 
  )
}

export default page
