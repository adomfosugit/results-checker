
import CardList from '@/components/CardList';
import OptionMenu from '@/components/OptionMenu';
import OptionMenu2 from '@/components/OptionMenu2';

import { createClient } from 'contentful'



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

export default async function Home() {

const data = await getData('WASSCE RESULTS CHECKER',1)
  const {items} = data
 {console.log(items)}
 //<div>
 //{data.items.map((i) => 
  
 // <div className='gap-y-3 mb-3'>
   {/* @ts-ignore */}
 //<CardList  details = {i.fields}/>
 // </div>
 //   )}
 //</div>

 
 
  
  return (
    <main className=" flex min-h-screen flex-col md:flex-row items-center justify-between mx-auto p-24  max-w-[1000px]">
      {/* Query Component or Form */}
     
      
        <OptionMenu />
        <OptionMenu2 />
      

     
       
    </main>
  )
}
