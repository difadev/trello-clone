"use client"

import {createBoard} from "@/actions/create-board";
import {FormInput} from "./form-input";
import FormButton from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-button";
import {useAction} from "@/hooks/use-action";

 const Form = () => {
     const {execute, fieldErrors} = useAction(createBoard, {
         onSuccess: (data) => {
             console.log("Data", data)
         },
         onError: (error) => {
         }
     });
     const onSubmit = (formData: FormData) => {
         const title = formData.get("title") as string;
         execute({title});
     }
   return (
       <form action={onSubmit}>
           <div className={"flex flex-col space-y-2"}>
               <FormInput errors={fieldErrors}/>
           </div>
           <FormButton/>
       </form>
   )
 }
export default Form;