
import React from 'react'

import { createClient } from 'contentful'
import CardList from '@/components/CardList';
import { PaystackHookExample } from '@/components/Paystack';



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

const page = async ({params:{buy}} ) => {

  const sets = decryptAndSplit(buy);
  
   console.log(sets)
  const data = await getData( sets[0], sets[2])
  const {items} = data

  return (
    <div className='pt-24 h-screen flex items-center justify-center'>
        <PaystackHookExample />
    </div>
 
  )
}

export default page
