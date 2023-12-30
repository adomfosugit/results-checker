import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
type Props = {}

const RetrieveCard = (props: Props) => {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="bg-blue-700 w-full hover:bg-blue-500">Continue</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Retrieve Card</DialogTitle>
        <DialogDescription>
          Kinldly Provide in the field below Paystack transactional reference sent to your email
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4 py-4">
        <div className="items-center gap-4 ">
          <Label htmlFor="name" className="text-right">
            Transaction ID
          </Label>
          <Input id="name" value="" placeholder='Transaction Reference' className="col-span-3" />
        </div>
      
      </div>
      <DialogFooter>
        <Button type="submit" className='bg-blue-800 hover:bg-blue-700'>Retrieve</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default RetrieveCard