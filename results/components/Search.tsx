"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { Input } from "./ui/input"
import Link from "next/link"




const formSchema = z.object({
  
  cardtype: z.string().min(2,{message:'Required*'}),
  quantity:z.coerce.number().lte(5, { message: "You can purchase maximum of 5 at a time" }).gt(0),
  email: z.string().email({message:'Required*'}),
})

 function Search() {
  const router = useRouter()
  // ...
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          cardtype: '',
          quantity: 1,
          email:'',
        
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        const { cardtype, email, quantity } = values;

        // Use template literals for string concatenation.
        const redirectPath = `${cardtype}||+${email}+ ||${quantity}`;
      
        // Navigate to the new path.
        router.push(redirectPath);
        // Do something with the form values.
        // This will be type-safe and validated.
      
        console.log(values)
        
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
       <h1 className="text-center font-bold text-[25px]"> Buy Your Card </h1>
      
        <FormField
          control={form.control}
          name="cardtype"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Type</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} >
                <SelectTrigger className="w-full text-black">
                    <SelectValue placeholder="Select Type of Card"  />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Card  Type</SelectLabel>
                    <SelectItem value="WASSCE RESULTS CHECKER">WASSCE RESULTS CHECKER </SelectItem>
                    <SelectItem value="BECE RESULTS CHECKER">BECE RESULTS CHECKER </SelectItem>
                    <SelectItem value="CSSPS PLACEMENT">CSSPS PLACEMENT </SelectItem>
                </SelectGroup>
                </SelectContent>
            </Select>
              </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
              <Input type="number" placeholder="Number" {...field} />
              </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
              <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />
      
        <Button type="submit" className="bg-blue-700 w-full hover:bg-blue-500">Submit</Button>
      </form>
    </Form>
  )
}
export default Search;