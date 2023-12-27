import { createClient } from 'contentful'
import Image from 'next/image'
import { stringify } from 'querystring';

const client = createClient({
  space:'vdysvln6f42f',
  accessToken:'FI5O3H2xz7liH6YRs8-GqBFLUgEC-u7KwgdiB8rqHik'
})
async function getData() {
  const res = await client.getEntries({
    content_type:'checker',
    
    
  })
  return res;
}

export default async function Home() {
  const data = await getData()
  const {items:[ fields]} = data
  
  {console.log(data)}


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      
      <div>
      <h2>Cards Information</h2>
    
    </div>
    </main>
  )
}
