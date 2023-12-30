import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"

import { BadgeCheck } from "lucide-react"
import BuyCard from "./Modal/BuyCard"

 function OptionMenu() {
  return (
    <Card className="w-[350px] shadow-xl mb-3">
      <CardHeader>
        <CardTitle className="text-center font-bold text-2xl text-blue-700">Buy Card</CardTitle>
        <CardDescription>To purchase any of these cards, Click Continue</CardDescription>
      </CardHeader>
      <CardContent className=" flex flex-col mx-auto justify-center gap-y-2">
        <div className="flex gap-x-2">
        <BadgeCheck color="blue" />
            <p>WASSCE Results Checker  </p>
        </div>
        <div className="flex gap-x-2">
        <BadgeCheck color="blue"/>
            <p>BECE Results Checker  </p>
        </div>
        <div className="flex gap-x-2">
         <BadgeCheck color="blue" />
            <p>CSSPS PLACEMENT  </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        
              <BuyCard  />
      </CardFooter>
    </Card>
  )
}
export default OptionMenu;