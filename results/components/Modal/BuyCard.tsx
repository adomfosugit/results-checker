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
import Search from '../Search'

type Props = {}

const BuyCard = ({func1}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 w-full hover:bg-blue-500">Continue</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      
       <Search seek = {func1}/>
      </DialogContent>
    </Dialog>
  )
}

export default BuyCard