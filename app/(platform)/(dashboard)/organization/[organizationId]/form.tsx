"use client"

import {create} from "@/actions/create-board";
import {Button} from "@/components/ui/button";
import {useFormState} from "react-dom";
import {FormInput} from "./form-input";
import FormButton from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-button";

 const Form = () => {
     const initialState:any = {message:null, errors: {}};
     const [state, dispatch] = useFormState(create, initialState);
   return (
       <form action={dispatch}>
           <div className={"flex flex-col space-y-2"}>
               <FormInput errors={state?.errors}/>
           </div>
           <FormButton/>
       </form>
   )
 }
export default Form;