
import CardList from '@/components/CardList';
import Search from '@/components/Search';
import { createClient } from 'contentful'



const client = createClient({
  space:'vdysvln6f42f',
  accessToken:'FI5O3H2xz7liH6YRs8-GqBFLUgEC-u7KwgdiB8rqHik'
})
async function getData() {
  const res = await client.getEntries({
    content_type:'checker',
    'fields.sold': 'false',
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
    <main className="flex min-h-screen bg-blue-300 flex-col items-center justify-between p-24 text-white">
      {/* Query Component or Form */}
      <div>
        <Search />
      </div>
      <div>
      
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
