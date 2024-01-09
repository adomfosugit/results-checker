'use client'
import { PaystackButton, usePaystackPayment } from "react-paystack";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";



 export const PaystackHookExample = () => {
    const publicKey = 'pk_test_1156b935d863b0c6d92a19b3678d034562cf062a'
    const amount = 1000
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const componentProps = {
        email,
        amount,
        custom_fields: {
          phone
          
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        
      }
    

    return (
        
      <div className="bg-slate-50 p-2 w-[300px] justify-center items-center h-[250px] rounded-sm">
          <form className="flex flex-col p-3">
           
            <label>Email</label>
            <Input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <label>Phone</label>
            <Input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          

          <PaystackButton {...componentProps} className="bg-blue-700  text-white  p-2 m-3 rounded mx-auto w-full"  currency="GHS"/>

        


        </div>
    
      
    );
  };