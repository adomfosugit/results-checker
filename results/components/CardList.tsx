import React from 'react'
import {
    Dialog,
    DialogContent,
  
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button';

type Props = {
    details: {
        pin:string;
        serial:string;

    }
}

const CardList = ({details}: Props) => {
    const {serial,pin} = details
  return (

    <Dialog>
    <DialogTrigger >

      <Button variant="outline">Pay To view Card </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
 
    <div className='shadow-lg p-2 ring-2 rounded-sm text-black'>
        <h1 className='text-center font-bold'>Your Card Details</h1>
        <div className='flex flex-row gap-2'>
            <p className='font-semibold'>Serial Number :</p>
            <p>{serial}</p>
        </div>
        <div className='flex flex-row gap-2 justify-center'>
            <p className='font-semibold'> Pin :</p>
            <p>{pin}</p>
        </div>
         
    </div>
    </DialogContent>
  </Dialog>

  )
}

export default CardList