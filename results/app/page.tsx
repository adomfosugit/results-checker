import CardList from '@/components/CardList';
import { createClient } from 'contentful'
import Image from 'next/image'


const client = createClient({
  space:'vdysvln6f42f',
  accessToken:'FI5O3H2xz7liH6YRs8-GqBFLUgEC-u7KwgdiB8rqHik'
})
async function getData() {
  const res = await client.getEntries({
    content_type:'checker',
    'fields.sold': 'no',
    'fields.checkertype': 'WASSCE RESULTS CHECKER',
    limit:1
   })
  return res;
}

export default async function Home() {
  const data = await getData()
  const {items} = data
  
  
  {console.log(items)}


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      
      <div>
      <h2>Cards Information</h2>
      {data.items.map((i) => 
         
         <div className='gap-y-3 mb-3'>
          {/* @ts-ignore */}
          <CardList  details = {i.fields}/>
         </div>
           )}
    </div>
    </main>
  )
}
