
import {useFormStatus} from "react-dom";
import {Input} from "@/components/ui/input";

interface FormInputProps {
    errors?: {
        title?: string []
    }
}

export const FormInput  = ({errors} : FormInputProps) => {
    const {pending} = useFormStatus();
    return (
       <>
           <input
               id="title"
               name="title"
               required
               placeholder="Enter a board title"
               disabled={pending}
           />
           {
               errors?.title && (
                   <div>
                       {errors.title.map((message: string) => (
                           <p key={message} className={"text-rose-500"}>{message}</p>
                       ))}
                   </div>
               )
           }
       </>
    )
}