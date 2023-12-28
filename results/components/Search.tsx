"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"



const formSchema = z.object({
  
  cardtype: z.string().min(2,{message:'Required*'}),
  
})

 function Search() {
  const router = useRouter()
  // ...
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          cardtype: '',
        
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        
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
                <SelectTrigger className="w-[250px] text-black">
                    <SelectValue placeholder="Select Type of Card" />
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
        <Button type="submit" className="w-full ">Submit</Button>
      </form>
    </Form>
  )
}
export default Search;